<template>
  <div>
    <section class="page-hero">
      <div class="page-hero-inner">
        <h1>프리미엄 수입과일</h1>
        <p>산지에서 직접 엄선한 신선한 과일을 합리적인 도매가로 공급합니다.</p>
      </div>
    </section>

    <section class="products-section">
      <div class="section-inner">

        <div v-if="pending" class="loading">
          <p>상품 정보를 불러오는 중...</p>
        </div>

        <div v-else-if="error" class="error">
          <p>상품 정보를 불러오지 못했습니다.</p>
        </div>

        <div v-else class="product-grid">
          <div
            v-for="product in products"
            :key="product.id"
            class="product-detail-card"
            :class="{ featured: product.is_featured }"
          >
            <img :src="product.image_url" :alt="product.name" class="card-img" />
            <div class="card-body">
              <div v-if="product.is_featured" class="card-badge">인기 No.1</div>
              <h2>{{ product.name }}</h2>
              <p class="card-origin">🌏 원산지: {{ product.origin }}</p>
              <p class="card-desc">{{ product.description }}</p>
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
            <div class="info-icon-wrap">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
            </div>
            <h3>납품 대상</h3>
            <p>소매점, 마트, 카페, 식당,<br>제과·제빵, 사찰 등</p>
          </div>
          <div class="info-item">
            <div class="info-icon-wrap">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                <line x1="12" y1="22.08" x2="12" y2="12"/>
              </svg>
            </div>
            <h3>최소 주문</h3>
            <p>품목별 박스 단위 공급<br>상담을 통해 조율 가능</p>
          </div>
          <div class="info-item">
            <div class="info-icon-wrap">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="1" y="3" width="15" height="13" rx="1"/>
                <path d="M16 8h4l3 5v3h-7V8z"/>
                <circle cx="5.5" cy="18.5" r="2.5"/>
                <circle cx="18.5" cy="18.5" r="2.5"/>
              </svg>
            </div>
            <h3>배송 지역</h3>
            <p>포항 및 경북 인근 지역<br>직접 배송 가능</p>
          </div>
          <div class="info-item">
            <div class="info-icon-wrap">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.77 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <h3>주문 문의</h3>
            <p>054-262-3323<br>010-3524-5144</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
interface Product {
  id: number
  name: string
  description: string
  origin: string
  image_url: string
  is_featured: boolean
  sort_order: number
  created_at: string
}

const supabase = useSupabase()

const { data: products, pending, error } = await useAsyncData('products', async () => {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .order('sort_order', { ascending: true })

  if (error) throw error
  return data as Product[]
})
</script>

<style scoped>
.page-hero {
  background: linear-gradient(135deg, var(--color-primary-bg) 0%, var(--color-primary-light) 100%);
  border-bottom: 1px solid var(--color-primary-border);
}

.page-hero-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 64px 24px;
  text-align: center;
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

.loading, .error {
  text-align: center;
  padding: 80px 0;
  color: #888;
  font-size: 1rem;
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
  background: linear-gradient(135deg, var(--color-primary-bg) 0%, var(--color-primary-light) 100%);
  border-color: var(--color-primary-border);
}

.card-img {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 12px;
  flex-shrink: 0;
}

.card-body {
  flex: 1;
}

.card-badge {
  display: inline-block;
  background: var(--color-accent);
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
}

.supply-info {
  background: var(--color-primary-bg);
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
  padding: 36px 24px;
  text-align: center;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  transition: box-shadow 0.2s, transform 0.2s;
}

.info-item:hover {
  box-shadow: 0 6px 20px rgba(0,0,0,0.1);
  transform: translateY(-2px);
}

.info-icon-wrap {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  background: var(--color-primary-light);
  border-radius: 14px;
  color: var(--color-primary);
  margin-bottom: 18px;
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
