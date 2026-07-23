# DiskFactory Project Editor

`data/projects.ts`를 폼으로 편집하는 로컬 전용 도구입니다. 배포용 Next.js 사이트나 `out` 결과물에는 포함되지 않습니다.

## 실행

저장소 루트에서 다음 명령을 실행합니다.

```powershell
npm run project-editor
```

브라우저에서 `http://127.0.0.1:4173`을 엽니다. 종료할 때는 실행 중인 터미널에서 `Ctrl+C`를 누릅니다.

## 저장 방식

- 입력 중인 내용은 브라우저 로컬 초안에 자동 저장됩니다.
- `초안 저장`은 `data/projects.ts`를 변경하지 않습니다.
- `projects.ts에 반영`을 눌러야 실제 파일이 변경됩니다.
- 편집기를 연 뒤 `projects.ts`가 다른 곳에서 변경되었다면 반영을 중단하고 다시 불러오도록 안내합니다.
- 반영 전 필수 번역, ID/slug, URL, 이미지 경로를 검사합니다.
