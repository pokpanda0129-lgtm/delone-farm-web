<template>
  <div>
    <!-- 히어로 섹션 -->
    <section class="hero">
      <div class="hero-inner">
        <p class="hero-badge">수입과일 도매 전문</p>
        <h1 class="hero-title">
          신선함을 그대로,<br>
          <span class="accent">델원농산</span>
        </h1>
        <p class="hero-desc">
          Zespri 골드키위, 레몬, 망고 등<br>
          엄선된 프리미엄 수입과일을 합리적인 도매가로 공급합니다.
        </p>
        <div class="hero-actions">
          <NuxtLink to="/products" class="btn-primary">취급 상품 보기</NuxtLink>
          <NuxtLink to="/contact" class="btn-outline">연락하기</NuxtLink>
        </div>
      </div>
      <div class="hero-visual">
        <div class="fruit-grid">
          <div class="fruit-card kiwi">🥝<span>골드키위</span></div>
          <div class="fruit-card lemon">🍋<span>레몬</span></div>
          <div class="fruit-card mango">🥭<span>망고</span></div>
          <div class="fruit-card orange">🍊<span>오렌지</span></div>
        </div>
      </div>
    </section>

    <!-- 특징 섹션 -->
    <section class="features">
      <div class="section-inner">
        <h2 class="section-title">왜 델원농산인가요?</h2>
        <div class="feature-list">
          <div class="feature-item">
            <div class="feature-icon">🌏</div>
            <h3>엄선된 수입 과일</h3>
            <p>Zespri 공인 판매처로서 뉴질랜드 골드키위를 비롯해 전 세계 프리미엄 과일을 직접 수입합니다.</p>
          </div>
          <div class="feature-item">
            <div class="feature-icon">❄️</div>
            <h3>철저한 신선도 관리</h3>
            <p>산지에서 출하된 과일을 최적의 온도와 습도로 보관하여 최고의 신선도를 유지합니다.</p>
          </div>
          <div class="feature-item">
            <div class="feature-icon">🤝</div>
            <h3>합리적인 도매가</h3>
            <p>대형 유통 마진을 줄이고, 소매점·식당·급식업체에 경쟁력 있는 도매가를 제공합니다.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 주요 상품 미리보기 -->
    <section class="products-preview">
      <div class="section-inner">
        <h2 class="section-title">주요 취급 상품</h2>
        <div class="product-list">
          <div class="product-card">
            <div class="product-emoji">🥝</div>
            <h3>Zespri 골드키위</h3>
            <p>뉴질랜드 직수입 프리미엄 골드키위. 달콤한 맛과 높은 비타민C 함량으로 인기 No.1.</p>
          </div>
          <div class="product-card">
            <div class="product-emoji">🍋</div>
            <h3>레몬</h3>
            <p>미국·칠레산 신선 레몬. 식음료, 카페, 요리에 두루 쓰이는 필수 수입과일.</p>
          </div>
          <div class="product-card">
            <div class="product-emoji">🥭</div>
            <h3>망고</h3>
            <p>태국·필리핀산 달콤한 망고. 시즌별 산지를 엄선해 최상의 당도를 보장합니다.</p>
          </div>
        </div>
        <div class="products-cta">
          <NuxtLink to="/products" class="btn-primary">전체 상품 보기</NuxtLink>
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
/* 히어로 */
.hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 48px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 24px 64px;
}

.hero-badge {
  display: inline-block;
  background: var(--color-primary-light);
  color: var(--color-primary);
  font-size: 0.8rem;
  font-weight: 700;
  padding: 6px 14px;
  border-radius: 999px;
  margin-bottom: 20px;
  letter-spacing: 0.5px;
}

.hero-title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 900;
  line-height: 1.25;
  color: #1a1a1a;
  margin-bottom: 20px;
}

.accent {
  color: var(--color-primary);
}

.hero-desc {
  font-size: 1rem;
  color: #555;
  line-height: 1.8;
  margin-bottom: 36px;
}

.hero-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

/* 버튼 */
.btn-primary {
  display: inline-block;
  background: var(--color-primary);
  color: #fff;
  font-weight: 700;
  font-size: 0.95rem;
  padding: 14px 28px;
  border-radius: 8px;
  text-decoration: none;
  transition: background 0.2s;
}
.btn-primary:hover { background: var(--color-primary-dark); }

.btn-outline {
  display: inline-block;
  border: 2px solid var(--color-primary);
  color: var(--color-primary);
  font-weight: 700;
  font-size: 0.95rem;
  padding: 12px 28px;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.2s;
}
.btn-outline:hover {
  background: var(--color-primary);
  color: #fff;
}


/* 히어로 비주얼 */
.hero-visual {
  flex-shrink: 0;
}

.fruit-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.fruit-card {
  width: 140px;
  height: 140px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  gap: 8px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
}
.fruit-card span {
  font-size: 0.78rem;
  font-weight: 700;
  color: #333;
}
.fruit-card.kiwi  { background: var(--color-primary-light); }
.fruit-card.lemon { background: #fffbea; }
.fruit-card.mango { background: #fff4e6; }
.fruit-card.orange { background: #fff0e0; }

/* 공통 섹션 */
.section-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 72px 24px;
}

.section-title {
  font-size: 1.75rem;
  font-weight: 900;
  color: #1a1a1a;
  text-align: center;
  margin-bottom: 48px;
}

/* 특징 */
.features {
  background: var(--color-primary-bg);
}

.feature-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

.feature-item {
  background: #fff;
  border-radius: 16px;
  padding: 36px 28px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  text-align: center;
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 16px;
}

.feature-item h3 {
  font-size: 1.05rem;
  font-weight: 800;
  color: #1a1a1a;
  margin-bottom: 12px;
}

.feature-item p {
  font-size: 0.88rem;
  color: #666;
  line-height: 1.7;
}

/* 상품 미리보기 */
.product-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 40px;
}

.product-card {
  border: 1px solid #eee;
  border-radius: 16px;
  padding: 32px 24px;
  text-align: center;
  transition: box-shadow 0.2s, transform 0.2s;
}

.product-card:hover {
  box-shadow: 0 8px 24px rgba(0,0,0,0.1);
  transform: translateY(-4px);
}

.product-emoji {
  font-size: 3rem;
  margin-bottom: 16px;
}

.product-card h3 {
  font-size: 1.05rem;
  font-weight: 800;
  color: #1a1a1a;
  margin-bottom: 10px;
}

.product-card p {
  font-size: 0.85rem;
  color: #666;
  line-height: 1.7;
}

.products-cta {
  text-align: center;
}


/* 반응형 */
@media (max-width: 900px) {
  .feature-list,
  .product-list {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .hero {
    flex-direction: column;
    padding: 48px 24px 40px;
    text-align: center;
  }

  .hero-actions {
    justify-content: center;
  }

  .fruit-grid {
    order: -1;
  }

  .fruit-card {
    width: 110px;
    height: 110px;
    font-size: 2.2rem;
  }
}
</style>
