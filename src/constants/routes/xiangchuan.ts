import type { RouteMetaInfo } from './types'

export const xiangchuanRoutes: RouteMetaInfo[] = [
  {
    path: '/xiangchuan',
    name: 'XiangchuanHome',
    title: { zh: '首頁', en: 'Home' },
    showInNavbar: true,
  },
  {
    path: '/xiangchuan/product',
    name: 'XiangchuanProduct',
    title: { zh: '產品介紹', en: 'Product' },
    showInNavbar: true,
    children: [
      {
        name: 'xiangchuan-product-list',
        path: '/xiangchuan/product/list',
        title: { zh: '產品列表' },
      },
      {
        name: 'xiangchuan-product-id',
        path: '/xiangchuan/product/[id]',
        title: { zh: '產品詳情' },
      },
    ],
  },
]
