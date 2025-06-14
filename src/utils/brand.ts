/*
import { BRANDS } from '@/constants/brand'
import type { BrandKey, BrandConfig } from '@/constants/brand'

// 根據目前 pathname 回傳品牌 Key
export function getBrandByPath(pathname: string): BrandKey | null {
  return (Object.entries(BRANDS).find(([, config]) =>
    pathname.startsWith(config.publicPath),
  )?.[0] ?? null) as BrandKey | null
}

// 取得品牌設定
export function getBrandConfig(key: BrandKey): BrandConfig {
  return BRANDS[key]
}
*/

/** 使用範例：
 * import { getBrandByPath, getBrandConfig } from '@/utils/brand'
 *
 * const pathname = window.location.pathname
 * const brandKey = getBrandByPath(pathname)
 *
 * if (brandKey) {
 *   const brand = getBrandConfig(brandKey)
 *   console.log('品牌標題:', brand.title)
 * }
 */
