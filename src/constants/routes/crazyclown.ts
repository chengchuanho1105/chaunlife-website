import type { RouteMetaInfo } from './types'

export const crazyclownRoutes: RouteMetaInfo[] = [
  {
    name: 'crazyclown-index',
    path: '/crazyclown',
    title: { zh: '首頁', en: 'Home' },
    showInNavbar: true,
  },
  {
    name: 'crazyclown-product',
    path: '/crazyclown/product',
    title: { zh: '產品介紹', en: 'Product' },
    showInNavbar: true,
    children: [
      {
        name: 'crazyclown-product-list',
        path: '/crazyclown/product/list',
        title: { zh: '產品列表' },
      },
    ],
  },
]
