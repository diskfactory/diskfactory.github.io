const LOCALES = [
  { id: "ko", label: "한국어" },
  { id: "en", label: "English" },
  { id: "pt-BR", label: "Português" },
];
const DRAFT_KEY = "diskfactory.project-editor.draft.v1";

const state = {
  projects: [],
  images: [],
  digest: "",
  selectedIndex: 0,
  editLocale: "ko",
  previewLocale: "ko",
  dirty: false,
  assetTarget: null,
  validationTimer: null,
};

const elements = {
  addProjectButton: document.querySelector("#addProjectButton"),
  applyButton: document.querySelector("#applyButton"),
  assetDialog: document.querySelector("#assetDialog"),
  assetGrid: document.querySelector("#assetGrid"),
  assetSearch: document.querySelector("#assetSearch"),
  closeAssetDialog: document.querySelector("#closeAssetDialog"),
  editor: document.querySelector("#editor"),
  preview: document.querySelector("#preview"),
  previewLocale: document.querySelector("#previewLocale"),
  projectCount: document.querySelector("#projectCount"),
  projectList: document.querySelector("#projectList"),
  reloadButton: document.querySelector("#reloadButton"),
  saveDraftButton: document.querySelector("#saveDraftButton"),
  toastRegion: document.querySelector("#toastRegion"),
  validateButton: document.querySelector("#validateButton"),
  validationCard: document.querySelector("#validationCard"),
  validationList: document.querySelector("#validationList"),
  validationSummary: document.querySelector("#validationSummary"),
};

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function assetUrl(path) {
  return path ? `/assets${path}` : "";
}

function emptyLocalizedText() {
  return { ko: "", en: "", "pt-BR": "" };
}

function createProject(source) {
  if (source) {
    const copy = clone(source);
    copy.id = `${source.id}-copy`;
    copy.title = { ...copy.title, ko: `${copy.title.ko} 복사본` };
    return normalizeProject(copy);
  }
  return normalizeProject({
    id: "new-project",
    title: emptyLocalizedText(),
    description: emptyLocalizedText(),
    fullDescription: emptyLocalizedText(),
    thumbnail: "",
    icon: "",
    tags: [],
    links: {},
    screenshots: [],
    features: [],
  });
}

function normalizeProject(project) {
  return {
    id: project.id ?? "",
    title: { ...emptyLocalizedText(), ...(project.title ?? {}) },
    description: { ...emptyLocalizedText(), ...(project.description ?? {}) },
    fullDescription: { ...emptyLocalizedText(), ...(project.fullDescription ?? {}) },
    thumbnail: project.thumbnail ?? "",
    icon: project.icon ?? "",
    tags: Array.isArray(project.tags) ? project.tags : [],
    links: {
      playstore: project.links?.playstore ?? "",
      appstore: project.links?.appstore ?? "",
      steam: project.links?.steam ?? "",
    },
    privacySlug: project.privacySlug ?? "",
    termsSlug: project.termsSlug ?? "",
    accountDeletionSlug: project.accountDeletionSlug ?? "",
    youtubeId: project.youtubeId ?? "",
    screenshots: Array.isArray(project.screenshots) ? project.screenshots : [],
    features: Array.isArray(project.features)
      ? project.features.map((feature) => ({ ...emptyLocalizedText(), ...feature }))
      : [],
  };
}

function projectsForSave() {
  return state.projects.map((project) => {
    const clean = clone(project);
    clean.tags = clean.tags.map((tag) => tag.trim()).filter(Boolean);
    clean.screenshots = clean.screenshots.map((path) => path.trim()).filter(Boolean);
    clean.features = clean.features.filter((feature) => Object.values(feature).some((value) => value.trim()));

    for (const field of ["privacySlug", "termsSlug", "accountDeletionSlug", "youtubeId"]) {
      clean[field] = clean[field].trim();
      if (!clean[field]) delete clean[field];
    }
    for (const field of ["playstore", "appstore", "steam"]) {
      clean.links[field] = clean.links[field].trim();
      if (!clean.links[field]) delete clean.links[field];
    }
    if (Object.keys(clean.links).length === 0) delete clean.links;
    return clean;
  });
}

function currentProject() {
  return state.projects[state.selectedIndex];
}

function setAtPath(object, path, value) {
  const keys = path.split(".");
  const finalKey = keys.pop();
  const target = keys.reduce((value, key) => value[key], object);
  target[finalKey] = value;
}

function uniqueId(base) {
  let candidate = base;
  let suffix = 2;
  const ids = new Set(state.projects.map((project) => project.id));
  while (ids.has(candidate)) candidate = `${base}-${suffix++}`;
  return candidate;
}

function markDirty() {
  state.dirty = true;
  elements.applyButton.textContent = "projects.ts에 반영 · 변경 있음";
  window.clearTimeout(state.validationTimer);
  state.validationTimer = window.setTimeout(() => validateProjects(false), 650);
  saveDraft(false);
}

function saveDraft(showMessage = true) {
  localStorage.setItem(DRAFT_KEY, JSON.stringify({
    baseDigest: state.digest,
    projects: state.projects,
    savedAt: new Date().toISOString(),
  }));
  if (showMessage) toast("현재 편집 내용을 브라우저 초안에 저장했습니다.");
}

function toast(message, isError = false) {
  const item = document.createElement("div");
  item.className = `toast${isError ? " error" : ""}`;
  item.textContent = message;
  elements.toastRegion.append(item);
  window.setTimeout(() => item.remove(), 3_500);
}

async function api(path, options) {
  const response = await fetch(path, options);
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    const error = new Error(payload.error ?? "요청을 처리하지 못했습니다.");
    error.status = response.status;
    error.payload = payload;
    throw error;
  }
  return payload;
}

async function loadProjects({ discardDraft = false } = {}) {
  setBusy(true);
  try {
    const payload = await api("/api/projects");
    state.images = payload.images;
    state.digest = payload.digest;
    state.projects = payload.projects.map(normalizeProject);
    state.selectedIndex = Math.min(state.selectedIndex, Math.max(0, state.projects.length - 1));
    state.dirty = false;

    if (!discardDraft) {
      const rawDraft = localStorage.getItem(DRAFT_KEY);
      if (rawDraft) {
        const draft = JSON.parse(rawDraft);
        if (draft.baseDigest === state.digest && Array.isArray(draft.projects)) {
          state.projects = draft.projects.map(normalizeProject);
          state.dirty = JSON.stringify(state.projects) !== JSON.stringify(payload.projects.map(normalizeProject));
          if (state.dirty) toast("이전에 저장한 편집 초안을 복구했습니다.");
        } else {
          localStorage.removeItem(DRAFT_KEY);
          toast("원본이 바뀌어 오래된 초안은 사용하지 않았습니다.");
        }
      }
    }
    renderAll();
    validateProjects(false);
  } catch (error) {
    elements.editor.innerHTML = `<div class="loading-card">${escapeHtml(error.message)}</div>`;
    toast(error.message, true);
  } finally {
    setBusy(false);
  }
}

function setBusy(busy) {
  elements.applyButton.disabled = busy;
  elements.reloadButton.disabled = busy;
  elements.saveDraftButton.disabled = busy;
}

function renderAll() {
  renderProjectList();
  renderEditor();
  renderPreview();
  elements.projectCount.textContent = `${state.projects.length}개`;
  elements.applyButton.textContent = state.dirty ? "projects.ts에 반영 · 변경 있음" : "projects.ts에 반영";
}

function renderProjectList() {
  elements.projectList.innerHTML = state.projects.map((project, index) => {
    const icon = project.icon
      ? `<img class="project-thumb" src="${escapeHtml(assetUrl(project.icon))}" alt="" />`
      : `<span class="project-thumb placeholder">${escapeHtml(project.id.slice(0, 2).toUpperCase())}</span>`;
    return `
      <button class="project-item${index === state.selectedIndex ? " active" : ""}" data-select-project="${index}" type="button">
        ${icon}
        <span class="project-copy">
          <strong>${escapeHtml(project.title.ko || project.title.en || "이름 없는 프로젝트")}</strong>
          <span>${escapeHtml(project.id || "ID 미입력")}</span>
        </span>
      </button>`;
  }).join("");
}

function textInput(label, path, value, options = {}) {
  const { full = false, placeholder = "", help = "" } = options;
  return `
    <div class="field${full ? " full" : ""}">
      <label>${escapeHtml(label)}</label>
      <input data-path="${escapeHtml(path)}" value="${escapeHtml(value)}" placeholder="${escapeHtml(placeholder)}" />
      ${help ? `<small>${escapeHtml(help)}</small>` : ""}
    </div>`;
}

function mediaInput(label, path, value, options = {}) {
  return `
    <div class="field${options.full ? " full" : ""}">
      <label>${escapeHtml(label)}</label>
      <div class="input-with-action">
        <input data-path="${escapeHtml(path)}" value="${escapeHtml(value)}" placeholder="/images/project/file.png" />
        <button class="button ghost" data-pick-asset="${escapeHtml(path)}" type="button">찾기</button>
      </div>
    </div>`;
}

function renderEditor() {
  const project = currentProject();
  if (!project) {
    elements.editor.innerHTML = `<div class="empty-editor"><div><h2>프로젝트가 없습니다</h2><p>왼쪽의 + 버튼으로 첫 프로젝트를 추가하세요.</p></div></div>`;
    return;
  }

  const translationTabs = LOCALES.map((locale) => `
    <button class="translation-tab${locale.id === state.editLocale ? " active" : ""}" data-edit-locale="${locale.id}" type="button">${locale.label}</button>
  `).join("");

  const translationPanels = LOCALES.map((locale) => `
    <div class="translation-panel" data-locale-panel="${locale.id}" ${locale.id === state.editLocale ? "" : "hidden"}>
      <div class="form-grid">
        ${textInput("프로젝트 이름", `title.${locale.id}`, project.title[locale.id], { full: true })}
        <div class="field full">
          <label>짧은 소개</label>
          <textarea data-path="description.${locale.id}" placeholder="메인 프로젝트 카드에 표시됩니다.">${escapeHtml(project.description[locale.id])}</textarea>
        </div>
        <div class="field full">
          <label>전체 소개</label>
          <textarea class="tall" data-path="fullDescription.${locale.id}" placeholder="프로젝트 상세 페이지에 표시됩니다.">${escapeHtml(project.fullDescription[locale.id])}</textarea>
        </div>
      </div>
    </div>`).join("");

  const screenshotRows = project.screenshots.map((path, index) => `
    <div class="media-row">
      <input data-path="screenshots.${index}" value="${escapeHtml(path)}" placeholder="/images/project/screenshot.png" />
      <button class="mini-button" data-pick-asset="screenshots.${index}" type="button">찾기</button>
      <button class="mini-button danger" data-action="remove-screenshot" data-index="${index}" type="button">삭제</button>
    </div>`).join("");

  const featureRows = project.features.map((feature, index) => `
    <div class="feature-card">
      <div class="section-heading">
        <strong>특징 ${index + 1}</strong>
        <button class="text-button" data-action="remove-feature" data-index="${index}" type="button">삭제</button>
      </div>
      <div class="form-grid three">
        ${LOCALES.map((locale) => textInput(locale.label, `features.${index}.${locale.id}`, feature[locale.id])).join("")}
      </div>
    </div>`).join("");

  elements.editor.innerHTML = `
    <div class="editor-header">
      <div>
        <p class="eyebrow">EDITING PROJECT ${state.selectedIndex + 1} / ${state.projects.length}</p>
        <h2>${escapeHtml(project.title.ko || project.title.en || "새 프로젝트")}</h2>
        <p>입력 내용은 자동으로 로컬 초안에 보관됩니다.</p>
      </div>
      <div class="row-actions">
        <button class="button ghost" data-action="move-up" type="button" ${state.selectedIndex === 0 ? "disabled" : ""}>↑</button>
        <button class="button ghost" data-action="move-down" type="button" ${state.selectedIndex === state.projects.length - 1 ? "disabled" : ""}>↓</button>
        <button class="button ghost" data-action="duplicate" type="button">복제</button>
        <button class="button ghost danger" data-action="delete-project" type="button">삭제</button>
      </div>
    </div>

    <section class="form-section">
      <div class="section-heading"><div><h3>기본 정보</h3><p>페이지 주소와 카드 분류에 쓰입니다.</p></div></div>
      <div class="form-grid">
        ${textInput("프로젝트 ID", "id", project.id, { help: "영문 소문자와 하이픈. 상세 페이지 주소에도 사용됩니다." })}
        ${textInput("태그", "tags", project.tags.join(", "), { help: "쉼표로 여러 태그를 구분합니다." })}
      </div>
    </section>

    <section class="form-section">
      <div class="section-heading"><div><h3>다국어 콘텐츠</h3><p>언어 탭을 바꾸며 같은 항목을 작성하세요.</p></div></div>
      <div class="translation-tabs">${translationTabs}</div>
      ${translationPanels}
    </section>

    <section class="form-section">
      <div class="section-heading"><div><h3>대표 이미지</h3><p>실제 public/images 파일을 찾아 바로 연결할 수 있습니다.</p></div></div>
      <div class="form-grid">
        ${mediaInput("가로 썸네일", "thumbnail", project.thumbnail)}
        ${mediaInput("앱 아이콘", "icon", project.icon)}
      </div>
    </section>

    <section class="form-section">
      <div class="section-heading">
        <div><h3>갤러리 스크린샷</h3><p>표시될 순서대로 위에서 아래로 입력됩니다.</p></div>
        <button class="text-button" data-action="add-screenshot" type="button">+ 스크린샷 추가</button>
      </div>
      <div class="repeat-list">${screenshotRows || `<p class="eyebrow">등록된 스크린샷 없음</p>`}</div>
    </section>

    <section class="form-section">
      <div class="section-heading"><div><h3>스토어와 문서 링크</h3><p>없는 항목은 비워두면 최종 데이터에서 제외됩니다.</p></div></div>
      <div class="form-grid">
        ${textInput("Google Play", "links.playstore", project.links.playstore, { full: true, placeholder: "https://play.google.com/store/apps/details?id=..." })}
        ${textInput("App Store", "links.appstore", project.links.appstore, { full: true, placeholder: "https://apps.apple.com/app/id..." })}
        ${textInput("Steam", "links.steam", project.links.steam, { full: true, placeholder: "https://store.steampowered.com/app/..." })}
        ${textInput("개인정보 처리방침 slug", "privacySlug", project.privacySlug)}
        ${textInput("서비스 이용약관 slug", "termsSlug", project.termsSlug)}
        ${textInput("계정 삭제 안내 slug", "accountDeletionSlug", project.accountDeletionSlug)}
        ${textInput("YouTube 영상 ID", "youtubeId", project.youtubeId, { help: "전체 URL이 아니라 v= 뒤의 영상 ID만 입력합니다." })}
      </div>
    </section>

    <section class="form-section">
      <div class="section-heading">
        <div><h3>주요 특징</h3><p>상세 페이지 하단의 특징 목록입니다.</p></div>
        <button class="text-button" data-action="add-feature" type="button">+ 특징 추가</button>
      </div>
      <div class="repeat-list">${featureRows || `<p class="eyebrow">등록된 특징 없음</p>`}</div>
    </section>`;
}

function renderPreview() {
  const project = currentProject();
  if (!project) {
    elements.preview.innerHTML = "";
    return;
  }
  const locale = state.previewLocale;
  const title = project.title[locale] || project.title.ko || "프로젝트 이름";
  const description = project.description[locale] || "짧은 소개가 이곳에 표시됩니다.";
  const hero = project.thumbnail
    ? `<img src="${escapeHtml(assetUrl(project.thumbnail))}" alt="" />`
    : `<div class="preview-empty">THUMBNAIL PREVIEW</div>`;
  const icon = project.icon
    ? `<img class="preview-icon" src="${escapeHtml(assetUrl(project.icon))}" alt="" />`
    : `<span class="preview-icon empty">ICON</span>`;
  elements.preview.innerHTML = `
    <article class="site-preview">
      <div class="preview-hero">${hero}</div>
      <div class="preview-body">
        <div class="preview-identity">
          ${icon}
          <div>
            <h3>${escapeHtml(title)}</h3>
            <div class="preview-tags">${project.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</div>
          </div>
        </div>
        <p class="preview-description">${escapeHtml(description)}</p>
        <div class="preview-meta"><span>/${escapeHtml(project.id || "project-id")}</span><span>${project.screenshots.length} SCREENS</span></div>
      </div>
    </article>`;
}

function renderValidation(validation) {
  const errors = validation.errors ?? [];
  const warnings = validation.warnings ?? [];
  elements.validationCard.classList.toggle("ok", errors.length === 0 && warnings.length === 0);
  elements.validationCard.classList.toggle("warning", errors.length === 0 && warnings.length > 0);
  if (errors.length > 0) {
    elements.validationSummary.textContent = `수정이 필요한 항목 ${errors.length}개`;
    elements.validationList.innerHTML = errors.slice(0, 12).map((message) => `<li>${escapeHtml(message)}</li>`).join("");
  } else if (warnings.length > 0) {
    elements.validationSummary.textContent = `반영 가능하지만 확인할 경고 ${warnings.length}개`;
    elements.validationList.innerHTML = warnings.slice(0, 12).map((message) => `<li>${escapeHtml(message)}</li>`).join("");
  } else {
    elements.validationSummary.textContent = "모든 필수값과 연결된 이미지가 정상입니다.";
    elements.validationList.innerHTML = "";
  }
}

async function validateProjects(showMessage = true) {
  try {
    const validation = await api("/api/projects/validate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ projects: projectsForSave() }),
    });
    renderValidation(validation);
    if (showMessage) toast(validation.errors.length ? "수정할 항목이 있습니다." : "데이터 검사를 마쳤습니다.", validation.errors.length > 0);
    return validation;
  } catch (error) {
    toast(error.message, true);
    return { errors: [error.message], warnings: [] };
  }
}

async function applyProjects() {
  setBusy(true);
  try {
    const validation = await validateProjects(false);
    if (validation.errors.length > 0) {
      toast("오류를 수정한 뒤 다시 반영하세요.", true);
      return;
    }
    if (validation.warnings.length > 0 && !window.confirm(`${validation.warnings.length}개의 이미지 경고가 있습니다. 그래도 반영할까요?`)) return;
    if (!window.confirm(`현재 ${state.projects.length}개 프로젝트 데이터를 data/projects.ts에 반영할까요?`)) return;

    const result = await api("/api/projects", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ digest: state.digest, projects: projectsForSave() }),
    });
    state.digest = result.digest;
    state.dirty = false;
    localStorage.removeItem(DRAFT_KEY);
    elements.applyButton.textContent = "projects.ts에 반영";
    toast(result.message);
    await loadProjects({ discardDraft: true });
  } catch (error) {
    if (error.payload?.errors) renderValidation(error.payload);
    toast(error.message, true);
  } finally {
    setBusy(false);
  }
}

function openAssetPicker(path) {
  state.assetTarget = path;
  elements.assetSearch.value = "";
  renderAssetGrid();
  elements.assetDialog.showModal();
  window.setTimeout(() => elements.assetSearch.focus(), 50);
}

function renderAssetGrid() {
  const query = elements.assetSearch.value.trim().toLowerCase();
  const images = state.images.filter((path) => path.toLowerCase().includes(query));
  elements.assetGrid.innerHTML = images.map((path) => `
    <button class="asset-item" data-asset-path="${escapeHtml(path)}" type="button">
      <img src="${escapeHtml(assetUrl(path))}" alt="" loading="lazy" />
      <span title="${escapeHtml(path)}">${escapeHtml(path)}</span>
    </button>`).join("") || `<div class="loading-card">일치하는 이미지가 없습니다.</div>`;
}

function performAction(action, index) {
  const project = currentProject();
  if (!project) return;
  if (action === "add-screenshot") project.screenshots.push("");
  if (action === "remove-screenshot") project.screenshots.splice(index, 1);
  if (action === "add-feature") project.features.push(emptyLocalizedText());
  if (action === "remove-feature") project.features.splice(index, 1);
  if (action === "duplicate") {
    const duplicate = createProject(project);
    duplicate.id = uniqueId(duplicate.id);
    state.projects.splice(state.selectedIndex + 1, 0, duplicate);
    state.selectedIndex += 1;
  }
  if (action === "delete-project") {
    if (!window.confirm(`'${project.title.ko || project.id}' 프로젝트를 편집 목록에서 삭제할까요? 실제 파일은 최종 반영 전까지 바뀌지 않습니다.`)) return;
    state.projects.splice(state.selectedIndex, 1);
    state.selectedIndex = Math.min(state.selectedIndex, Math.max(0, state.projects.length - 1));
  }
  if (action === "move-up" && state.selectedIndex > 0) {
    [state.projects[state.selectedIndex - 1], state.projects[state.selectedIndex]] = [state.projects[state.selectedIndex], state.projects[state.selectedIndex - 1]];
    state.selectedIndex -= 1;
  }
  if (action === "move-down" && state.selectedIndex < state.projects.length - 1) {
    [state.projects[state.selectedIndex + 1], state.projects[state.selectedIndex]] = [state.projects[state.selectedIndex], state.projects[state.selectedIndex + 1]];
    state.selectedIndex += 1;
  }
  markDirty();
  renderAll();
}

elements.projectList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-select-project]");
  if (!button) return;
  state.selectedIndex = Number(button.dataset.selectProject);
  renderAll();
});

elements.editor.addEventListener("input", (event) => {
  const input = event.target.closest("[data-path]");
  const project = currentProject();
  if (!input || !project) return;
  const path = input.dataset.path;
  if (path === "tags") project.tags = input.value.split(",").map((tag) => tag.trim()).filter(Boolean);
  else setAtPath(project, path, input.value);
  markDirty();
  renderProjectList();
  renderPreview();
  const header = elements.editor.querySelector(".editor-header h2");
  if (header) header.textContent = project.title.ko || project.title.en || "새 프로젝트";
});

elements.editor.addEventListener("click", (event) => {
  const localeButton = event.target.closest("[data-edit-locale]");
  if (localeButton) {
    state.editLocale = localeButton.dataset.editLocale;
    renderEditor();
    return;
  }
  const assetButton = event.target.closest("[data-pick-asset]");
  if (assetButton) {
    openAssetPicker(assetButton.dataset.pickAsset);
    return;
  }
  const actionButton = event.target.closest("[data-action]");
  if (actionButton) performAction(actionButton.dataset.action, Number(actionButton.dataset.index));
});

elements.addProjectButton.addEventListener("click", () => {
  const project = createProject();
  project.id = uniqueId(project.id);
  state.projects.push(project);
  state.selectedIndex = state.projects.length - 1;
  markDirty();
  renderAll();
});

elements.previewLocale.addEventListener("change", () => {
  state.previewLocale = elements.previewLocale.value;
  renderPreview();
});
elements.saveDraftButton.addEventListener("click", () => saveDraft(true));
elements.validateButton.addEventListener("click", () => validateProjects(true));
elements.applyButton.addEventListener("click", applyProjects);
elements.reloadButton.addEventListener("click", async () => {
  if (state.dirty && !window.confirm("현재 편집 중인 초안을 버리고 projects.ts를 다시 불러올까요?")) return;
  localStorage.removeItem(DRAFT_KEY);
  await loadProjects({ discardDraft: true });
  toast("projects.ts의 최신 내용을 다시 불러왔습니다.");
});

elements.closeAssetDialog.addEventListener("click", () => elements.assetDialog.close());
elements.assetSearch.addEventListener("input", renderAssetGrid);
elements.assetGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-asset-path]");
  const project = currentProject();
  if (!button || !project || !state.assetTarget) return;
  setAtPath(project, state.assetTarget, button.dataset.assetPath);
  elements.assetDialog.close();
  markDirty();
  renderAll();
});
elements.assetDialog.addEventListener("click", (event) => {
  if (event.target === elements.assetDialog) elements.assetDialog.close();
});

window.addEventListener("beforeunload", (event) => {
  if (!state.dirty) return;
  saveDraft(false);
  event.preventDefault();
});

loadProjects();
