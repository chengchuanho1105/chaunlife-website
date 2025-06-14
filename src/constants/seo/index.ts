import { xiangchuanSeo } from './xiangchuan'
import { crazyclownSeo } from './crazyclown'

export const SEO_CONFIGS = {
  xiangchuan: xiangchuanSeo,
  crazyclown: crazyclownSeo,
} as const

export type SeoBrandKey = keyof typeof SEO_CONFIGS
export type { SeoConfig } from './types'

/**使用方式
 * import { SEO_CONFIGS } from '@/constants/seo'
 * import type { SeoBrandKey, SeoConfig } from '@/constants/seo'
 *
 * function getSeoByBrand(brand: SeoBrandKey): SeoConfig {
 *   return SEO_CONFIGS[brand]
 * }
 */
