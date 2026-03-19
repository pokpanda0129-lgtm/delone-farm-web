<template>
  <header class="header">
    <div class="header-inner">
      <NuxtLink to="/" class="logo">
        <span class="logo-main">델원농산</span>
        <span class="logo-sub">DELONE FARM</span>
      </NuxtLink>

      <nav class="nav">
        <NuxtLink to="/" class="nav-link">홈</NuxtLink>
        <NuxtLink to="/products" class="nav-link">취급 상품</NuxtLink>
        <NuxtLink to="/contact" class="nav-link">연락처</NuxtLink>
      </nav>

      <!-- 모바일 햄버거 -->
      <button class="hamburger" :class="{ open: menuOpen }" @click="menuOpen = !menuOpen" aria-label="메뉴 열기">
        <span /><span /><span />
      </button>
    </div>

    <!-- 모바일 드로어 -->
    <nav class="mobile-nav" :class="{ open: menuOpen }">
      <NuxtLink to="/" class="mobile-link" @click="menuOpen = false">홈</NuxtLink>
      <NuxtLink to="/products" class="mobile-link" @click="menuOpen = false">취급 상품</NuxtLink>
      <NuxtLink to="/contact" class="mobile-link" @click="menuOpen = false">연락처</NuxtLink>
    </nav>
  </header>
</template>

<script setup>
const menuOpen = ref(false)
</script>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: #fff;
  border-bottom: 1px solid #e8e8e8;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.header-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  height: 68px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* 로고 */
.logo {
  display: flex;
  flex-direction: column;
  line-height: 1.2;
  text-decoration: none;
}

.logo-main {
  font-size: 1.25rem;
  font-weight: 800;
  color: #2d7a3a;
  letter-spacing: -0.5px;
}

.logo-sub {
  font-size: 0.6rem;
  font-weight: 600;
  color: #f5a623;
  letter-spacing: 2px;
}

/* 데스크톱 네비 */
.nav {
  display: flex;
  gap: 36px;
}

.nav-link {
  font-size: 0.95rem;
  font-weight: 600;
  color: #333;
  text-decoration: none;
  transition: color 0.2s;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: #2d7a3a;
}

/* 햄버거 */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.hamburger span {
  display: block;
  width: 24px;
  height: 2px;
  background: #333;
  border-radius: 2px;
  transition: all 0.3s;
}

.hamburger.open span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.hamburger.open span:nth-child(2) {
  opacity: 0;
}
.hamburger.open span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* 모바일 드로어 */
.mobile-nav {
  display: none;
  flex-direction: column;
  background: #fff;
  border-top: 1px solid #e8e8e8;
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.3s ease;
}

.mobile-nav.open {
  max-height: 200px;
}

.mobile-link {
  padding: 16px 24px;
  font-size: 0.95rem;
  font-weight: 600;
  color: #333;
  text-decoration: none;
  border-bottom: 1px solid #f0f0f0;
}

.mobile-link:hover,
.mobile-link.router-link-active {
  color: #2d7a3a;
  background: #f6fdf7;
}

@media (max-width: 768px) {
  .nav {
    display: none;
  }

  .hamburger {
    display: flex;
  }

  .mobile-nav {
    display: flex;
  }
}
</style>
