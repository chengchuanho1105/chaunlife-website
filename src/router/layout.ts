import DefaultLayout from '@/layouts/default.vue'
import XiangchuanLayout from '@/layouts/xiangchuan.vue'
import XiangchuanAdminLayout from '@/layouts/xiangchuan-admin.vue'
import XiangchuanUserLayout from '@/layouts/xiangchuan-user.vue'
import CrazyclownLayout from '@/layouts/crazyclown.vue'
import CrazyclownAdminLayout from '@/layouts/crazyclown-admin.vue'
import CrazyclownUserLayout from '@/layouts/crazyclown-user.vue'

const layoutMap: Record<string, any> = {
  default: DefaultLayout,

  // Xiangchuan
  xiangchuan: XiangchuanLayout,
  'xiangchuan-admin': XiangchuanAdminLayout,
  'xiangchuan-user': XiangchuanUserLayout,

  // Crazyclown
  crazyclown: CrazyclownLayout,
  'crazyclown-admin': CrazyclownAdminLayout,
  'crazyclown-user': CrazyclownUserLayout,
}

export function resolveLayout(name?: string) {
  return layoutMap[name || 'default'] || DefaultLayout
}
