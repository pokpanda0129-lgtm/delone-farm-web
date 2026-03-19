<template>
  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-brand">
        <p class="brand-name">델원농산</p>
        <p class="brand-en">DELONE FARM</p>
      </div>

      <div class="footer-info">
        <p><span class="label">주소</span> 경북 포항시 북구 흥해읍 칠포로 38번길 4</p>
        <p>
          <span class="label">전화</span>
          <a href="tel:054-262-3323">054-262-3323</a>
          &nbsp;/&nbsp;
          <a href="tel:010-3524-5144">010-3524-5144</a>
        </p>
      </div>
    </div>

    <div class="footer-bottom">
      <p>© {{ new Date().getFullYear() }} 델원농산. All rights reserved.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #1a1a1a;
  color: #ccc;
  margin-top: auto;
}

.footer-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 48px 24px 32px;
  display: flex;
  gap: 48px;
  flex-wrap: wrap;
}

.footer-brand {
  min-width: 140px;
}

.brand-name {
  font-size: 1.1rem;
  font-weight: 800;
  color: #fff;
  margin: 0 0 4px;
}

.brand-en {
  font-size: 0.65rem;
  font-weight: 600;
  color: #f5a623;
  letter-spacing: 2px;
  margin: 0;
}

.footer-info {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 0.88rem;
  line-height: 1.6;
}

.footer-info p {
  margin: 0;
}

.label {
  font-weight: 600;
  color: #fff;
  margin-right: 8px;
}

.footer-info a {
  color: #ccc;
  text-decoration: none;
  transition: color 0.2s;
}

.footer-info a:hover {
  color: #f5a623;
}

.footer-bottom {
  border-top: 1px solid #333;
  text-align: center;
  padding: 16px 24px;
  font-size: 0.78rem;
  color: #666;
}
</style>
