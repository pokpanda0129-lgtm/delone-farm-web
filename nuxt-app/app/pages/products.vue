<template>
  <div>
    <section class="page-hero">
      <div class="page-hero-inner">
        <p class="hero-badge">취급 상품</p>
        <h1>프리미엄 수입과일</h1>
        <p>산지에서 직접 엄선한 신선한 과일을 합리적인 도매가로 공급합니다.</p>
      </div>
    </section>

    <section class="products-section">
      <div class="section-inner">
        <div class="product-grid">

          <div class="product-detail-card featured">
            <div class="card-emoji">🥝</div>
            <div class="card-body">
              <div class="card-badge">인기 No.1</div>
              <h2>Zespri 골드키위</h2>
              <p class="card-origin">🌏 원산지: 뉴질랜드</p>
              <p class="card-desc">
                세계 1위 키위 브랜드 Zespri의 공인 판매처입니다. 뉴질랜드 햇살을 가득 머금은 골드키위는
                일반 그린키위보다 달콤하고 부드러우며, 비타민C 함량이 오렌지의 약 3배에 달합니다.
                카페, 호텔, 마트, 급식소 등 다양한 업종에 납품 중입니다.
              </p>
              <ul class="card-features">
                <li>✓ Zespri 공인 판매처</li>
                <li>✓ 시즌별 최상 당도 보장</li>
                <li>✓ 박스 단위 도매 공급</li>
              </ul>
            </div>
          </div>

          <div class="product-detail-card">
            <div class="card-emoji">🍋</div>
            <div class="card-body">
              <h2>레몬</h2>
              <p class="card-origin">🌏 원산지: 미국 · 칠레</p>
              <p class="card-desc">
                카페, 식당, 제과제빵 업체에서 가장 많이 찾는 필수 수입과일입니다.
                미국 캘리포니아산과 칠레산을 시즌에 따라 공급하며, 껍질까지 활용 가능한
                무왁스 제품도 취급합니다.
              </p>
              <ul class="card-features">
                <li>✓ 일반 / 무왁스 선택 가능</li>
                <li>✓ 연중 안정적 공급</li>
                <li>✓ 카페·식음료 업체 납품 다수</li>
              </ul>
            </div>
          </div>

          <div class="product-detail-card">
            <div class="card-emoji">🥭</div>
            <div class="card-body">
              <h2>망고</h2>
              <p class="card-origin">🌏 원산지: 태국 · 필리핀</p>
              <p class="card-desc">
                달콤한 향과 풍부한 과즙으로 인기 높은 열대과일입니다. 태국산 남독마이 망고와
                필리핀산 케라바오 망고를 계절에 따라 최적의 산지에서 엄선해 공급합니다.
              </p>
              <ul class="card-features">
                <li>✓ 시즌별 산지 선택 공급</li>
                <li>✓ 숙도 조절 가능</li>
                <li>✓ 디저트·카페 납품 경험 풍부</li>
              </ul>
            </div>
          </div>

          <div class="product-detail-card">
            <div class="card-emoji">🍊</div>
            <div class="card-body">
              <h2>오렌지 / 자몽</h2>
              <p class="card-origin">🌏 원산지: 미국 · 남아프리카공화국</p>
              <p class="card-desc">
                미국 네이블 오렌지와 발렌시아 오렌지, 자몽을 취급합니다.
                주스용·생과용 수요에 맞춰 크기와 당도 기준으로 등급 분류 후 납품합니다.
              </p>
              <ul class="card-features">
                <li>✓ 주스용 / 생과용 구분 납품</li>
                <li>✓ 등급별 가격 차별화</li>
              </ul>
            </div>
          </div>

          <div class="product-detail-card">
            <div class="card-emoji">🍇</div>
            <div class="card-body">
              <h2>수입 포도</h2>
              <p class="card-origin">🌏 원산지: 칠레 · 페루</p>
              <p class="card-desc">
                남미산 씨 없는 청포도(톰슨), 적포도(레드글로브) 등을 취급합니다.
                국내산 비수기(봄·여름)에 안정적으로 공급 가능합니다.
              </p>
              <ul class="card-features">
                <li>✓ 비수기 안정 공급</li>
                <li>✓ 씨 없는 품종 취급</li>
              </ul>
            </div>
          </div>

          <div class="product-detail-card inquiry">
            <div class="card-emoji">📦</div>
            <div class="card-body">
              <h2>기타 수입과일</h2>
              <p class="card-desc">
                위 품목 외에도 시즌별로 다양한 수입과일을 취급합니다.<br>
                필요한 품목이 있으시면 언제든지 문의해 주세요.
              </p>
              <NuxtLink to="/contact" class="btn-primary">문의하기</NuxtLink>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- 납품 안내 -->
    <section class="supply-info">
      <div class="section-inner">
        <h2 class="section-title">납품 안내</h2>
        <div class="info-grid">
          <div class="info-item">
            <div class="info-icon">🏪</div>
            <h3>납품 대상</h3>
            <p>소매점, 마트, 카페, 식당,<br>제과·제빵, 급식업체 등</p>
          </div>
          <div class="info-item">
            <div class="info-icon">📦</div>
            <h3>최소 주문</h3>
            <p>품목별 박스 단위 공급<br>상담을 통해 조율 가능</p>
          </div>
          <div class="info-item">
            <div class="info-icon">🚚</div>
            <h3>배송 지역</h3>
            <p>포항 및 경북 인근 지역<br>직접 배송 가능</p>
          </div>
          <div class="info-item">
            <div class="info-icon">📞</div>
            <h3>주문 문의</h3>
            <p>054-262-3323<br>010-3524-5144</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page-hero {
  background: linear-gradient(135deg, #f8fdf9 0%, #edf9f0 100%);
  border-bottom: 1px solid #e0f0e4;
}

.page-hero-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 64px 24px;
  text-align: center;
}

.hero-badge {
  display: inline-block;
  background: #2d7a3a;
  color: #fff;
  font-size: 0.78rem;
  font-weight: 700;
  padding: 5px 14px;
  border-radius: 999px;
  margin-bottom: 16px;
  letter-spacing: 0.5px;
}

.page-hero-inner h1 {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 900;
  color: #1a1a1a;
  margin-bottom: 12px;
}

.page-hero-inner p {
  font-size: 1rem;
  color: #555;
}

.section-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 72px 24px;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.product-detail-card {
  display: flex;
  gap: 24px;
  background: #fff;
  border: 1px solid #eee;
  border-radius: 20px;
  padding: 32px;
  transition: box-shadow 0.2s, transform 0.2s;
}

.product-detail-card:hover {
  box-shadow: 0 8px 28px rgba(0,0,0,0.09);
  transform: translateY(-3px);
}

.product-detail-card.featured {
  grid-column: 1 / -1;
  background: linear-gradient(135deg, #f6fdf7 0%, #edf9f0 100%);
  border-color: #c3e6cb;
}

.product-detail-card.inquiry {
  align-items: center;
  background: #f8f8f8;
}

.card-emoji {
  font-size: 3.5rem;
  flex-shrink: 0;
  line-height: 1;
}

.card-body {
  flex: 1;
}

.card-badge {
  display: inline-block;
  background: #f5a623;
  color: #fff;
  font-size: 0.72rem;
  font-weight: 700;
  padding: 3px 10px;
  border-radius: 999px;
  margin-bottom: 8px;
}

.card-body h2 {
  font-size: 1.3rem;
  font-weight: 900;
  color: #1a1a1a;
  margin-bottom: 4px;
}

.card-origin {
  font-size: 0.82rem;
  color: #888;
  margin-bottom: 12px;
}

.card-desc {
  font-size: 0.88rem;
  color: #555;
  line-height: 1.75;
  margin-bottom: 16px;
}

.card-features {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.card-features li {
  font-size: 0.8rem;
  font-weight: 600;
  color: #2d7a3a;
  background: #edf9f0;
  padding: 4px 12px;
  border-radius: 999px;
}

.btn-primary {
  display: inline-block;
  background: #2d7a3a;
  color: #fff;
  font-weight: 700;
  font-size: 0.95rem;
  padding: 12px 28px;
  border-radius: 8px;
  text-decoration: none;
  transition: background 0.2s;
}
.btn-primary:hover { background: #235f2c; }

.supply-info {
  background: #f8fdf9;
}

.section-title {
  font-size: 1.75rem;
  font-weight: 900;
  color: #1a1a1a;
  text-align: center;
  margin-bottom: 48px;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.info-item {
  background: #fff;
  border-radius: 16px;
  padding: 32px 20px;
  text-align: center;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
}

.info-icon {
  font-size: 2.2rem;
  margin-bottom: 14px;
}

.info-item h3 {
  font-size: 0.95rem;
  font-weight: 800;
  color: #1a1a1a;
  margin-bottom: 10px;
}

.info-item p {
  font-size: 0.85rem;
  color: #666;
  line-height: 1.7;
}

@media (max-width: 900px) {
  .product-grid {
    grid-template-columns: 1fr;
  }
  .product-detail-card.featured {
    grid-column: auto;
  }
  .info-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .product-detail-card {
    flex-direction: column;
    gap: 16px;
  }
  .info-grid {
    grid-template-columns: 1fr;
  }
}
</style>
