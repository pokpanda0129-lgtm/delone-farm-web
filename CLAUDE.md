# CLAUDE.md

이 파일은 Claude Code(claude.ai/code)가 이 저장소에서 작업할 때 참고하는 가이드입니다.

## 프로젝트 구조

Nuxt 4 애플리케이션이며, 모든 소스 코드는 `nuxt-app/` 하위 디렉토리에 위치합니다.

```
delone-farm-web/
└── nuxt-app/
    ├── app/                      # 애플리케이션 소스 루트 (Nuxt 4 기본값)
    │   ├── assets/
    │   │   └── images/           # 과일 사진 등 이미지 에셋
    │   ├── components/
    │   │   ├── common/           # Header, Footer 등 공통 컴포넌트
    │   │   └── sections/         # 메인 섹션 컴포넌트
    │   ├── pages/
    │   │   ├── index.vue         # 메인 홈
    │   │   ├── products.vue      # 상품 소개
    │   │   └── contact.vue       # 연락처
    │   └── app.vue               # 루트 Vue 컴포넌트
    ├── public/                   # 정적 에셋 (favicon 등)
    ├── docker-compose.yml        # 로컬 개발용
    ├── .env                      # API 키 (gitignore에 포함)
    ├── nuxt.config.ts
    └── package.json
```

아래 모든 명령어는 `nuxt-app/` 디렉토리에서 실행합니다.

## 명령어

```bash
cd nuxt-app

npm run dev         # 개발 서버 시작 (http://localhost:3000)
npm run build       # 프로덕션 빌드
npm run generate    # 정적 사이트 생성
npm run preview     # 프로덕션 빌드 미리보기
```

## Nuxt 4 컨벤션

`app/` 디렉토리가 소스 루트입니다(Nuxt 4 기본값). Nuxt가 아래 경로를 자동으로 인식합니다:

- **페이지:** `app/pages/**/*.vue` — 파일 기반 라우팅
- **컴포넌트:** `app/components/**/*.vue` — 자동 임포트
- **컴포저블:** `app/composables/**/*.ts` — 자동 임포트
- **레이아웃:** `app/layouts/**/*.vue`
- **미들웨어:** `app/middleware/**/*.ts`
- **서버 API:** `server/api/**/*.ts` (백엔드 라우트가 필요한 경우)

컴포넌트와 컴포저블은 수동으로 import하지 않아도 Nuxt가 자동으로 처리합니다.
