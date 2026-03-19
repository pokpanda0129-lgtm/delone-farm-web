# 델원농산 웹사이트

경북 포항 수입과일 도매 전문 델원농산의 브랜드 사이트입니다.

## 기술 스택

- [Nuxt 4](https://nuxt.com) + Vue 3
- Vercel 배포

## 프로젝트 구조

소스 코드는 `nuxt-app/` 하위에 위치합니다.

```
delone-farm-web/
└── nuxt-app/
    ├── app/
    │   ├── components/common/   # AppHeader, AppFooter
    │   ├── pages/
    │   │   ├── index.vue        # 홈
    │   │   ├── products.vue     # 취급 상품
    │   │   └── contact.vue      # 연락처
    │   └── app.vue
    └── nuxt.config.ts
```

## 페이지 구성

| 경로 | 페이지 | 내용 |
|------|--------|------|
| `/` | 홈 | 히어로, 브랜드 특징, 주요 상품 미리보기 |
| `/products` | 취급 상품 | 15개 품목 상세, 납품 안내 |
| `/contact` | 연락처 | 연락처 정보, 지도 링크, 납품 대상 안내 |

## 개발 환경

```bash
cd nuxt-app
npm install
npm run dev
```

## 배포

Vercel에 연결되어 있으며 `main` 브랜치에 push하면 자동으로 배포됩니다.

## 이미지 출처

사이트에서 사용하는 모든 이미지는 [Pexels](https://www.pexels.com)의 무료 라이선스 이미지입니다.
상업적 이용 가능, 저작자 표시 불필요 ([Pexels License](https://www.pexels.com/license/))
