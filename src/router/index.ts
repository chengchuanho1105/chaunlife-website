import { createRouter, createWebHistory } from 'vue-router'
import routes from 'virtual:generated-pages' // vite-plugin-pages 產生的 routes
// import { isLoggedIn } from '@/utils/auth.ts' // 你自己實作的登入檢查函式

// console.log('Generated routes:', routes)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

/*
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isLoggedIn()) {
    const brand = to.meta.brand || 'default'
    next(`/${brand}/login`)
  } else {
    next()
  }
})*/

export default router
