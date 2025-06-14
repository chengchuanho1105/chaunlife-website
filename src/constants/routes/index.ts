import { xiangchuanRoutes } from './xiangchuan'
import { crazyclownRoutes } from './crazyclown'
import type { Brand, RouteMetaInfo } from './types'

const brandRouteMap: Record<Brand, RouteMetaInfo[]> = {
  xiangchuan: xiangchuanRoutes,
  crazyclown: crazyclownRoutes,
}

export function getBrandRoutes(brand: Brand): RouteMetaInfo[] {
  return brandRouteMap[brand]
}

export function findRouteTitleByName(
  brand: Brand,
  name: string,
  lang: 'zh' | 'en' = 'zh',
): string | undefined {
  const routes = brandRouteMap[brand]

  function search(routes: RouteMetaInfo[]): string | undefined {
    for (const route of routes) {
      if (route.name === name) return route.title[lang]
      if (route.children) {
        const found = search(route.children)
        if (found) return found
      }
    }
    return undefined
  }

  return search(routes)
}

/**使用範例
 * 顯示品牌對應的 Navbar：
 * import { getBrandRoutes } from '@/constants/routes'
 * const navItems = getBrandRoutes(currentBrand).filter(item => item.showInNavbar)
 *
 * 顯示頁面標題 / Breadcrumb：
 * import { useRoute } from 'vue-router'
 * import { findRouteTitleByName } from '@/constants/routes'
 * const route = useRoute()
 * const title = findRouteTitleByName(route.meta.brand, route.name as string, 'zh')
 */
