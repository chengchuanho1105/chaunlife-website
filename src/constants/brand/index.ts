import { xiangchuanBrand } from './xiangchuan'
import { crazyclownBrand } from './crazyclown'
import type { BrandConfig } from './types'

// 自動建立品牌對應表
export const BRANDS = {
  xiangchuanBrand,
  crazyclownBrand,
} as const

export type BrandKey = keyof typeof BRANDS

// 品牌清單
export const BRAND_LIST: BrandConfig[] = Object.values(BRANDS)

export * from './types'

/** 使用範例：
 * import { BRANDS, BrandKey } from '@/constants/brand'
 * function getBrandConfig(key: BrandKey) {
 *   return BRANDS[key]
 * }
 * */
