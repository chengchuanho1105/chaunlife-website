export default defineNuxtRouteMiddleware((to, from) => {
  const isLoggedIn = checkYourAuthState()
  if (!isLoggedIn) return '/login'
})

// 或是用 router.beforeEach 實作
