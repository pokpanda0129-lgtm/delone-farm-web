<template>
  <div class="layout">
    <NuxtRouteAnnouncer />
    <AppHeader />
    <main class="main">
      <NuxtPage />
    </main>
    <AppFooter />
  </div>
</template>

<style>
:root {
  /* 브랜드 색상 — 여기만 바꾸면 전체 반영 */
  --color-primary:       #03C75A;
  --color-primary-dark:  #02A34A;
  --color-primary-light: #edf9f0;
  --color-primary-bg:    #f8fdf9;
  --color-primary-border:#e0f0e4;
  --color-accent:        #f5a623;
}

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-family: 'Noto Sans KR', 'Apple SD Gothic Neo', sans-serif;
  -webkit-font-smoothing: antialiased;
}

body {
  background: #fff;
  color: #222;
}

.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main {
  flex: 1;
}
</style>
