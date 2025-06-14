import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'

const brands = ['xiangchuan', 'crazyclown'] as const

import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    Pages({
      dirs: 'src/pages',
      extensions: ['vue'],
      importMode: 'async',
      extendRoute(route) {
        for (const brand of brands) {
          if (route.path.startsWith(`/${brand}/admin`)) {
            route.meta = {
              layout: `${brand}-admin`,
              brand,
              requiresAuth: true,
            }
            return route
          }
          if (route.path.startsWith(`/${brand}/user`)) {
            route.meta = {
              layout: `${brand}-user`,
              brand,
              requiresAuth: true,
            }
            return route
          }
          if (route.path.startsWith(`/${brand}`)) {
            route.meta = {
              layout: brand,
              brand,
            }
            return route
          }
        }

        // fallback default
        route.meta = {
          layout: 'default',
        }
        return route
      },
    }),
    Layouts({
      layoutsDirs: ['src/layouts'],
      defaultLayout: 'default',
    }),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
