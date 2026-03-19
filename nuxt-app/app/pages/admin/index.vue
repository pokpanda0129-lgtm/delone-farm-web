<template>
  <div class="admin-wrap">

    <!-- 로그인 화면 -->
    <div v-if="!loggedIn" class="login-box">
      <h1>관리자 로그인</h1>
      <form @submit.prevent="login">
        <input
          v-model="password"
          type="password"
          placeholder="비밀번호"
          class="input"
          autofocus
        />
        <p v-if="loginError" class="err-msg">{{ loginError }}</p>
        <button type="submit" class="btn-primary" :disabled="loggingIn">
          {{ loggingIn ? '확인 중...' : '로그인' }}
        </button>
      </form>
    </div>

    <!-- 관리 화면 -->
    <div v-else class="admin-panel">
      <div class="admin-header">
        <h1>상품 관리</h1>
        <div class="header-actions">
          <button class="btn-primary" @click="openAdd">+ 상품 추가</button>
          <button class="btn-ghost" @click="loggedIn = false">로그아웃</button>
        </div>
      </div>

      <div v-if="loading" class="status-msg">불러오는 중...</div>
      <div v-else-if="fetchError" class="err-msg">{{ fetchError }}</div>

      <table v-else class="product-table">
        <thead>
          <tr>
            <th>순서</th>
            <th>이미지</th>
            <th>상품명</th>
            <th>원산지</th>
            <th>추천</th>
            <th>관리</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="p in products" :key="p.id">
            <td>{{ p.sort_order }}</td>
            <td>
              <img v-if="p.image_url" :src="p.image_url" :alt="p.name" class="thumb" />
              <span v-else class="no-img">없음</span>
            </td>
            <td>{{ p.name }}</td>
            <td>{{ p.origin }}</td>
            <td>{{ p.is_featured ? '★' : '' }}</td>
            <td>
              <div class="actions">
                <button class="btn-sm" @click="openEdit(p)">수정</button>
                <button class="btn-sm btn-danger" @click="deleteProduct(p.id)">삭제</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 추가/수정 모달 -->
    <div v-if="showModal" class="modal-backdrop" @click.self="closeModal">
      <div class="modal">
        <h2>{{ editTarget ? '상품 수정' : '상품 추가' }}</h2>
        <form @submit.prevent="saveProduct">
          <label>상품명</label>
          <input v-model="form.name" class="input" required />

          <label>원산지</label>
          <input v-model="form.origin" class="input" required />

          <label>설명</label>
          <textarea v-model="form.description" class="input textarea" rows="4" />

          <label>이미지 URL</label>
          <input v-model="form.image_url" class="input" placeholder="https://..." />

          <label>정렬 순서</label>
          <input v-model.number="form.sort_order" type="number" class="input" />

          <label class="checkbox-label">
            <input v-model="form.is_featured" type="checkbox" />
            인기 추천 상품
          </label>

          <p v-if="saveError" class="err-msg">{{ saveError }}</p>

          <div class="modal-actions">
            <button type="submit" class="btn-primary" :disabled="saving">
              {{ saving ? '저장 중...' : '저장' }}
            </button>
            <button type="button" class="btn-ghost" @click="closeModal">취소</button>
          </div>
        </form>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: false })

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

const loggedIn = ref(false)
const password = ref('')
const loginError = ref('')
const loggingIn = ref(false)

const products = ref<Product[]>([])
const loading = ref(false)
const fetchError = ref('')

const showModal = ref(false)
const editTarget = ref<Product | null>(null)
const saving = ref(false)
const saveError = ref('')

const emptyForm = () => ({
  name: '',
  origin: '',
  description: '',
  image_url: '',
  sort_order: 0,
  is_featured: false,
})
const form = ref(emptyForm())

async function login() {
  loginError.value = ''
  loggingIn.value = true
  try {
    await $fetch('/api/admin/login', {
      method: 'POST',
      body: { password: password.value },
    })
    loggedIn.value = true
    password.value = ''
    await fetchProducts()
  } catch {
    loginError.value = '비밀번호가 틀렸습니다.'
  } finally {
    loggingIn.value = false
  }
}

async function fetchProducts() {
  loading.value = true
  fetchError.value = ''
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .order('sort_order', { ascending: true })
  if (error) {
    fetchError.value = error.message
  } else {
    products.value = data as Product[]
  }
  loading.value = false
}

function openAdd() {
  editTarget.value = null
  form.value = emptyForm()
  saveError.value = ''
  showModal.value = true
}

function openEdit(p: Product) {
  editTarget.value = p
  form.value = {
    name: p.name,
    origin: p.origin,
    description: p.description,
    image_url: p.image_url,
    sort_order: p.sort_order,
    is_featured: p.is_featured,
  }
  saveError.value = ''
  showModal.value = true
}

function closeModal() {
  showModal.value = false
}

async function saveProduct() {
  saving.value = true
  saveError.value = ''
  const payload = { ...form.value }

  let error
  if (editTarget.value) {
    ;({ error } = await supabase.from('products').update(payload).eq('id', editTarget.value.id))
  } else {
    ;({ error } = await supabase.from('products').insert(payload))
  }

  if (error) {
    saveError.value = error.message
  } else {
    closeModal()
    await fetchProducts()
  }
  saving.value = false
}

async function deleteProduct(id: number) {
  if (!confirm('정말 삭제하시겠습니까?')) return
  const { error } = await supabase.from('products').delete().eq('id', id)
  if (error) {
    alert(error.message)
  } else {
    await fetchProducts()
  }
}
</script>

<style scoped>
.admin-wrap {
  min-height: 100vh;
  background: #f5f5f5;
  font-family: 'Pretendard', 'Apple SD Gothic Neo', sans-serif;
}

/* 로그인 */
.login-box {
  max-width: 360px;
  margin: 120px auto 0;
  background: #fff;
  border-radius: 16px;
  padding: 48px 40px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.1);
}

.login-box h1 {
  font-size: 1.4rem;
  font-weight: 800;
  margin-bottom: 28px;
  text-align: center;
  color: #1a1a1a;
}

/* 관리 패널 */
.admin-panel {
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 24px;
}

.admin-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 28px;
}

.admin-header h1 {
  font-size: 1.5rem;
  font-weight: 800;
  color: #1a1a1a;
}

.header-actions {
  display: flex;
  gap: 10px;
}

/* 테이블 */
.product-table {
  width: 100%;
  border-collapse: collapse;
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0,0,0,0.07);
}

.product-table th,
.product-table td {
  padding: 14px 16px;
  text-align: left;
  font-size: 0.9rem;
  border-bottom: 1px solid #f0f0f0;
  vertical-align: middle;
}

.product-table th {
  background: #fafafa;
  font-weight: 700;
  color: #555;
  font-size: 0.82rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.product-table tr:last-child td {
  border-bottom: none;
}

.thumb {
  width: 48px;
  height: 48px;
  object-fit: cover;
  border-radius: 8px;
}

.no-img {
  color: #bbb;
  font-size: 0.8rem;
}

.actions {
  display: flex;
  gap: 8px;
}

/* 공통 input */
.input {
  display: block;
  width: 100%;
  padding: 10px 14px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 0.95rem;
  margin-bottom: 14px;
  box-sizing: border-box;
  outline: none;
  transition: border-color 0.15s;
}

.input:focus {
  border-color: #3b82f6;
}

.textarea {
  resize: vertical;
}

label {
  display: block;
  font-size: 0.82rem;
  font-weight: 600;
  color: #555;
  margin-bottom: 5px;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
  cursor: pointer;
}

.checkbox-label input[type="checkbox"] {
  width: 16px;
  height: 16px;
  cursor: pointer;
}

/* 버튼 */
.btn-primary {
  background: #2563eb;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 0.9rem;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.15s;
}

.btn-primary:hover:not(:disabled) {
  background: #1d4ed8;
}

.btn-primary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.btn-ghost {
  background: transparent;
  color: #555;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s;
}

.btn-ghost:hover {
  background: #f5f5f5;
}

.btn-sm {
  padding: 5px 12px;
  font-size: 0.8rem;
  font-weight: 600;
  border: 1px solid #ddd;
  border-radius: 6px;
  background: #fff;
  cursor: pointer;
  transition: background 0.15s;
}

.btn-sm:hover {
  background: #f0f0f0;
}

.btn-danger {
  color: #dc2626;
  border-color: #fca5a5;
}

.btn-danger:hover {
  background: #fff5f5;
}

/* 모달 */
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal {
  background: #fff;
  border-radius: 16px;
  padding: 40px;
  width: 100%;
  max-width: 520px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 8px 40px rgba(0,0,0,0.2);
}

.modal h2 {
  font-size: 1.2rem;
  font-weight: 800;
  color: #1a1a1a;
  margin-bottom: 24px;
}

.modal-actions {
  display: flex;
  gap: 10px;
}

/* 상태 메시지 */
.status-msg {
  text-align: center;
  color: #888;
  padding: 60px 0;
}

.err-msg {
  color: #dc2626;
  font-size: 0.85rem;
  margin-bottom: 12px;
}
</style>
