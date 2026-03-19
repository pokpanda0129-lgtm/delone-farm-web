export default defineEventHandler(async (event) => {
  const { password } = await readBody(event)
  const config = useRuntimeConfig()

  if (password === config.adminPassword) {
    return { ok: true }
  }

  throw createError({ statusCode: 401, message: '비밀번호가 틀렸습니다.' })
})
