<template>
  <div>
    <section class="page-hero">
      <div class="page-hero-inner">
        <p class="hero-badge">연락처 및 위치</p>
        <h1>언제든지 연락주세요</h1>
        <p>도매 문의, 납품 상담 모두 환영합니다.</p>
      </div>
    </section>

    <section class="contact-section">
      <div class="section-inner">
        <div class="contact-grid">

          <!-- 연락처 정보 -->
          <div class="contact-info">
            <h2>연락처 정보</h2>

            <div class="info-block">
              <div class="info-row">
                <span class="info-icon">🏢</span>
                <div>
                  <p class="info-label">상호명</p>
                  <p class="info-value">델원농산</p>
                </div>
              </div>

              <div class="info-row">
                <span class="info-icon">📍</span>
                <div>
                  <p class="info-label">주소</p>
                  <p class="info-value">경북 포항시 북구 흥해읍 칠포로 38번길 4</p>
                </div>
              </div>

              <div class="info-row">
                <span class="info-icon">📞</span>
                <div>
                  <p class="info-label">대표 전화</p>
                  <a href="tel:054-262-3323" class="info-value info-link">054-262-3323</a>
                </div>
              </div>

              <div class="info-row">
                <span class="info-icon">📱</span>
                <div>
                  <p class="info-label">휴대폰</p>
                  <a href="tel:010-3524-5144" class="info-value info-link">010-3524-5144</a>
                </div>
              </div>

              <div class="info-row">
                <span class="info-icon">🕐</span>
                <div>
                  <p class="info-label">운영 시간</p>
                  <p class="info-value">평일 09:00 – 18:00</p>
                  <p class="info-sub">주말·공휴일 사전 문의 요망</p>
                </div>
              </div>
            </div>

            <div class="tel-buttons">
              <a href="tel:054-262-3323" class="tel-btn">
                📞 054-262-3323 전화하기
              </a>
              <a href="tel:010-3524-5144" class="tel-btn mobile">
                📱 010-3524-5144 전화하기
              </a>
            </div>
          </div>

          <!-- 지도 -->
          <div class="map-area">
            <h2>오시는 길</h2>
            <div class="map-embed">
              <iframe
                src="https://maps.google.com/maps?q=경북+포항시+북구+흥해읍+칠포로+38번길+4&output=embed&hl=ko"
                width="100%"
                height="100%"
                style="border: 0;"
                allowfullscreen
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="델원농산 위치"
              />
            </div>
            <a
              href="https://maps.google.com/maps?q=경북+포항시+북구+흥해읍+칠포로+38번길+4"
              target="_blank"
              rel="noopener noreferrer"
              class="map-link"
            >
              Google 지도에서 크게 보기 →
            </a>
          </div>

        </div>
      </div>
    </section>

    <!-- 문의 안내 -->
    <section class="inquiry-section">
      <div class="section-inner">
        <h2 class="section-title">이런 분들이 연락주세요</h2>
        <div class="inquiry-grid">
          <div class="inquiry-item">
            <div class="inquiry-icon">🏪</div>
            <h3>소매점 · 마트</h3>
            <p>수입과일 정기 납품을 원하시는 소매점, 슈퍼마켓, 과일 전문점</p>
          </div>
          <div class="inquiry-item">
            <div class="inquiry-icon">☕</div>
            <h3>카페 · 식음료</h3>
            <p>레몬, 키위, 망고 등을 정기 구매하는 카페, 쥬스바, 베이커리</p>
          </div>
          <div class="inquiry-item">
            <div class="inquiry-icon">🍽️</div>
            <h3>식당 · 호텔</h3>
            <p>다양한 수입과일을 식재료로 사용하는 레스토랑, 호텔, 뷔페</p>
          </div>
          <div class="inquiry-item">
            <div class="inquiry-icon">🏫</div>
            <h3>급식 · 단체</h3>
            <p>학교, 병원, 기업 등 대량 구매가 필요한 급식 및 단체급식 업체</p>
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

/* 연락처 그리드 */
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: start;
}

.contact-info h2,
.map-area h2 {
  font-size: 1.3rem;
  font-weight: 900;
  color: #1a1a1a;
  margin-bottom: 28px;
}

.info-block {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 32px;
}

.info-row {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}

.info-icon {
  font-size: 1.4rem;
  flex-shrink: 0;
  margin-top: 2px;
}

.info-label {
  font-size: 0.75rem;
  font-weight: 700;
  color: #888;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 2px;
}

.info-value {
  font-size: 0.95rem;
  font-weight: 600;
  color: #1a1a1a;
}

.info-link {
  text-decoration: none;
  color: #2d7a3a;
  transition: color 0.2s;
}
.info-link:hover { color: #235f2c; }

.info-sub {
  font-size: 0.8rem;
  color: #999;
  margin-top: 2px;
}

.tel-buttons {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.tel-btn {
  display: block;
  background: #2d7a3a;
  color: #fff;
  font-weight: 700;
  font-size: 0.95rem;
  padding: 14px 24px;
  border-radius: 10px;
  text-decoration: none;
  text-align: center;
  transition: background 0.2s;
}
.tel-btn:hover { background: #235f2c; }
.tel-btn.mobile {
  background: #fff;
  color: #2d7a3a;
  border: 2px solid #2d7a3a;
}
.tel-btn.mobile:hover {
  background: #2d7a3a;
  color: #fff;
}

/* 지도 */
.map-embed {
  width: 100%;
  height: 360px;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid #e8e8e8;
  margin-bottom: 12px;
  background: #f0f0f0;
}

.map-link {
  font-size: 0.85rem;
  color: #2d7a3a;
  font-weight: 600;
  text-decoration: none;
}
.map-link:hover { text-decoration: underline; }

/* 문의 안내 */
.inquiry-section {
  background: #f8fdf9;
}

.section-title {
  font-size: 1.75rem;
  font-weight: 900;
  color: #1a1a1a;
  text-align: center;
  margin-bottom: 48px;
}

.inquiry-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.inquiry-item {
  background: #fff;
  border-radius: 16px;
  padding: 32px 20px;
  text-align: center;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
}

.inquiry-icon {
  font-size: 2.2rem;
  margin-bottom: 14px;
}

.inquiry-item h3 {
  font-size: 0.95rem;
  font-weight: 800;
  color: #1a1a1a;
  margin-bottom: 10px;
}

.inquiry-item p {
  font-size: 0.83rem;
  color: #666;
  line-height: 1.7;
}

@media (max-width: 900px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 48px;
  }
  .inquiry-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .inquiry-grid {
    grid-template-columns: 1fr;
  }
}
</style>
