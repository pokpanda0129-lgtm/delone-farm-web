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
