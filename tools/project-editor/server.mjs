import { createServer } from "node:http";
import { createHash } from "node:crypto";
import { existsSync } from "node:fs";
import { readFile, readdir, rename, stat, writeFile } from "node:fs/promises";
import { dirname, extname, join, normalize, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";
import vm from "node:vm";
import ts from "typescript";

const HOST = "127.0.0.1";
const PORT = Number.parseInt(process.env.PROJECT_EDITOR_PORT ?? "4173", 10);
const TOOL_ROOT = resolve(fileURLToPath(new URL(".", import.meta.url)));
const REPO_ROOT = resolve(TOOL_ROOT, "../..");
const PUBLIC_ROOT = join(REPO_ROOT, "public");
const PROJECTS_FILE = process.env.PROJECT_EDITOR_PROJECTS_FILE
  ? resolve(process.env.PROJECT_EDITOR_PROJECTS_FILE)
  : join(REPO_ROOT, "data", "projects.ts");
const IMAGE_EXTENSIONS = new Set([".avif", ".gif", ".jpeg", ".jpg", ".png", ".svg", ".webp"]);
const MIME_TYPES = {
  ".css": "text/css; charset=utf-8",
  ".gif": "image/gif",
  ".html": "text/html; charset=utf-8",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
};

function digest(source) {
  return createHash("sha256").update(source).digest("hex");
}

function findProjectsInitializer(source) {
  const sourceFile = ts.createSourceFile(PROJECTS_FILE, source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);

  for (const statement of sourceFile.statements) {
    if (!ts.isVariableStatement(statement)) continue;
    for (const declaration of statement.declarationList.declarations) {
      if (ts.isIdentifier(declaration.name) && declaration.name.text === "projects" && declaration.initializer) {
        return declaration.initializer.getText(sourceFile);
      }
    }
  }

  throw new Error("projects 배열을 data/projects.ts에서 찾지 못했습니다.");
}

function parseProjects(source) {
  const expression = findProjectsInitializer(source);
  const transpiled = ts.transpileModule(`module.exports = ${expression};`, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
    reportDiagnostics: true,
  });
  const diagnostics = transpiled.diagnostics ?? [];
  if (diagnostics.some((item) => item.category === ts.DiagnosticCategory.Error)) {
    throw new Error("projects.ts 데이터 구문을 읽지 못했습니다.");
  }

  const sandbox = { module: { exports: undefined } };
  vm.runInNewContext(transpiled.outputText, sandbox, { timeout: 1_000 });
  if (!Array.isArray(sandbox.module.exports)) {
    throw new Error("projects 값이 배열이 아닙니다.");
  }
  return JSON.parse(JSON.stringify(sandbox.module.exports));
}

function formatProjects(projects) {
  const json = JSON.stringify(projects, null, 4).replace(
    /^(\s+)"([A-Za-z_$][A-Za-z0-9_$]*)":/gm,
    "$1$2:",
  );
  return `import type { Project } from "@/types/project";\n\nexport const projects: Project[] = ${json};\n`;
}

function isRecord(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function validateProjects(projects, imagePaths) {
  const errors = [];
  const warnings = [];
  if (!Array.isArray(projects) || projects.length === 0) {
    return { errors: ["프로젝트가 하나 이상 필요합니다."], warnings };
  }

  const ids = new Set();
  const locales = ["ko", "en", "pt-BR"];
  const imageSet = new Set(imagePaths);
  const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

  const addPathValidation = (value, label, optional = false) => {
    if (!value && optional) return;
    if (typeof value !== "string") {
      errors.push(`${label}: 문자열 경로가 필요합니다.`);
      return;
    }
    if (value && !value.startsWith("/images/")) errors.push(`${label}: /images/로 시작해야 합니다.`);
    if (value && !imageSet.has(value)) warnings.push(`${label}: public 폴더에서 파일을 찾지 못했습니다.`);
  };

  projects.forEach((project, index) => {
    const label = `#${index + 1}`;
    if (!isRecord(project)) {
      errors.push(`${label}: 프로젝트 데이터가 올바르지 않습니다.`);
      return;
    }

    if (typeof project.id !== "string" || !slugPattern.test(project.id)) {
      errors.push(`${label}: ID는 영문 소문자, 숫자, 하이픈만 사용할 수 있습니다.`);
    } else if (ids.has(project.id)) {
      errors.push(`${project.id}: 중복 ID입니다.`);
    } else {
      ids.add(project.id);
    }

    for (const field of ["title", "description", "fullDescription"]) {
      if (!isRecord(project[field])) {
        errors.push(`${project.id || label}: ${field} 번역이 필요합니다.`);
        continue;
      }
      for (const locale of locales) {
        if (typeof project[field][locale] !== "string" || !project[field][locale].trim()) {
          errors.push(`${project.id || label}: ${field}.${locale} 값을 입력하세요.`);
        }
      }
    }

    if (!Array.isArray(project.tags) || project.tags.some((tag) => typeof tag !== "string" || !tag.trim())) {
      errors.push(`${project.id || label}: 태그 형식이 올바르지 않습니다.`);
    }
    if (!Array.isArray(project.screenshots)) {
      errors.push(`${project.id || label}: screenshots는 배열이어야 합니다.`);
    } else {
      project.screenshots.forEach((path, imageIndex) => addPathValidation(path, `${project.id}.screenshots[${imageIndex}]`));
    }
    if (!Array.isArray(project.features)) {
      errors.push(`${project.id || label}: features는 배열이어야 합니다.`);
    } else {
      project.features.forEach((feature, featureIndex) => {
        for (const locale of locales) {
          if (!isRecord(feature) || typeof feature[locale] !== "string" || !feature[locale].trim()) {
            errors.push(`${project.id || label}: features[${featureIndex}].${locale} 값을 입력하세요.`);
          }
        }
      });
    }

    addPathValidation(project.thumbnail, `${project.id}.thumbnail`, true);
    addPathValidation(project.icon, `${project.id}.icon`, true);

    for (const field of ["privacySlug", "termsSlug", "accountDeletionSlug"]) {
      if (project[field] && !slugPattern.test(project[field])) errors.push(`${project.id}.${field}: slug 형식이 올바르지 않습니다.`);
    }
    if (project.youtubeId && !/^[A-Za-z0-9_-]{6,20}$/.test(project.youtubeId)) {
      errors.push(`${project.id}.youtubeId: YouTube 영상 ID만 입력하세요.`);
    }
    if (project.links !== undefined && !isRecord(project.links)) {
      errors.push(`${project.id}.links: 링크 형식이 올바르지 않습니다.`);
    } else if (project.links) {
      for (const [name, value] of Object.entries(project.links)) {
        if (!value) continue;
        try {
          const url = new URL(value);
          if (!new Set(["http:", "https:"]).has(url.protocol)) throw new Error();
        } catch {
          errors.push(`${project.id}.links.${name}: 올바른 URL을 입력하세요.`);
        }
      }
    }
  });

  return { errors, warnings };
}

async function listImages(directory = join(PUBLIC_ROOT, "images")) {
  if (!existsSync(directory)) return [];
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map(async (entry) => {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) return listImages(path);
    if (!entry.isFile() || !IMAGE_EXTENSIONS.has(extname(entry.name).toLowerCase())) return [];
    return [`/${relative(PUBLIC_ROOT, path).split(sep).join("/")}`];
  }));
  return nested.flat().sort((a, b) => a.localeCompare(b));
}

function sendJson(response, statusCode, payload) {
  const body = JSON.stringify(payload);
  response.writeHead(statusCode, {
    "Cache-Control": "no-store",
    "Content-Length": Buffer.byteLength(body),
    "Content-Type": "application/json; charset=utf-8",
  });
  response.end(body);
}

async function readJsonBody(request) {
  const chunks = [];
  let size = 0;
  for await (const chunk of request) {
    size += chunk.length;
    if (size > 2_000_000) throw new Error("요청 데이터가 너무 큽니다.");
    chunks.push(chunk);
  }
  return JSON.parse(Buffer.concat(chunks).toString("utf8"));
}

function resolveInside(root, pathname) {
  const candidate = resolve(root, `.${normalize(pathname)}`);
  return candidate === root || candidate.startsWith(`${root}${sep}`) ? candidate : null;
}

async function serveFile(response, filePath) {
  try {
    const fileStat = await stat(filePath);
    if (!fileStat.isFile()) throw new Error();
    const body = await readFile(filePath);
    response.writeHead(200, {
      "Cache-Control": "no-store",
      "Content-Length": body.length,
      "Content-Type": MIME_TYPES[extname(filePath).toLowerCase()] ?? "application/octet-stream",
    });
    response.end(body);
  } catch {
    sendJson(response, 404, { error: "파일을 찾지 못했습니다." });
  }
}

const server = createServer(async (request, response) => {
  try {
    const url = new URL(request.url ?? "/", `http://${HOST}:${PORT}`);

    if (request.method === "GET" && url.pathname === "/api/projects") {
      const source = await readFile(PROJECTS_FILE, "utf8");
      const images = await listImages();
      sendJson(response, 200, { digest: digest(source), images, projects: parseProjects(source) });
      return;
    }

    if (request.method === "POST" && url.pathname === "/api/projects/validate") {
      const body = await readJsonBody(request);
      const images = await listImages();
      sendJson(response, 200, validateProjects(body.projects, images));
      return;
    }

    if (request.method === "PUT" && url.pathname === "/api/projects") {
      const body = await readJsonBody(request);
      const currentSource = await readFile(PROJECTS_FILE, "utf8");
      if (body.digest !== digest(currentSource)) {
        sendJson(response, 409, { error: "projects.ts가 편집기를 연 뒤 변경되었습니다. 새로 불러온 뒤 다시 반영하세요." });
        return;
      }

      const images = await listImages();
      const validation = validateProjects(body.projects, images);
      if (validation.errors.length > 0) {
        sendJson(response, 422, validation);
        return;
      }

      const nextSource = formatProjects(body.projects);
      parseProjects(nextSource);
      const tempFile = join(dirname(PROJECTS_FILE), `.projects.${process.pid}.${Date.now()}.tmp`);
      await writeFile(tempFile, nextSource, "utf8");
      await rename(tempFile, PROJECTS_FILE);
      sendJson(response, 200, {
        digest: digest(nextSource),
        message: `${body.projects.length}개 프로젝트를 data/projects.ts에 반영했습니다.`,
        warnings: validation.warnings,
      });
      return;
    }

    if (request.method === "GET" && url.pathname.startsWith("/assets/")) {
      const assetPath = resolveInside(PUBLIC_ROOT, url.pathname.slice("/assets".length));
      if (!assetPath) return sendJson(response, 403, { error: "허용되지 않은 경로입니다." });
      await serveFile(response, assetPath);
      return;
    }

    if (request.method === "GET") {
      const pathname = url.pathname === "/" ? "/index.html" : url.pathname;
      const filePath = resolveInside(TOOL_ROOT, pathname);
      if (!filePath) return sendJson(response, 403, { error: "허용되지 않은 경로입니다." });
      await serveFile(response, filePath);
      return;
    }

    sendJson(response, 405, { error: "지원하지 않는 요청입니다." });
  } catch (error) {
    sendJson(response, 500, { error: error instanceof Error ? error.message : "알 수 없는 오류가 발생했습니다." });
  }
});

server.listen(PORT, HOST, () => {
  console.log(`DiskFactory Project Editor: http://${HOST}:${PORT}`);
  console.log("종료하려면 Ctrl+C를 누르세요.");
});
