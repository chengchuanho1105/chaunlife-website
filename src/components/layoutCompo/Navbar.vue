<script setup lang="ts">
defineOptions({ name: 'AppNavbar' })

import { ref, computed, onMounted } from 'vue'
import clsx from 'clsx'
import {
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
    TransitionRoot,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from '@headlessui/vue'

import type { BrandConfig } from '@/constants/brand/types.ts'
import type { RouteMetaInfo } from '@/constants/routes/types.ts'

const props = defineProps<{
    brand: BrandConfig
    routes: RouteMetaInfo[]
}>()

const isScrolled = ref(false)
onMounted(() => {
    window.addEventListener('scroll', () => {
        isScrolled.value = window.scrollY > 5
    })
})

const navItems = computed(() => {
    return props.routes
        .filter((route) => route.showInNavbar)
        .map((route) => ({
            label: route.title.zh,
            to: route.path,
            children:
                route.children?.map((child) => ({
                    label: child.title?.zh ?? '',
                    to: child.path,
                })) ?? [],
        }))
})

function setLang(lang: string) {
    console.log('Set language to', lang)
}

const user = false // 模擬使用者登入狀態

// 通用 CSS 類別
const cssBase = ['text-gray-800 dark:text-gray-200']
const cssHover = ['hover:text-blue-800 dark:hover:text-blue-200']
const cssTransition = ['transition-colors duration-200']

// Navbar 整體樣式
const cssNav = [
    'fixed top-0 w-full z-50 transition-all duration-500 shadow-sm',
]
const cssNavScrolled = ['backdrop-blur-lg bg-white/70', 'dark:bg-black/60']
const cssNavUnScroll = ['bg-white/30', 'dark:bg-black/40']

// 選單按鈕文字樣式
const cssMenuButtonText = ['text-base font-medium', ...cssBase, ...cssHover, ...cssTransition]

// 選單項目容器樣式
const cssMenuItems = [
    'absolute right-0 mt-1 rounded-md shadow-lg ring-1 ring-black/5 focus:outline-none z-50',
    'bg-gray-200 dark:bg-gray-800',
]

// 選單項目連結樣式
const cssMenuItemLink = [
    'block px-4 py-2 space-x-1 text-left rounded-lg',
    ...cssBase,
]
const cssMenuItemLinkActive = ['bg-gray-300 dark:bg-gray-700', 'text-blue-800 dark:text-blue-200']

// 選單項目文字樣式
const cssMenuItemText = ['text-sm', ...cssBase]
const cssMenuItemTextHover = ['hover:bg-gray-200 dark:hover:bg-gray-800', ...cssHover]
</script>

<template>
    <nav :class="[cssNav, isScrolled ? cssNavScrolled : cssNavUnScroll]">
        <div class="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <div class="hidden lg:flex justify-between items-center h-16">
                <RouterLink :to="props.brand.publicPath" class="flex items-center space-x-2">
                    <img :src="props.brand.logo" :alt="`${props.brand.name} Logo`"
                        class="w-10 h-10 rounded-lg object-contain" />
                    <span class="text-lg font-bold text-gray-900 dark:text-gray-100">
                        {{ props.brand.name }}
                    </span>
                </RouterLink>

                <div class="flex space-x-4">
                    <div v-for="(item, index) in navItems" :key="index" class="flex items-center">
                        <Menu v-if="item.children?.length" as="div" class="relative">
                            <template #default="{ open }">
                                <MenuButton :class="clsx('relative p-1 group', cssMenuButtonText)">
                                    <span>{{ item.label }}</span>
                                    <i class="bi bi-chevron-down pl-1 transition-transform duration-200"
                                        :class="{ 'rotate-180': open }"></i>
                                    <span
                                        class="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-blue-500 transition-all duration-180 group-hover:w-full"></span>
                                </MenuButton>

                                <TransitionRoot enter-active-class="transition duration-100 ease-out"
                                    enter-from-class="transform scale-95 opacity-0"
                                    enter-to-class="transform scale-100 opacity-100"
                                    leave-active-class="transition duration-75 ease-in"
                                    leave-from-class="transform scale-100 opacity-100"
                                    leave-to-class="transform scale-95 opacity-0">
                                    <MenuItems :class="clsx(cssMenuItems, 'w-35')">
                                        <MenuItem v-for="(child, cIndex) in item.children" :key="cIndex"
                                            v-slot="{ active }">
                                        <RouterLink :to="child.to" :class="[
                                            ...cssMenuItemLink,
                                            ...(active ? cssMenuItemLinkActive : []),
                                        ]">
                                            <span>{{ child.label }}</span>
                                        </RouterLink>
                                        </MenuItem>
                                    </MenuItems>
                                </TransitionRoot>
                            </template>
                        </Menu>

                        <RouterLink v-else :to="item.to" :class="clsx('relative p-1 group', cssMenuButtonText)">
                            <span>{{ item.label }}</span>
                            <span
                                class="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-blue-500 transition-all duration-180 group-hover:w-full"></span>
                        </RouterLink>
                    </div>
                </div>

                <div class="flex items-center space-x-3">
                    <Menu as="div" class="relative inline-block text-left">
                        <MenuButton :class="clsx(
                            cssMenuButtonText,
                            'w-12 h-12 flex items-center justify-center hover:bg-black/10 dark:hover:bg-white/10 border border-black/10 dark:border-white/10 rounded-full shadow',
                        )">
                            <span class="text-xl">
                                <i class="bi bi-translate"></i>
                            </span>
                        </MenuButton>

                        <TransitionRoot enter="transition ease-out duration-200" enter-from="opacity-0 translate-y-1"
                            enter-to="opacity-100 translate-y-0" leave="transition ease-in duration-75"
                            leave-from="opacity-100 translate-y-0" leave-to="opacity-0 translate-y-1">
                            <MenuItems :class="clsx(cssMenuItems, 'w-20')">
                                <div @click="setLang('zh')" :class="[...cssMenuItemLink, ...cssMenuItemTextHover]">
                                    <span :class="cssMenuItemText">中文</span>
                                </div>
                                <div @click="setLang('en')" :class="[...cssMenuItemLink, ...cssMenuItemTextHover]">
                                    <span :class="cssMenuItemText">English</span>
                                </div>
                            </MenuItems>
                        </TransitionRoot>
                    </Menu>

                    <Menu as="div" class="relative inline-block text-left">
                        <MenuButton :class="clsx(
                            cssMenuButtonText,
                            'w-12 h-12 flex items-center justify-center hover:bg-black/10 dark:hover:bg-white/10 border border-black/10 dark:border-white/10 rounded-full shadow',
                        )">
                            <div v-if="user">
                                <img src="" alt="User Avatar" class="w-full h-full rounded-full" />
                            </div>
                            <RouterLink v-else to="">
                                <span class="text-xl">
                                    <i class="bi bi-box-arrow-in-left"></i>
                                </span>
                            </RouterLink>
                        </MenuButton>

                        <TransitionRoot enter="transition ease-out duration-200" enter-from="opacity-0 translate-y-1"
                            enter-to="opacity-100 translate-y-0" leave="transition ease-in duration-75"
                            leave-from="opacity-100 translate-y-0" leave-to="opacity-0 translate-y-1">
                            <MenuItems :class="clsx(cssMenuItems, 'w-50')">
                                <div class="px-3 py-2 flex flex-row items-center space-x-4">
                                    <div
                                        class="w-16 h-16 flex items-center justify-center rounded-full border-white shadow">
                                        <img src="" alt="User Avatar" class="w-full h-full rounded-full" />
                                    </div>
                                    <p :class="clsx(cssMenuItemText, 'font-semibold')">user.name</p>
                                </div>

                                <hr class="my-1 border-gray-200" />

                                <RouterLink to="/account" :class="[...cssMenuItemLink, ...cssMenuItemTextHover]">
                                    <i :class="clsx('bi bi-file-medical', cssMenuItemText)"></i>
                                    <span :class="cssMenuItemText">管理帳戶</span>
                                </RouterLink>
                                <RouterLink to="/switch-account" :class="[...cssMenuItemLink, ...cssMenuItemTextHover]">
                                    <i :class="clsx('bi bi-arrow-left-right', cssMenuItemText)"></i>
                                    <span :class="cssMenuItemText">切換帳戶</span>
                                </RouterLink>
                                <RouterLink to="/logout" :class="[...cssMenuItemLink, ...cssMenuItemTextHover]">
                                    <i :class="clsx('bi bi-box-arrow-right', cssMenuItemText)"></i>
                                    <span :class="cssMenuItemText">登出</span>
                                </RouterLink>

                                <hr class="my-1 border-gray-200" />

                                <RouterLink to="/settings" :class="[...cssMenuItemLink, ...cssMenuItemTextHover]">
                                    <i :class="clsx('bi bi-gear', cssMenuItemText)"></i>
                                    <span :class="cssMenuItemText">設定</span>
                                </RouterLink>
                            </MenuItems>
                        </TransitionRoot>
                    </Menu>
                </div>
            </div>

            <Disclosure as="div" class="lg:hidden">
                <template #default="{ open }">
                    <div class="flex justify-between items-center h-16">
                        <div class="flex items-center space-x-3">
                            <img :src="props.brand.logo" :alt="`${props.brand.name} Logo`"
                                class="w-10 h-10 rounded-lg object-contain" />
                            <span class="text-xl font-bold text-gray-800 dark:text-gray-200">
                                {{ props.brand.name }}
                            </span>
                        </div>

                        <DisclosureButton
                            class="p-2 rounded-md text-gray-800 hover:text-blue-800 dark:text-gray-200 dark:hover:text-blue-200 transition">
                            <i :class="[
                                'text-xl transition-transform duration-300',
                                open ? 'bi bi-x' : 'bi bi-list',
                            ]"></i>
                        </DisclosureButton>
                    </div>

                    <DisclosurePanel class="space-y-1 px-2 pb-3 pt-2">
                        <template v-for="(item, index) in navItems" :key="index">
                            <Disclosure v-if="item.children.length" as="div" class="space-y-1">
                                <template #default="{ open: subOpen }">
                                    <DisclosureButton
                                        class="w-full flex justify-between items-center px-4 py-2 text-left text-sm font-medium rounded-md"
                                        :class="[...cssBase, ...cssHover, ...cssMenuItemTextHover]">
                                        <span>{{ item.label }}</span>
                                        <i class="bi bi-chevron-down transition-transform duration-200"
                                            :class="{ 'rotate-180': subOpen }"></i>
                                    </DisclosureButton>
                                    <DisclosurePanel class="px-8">
                                        <RouterLink v-for="(child, cIndex) in item.children" :key="cIndex"
                                            :to="child.to" class="block px-4 py-2 text-sm rounded-md"
                                            :class="[...cssBase, ...cssHover, ...cssMenuItemTextHover]">
                                            {{ child.label }}
                                        </RouterLink>
                                    </DisclosurePanel>
                                </template>
                            </Disclosure>

                            <RouterLink v-else :to="item.to" class="block px-4 py-2 text-sm rounded-md"
                                :class="[...cssBase, ...cssHover, ...cssMenuItemTextHover]">
                                {{ item.label }}
                            </RouterLink>
                        </template>

                        <hr class="my-1 border-1 border-gray-200" />

                        <Disclosure v-if="user" as="div" class="space-y-1">
                            <template #default="{ open: userMenuOpen }">
                                <DisclosureButton
                                    class="w-full flex items-center px-4 py-2 text-left text-sm font-medium rounded-md space-x-3"
                                    :class="[...cssBase, ...cssHover, ...cssMenuItemTextHover]">
                                    <div
                                        class="w-10 h-10 rounded-full overflow-hidden border border-black/10 dark:border-white/10 shadow">
                                        <img src="" alt="User Avatar" class="w-full h-full object-cover" />
                                    </div>
                                    <span class="ml-2 px-2 py-0.5 rounded-full bg-red-100 text-red-600 text-xs">
                                        管理員
                                    </span>
                                    <span class="flex-1">user.name</span>
                                    <i class="bi bi-chevron-down transition-transform duration-200"
                                        :class="{ 'rotate-180': userMenuOpen }"></i>
                                </DisclosureButton>

                                <DisclosurePanel class="px-8 space-y-1">
                                    <RouterLink to="/account" class="block px-4 py-2 text-sm rounded-md"
                                        :class="[...cssBase, ...cssHover, ...cssMenuItemTextHover]">
                                        <i class="bi bi-file-medical mr-2"></i> 管理帳戶
                                    </RouterLink>
                                    <RouterLink to="/switch-account" class="block px-4 py-2 text-sm rounded-md"
                                        :class="[...cssBase, ...cssHover, ...cssMenuItemTextHover]">
                                        <i class="bi bi-arrow-left-right mr-2"></i> 切換帳戶
                                    </RouterLink>
                                    <RouterLink to="/logout" class="block px-4 py-2 rounded-md"
                                        :class="[...cssBase, ...cssHover, ...cssMenuItemTextHover]">
                                        <i class="bi bi-box-arrow-right mr-2"></i> 登出
                                    </RouterLink>
                                    <hr class="my-1 border-gray-200" />
                                    <RouterLink to="/settings" class="block px-4 py-2 rounded-md"
                                        :class="[...cssBase, ...cssHover, ...cssMenuItemTextHover]">
                                        <i class="bi bi-gear mr-2"></i> 設定
                                    </RouterLink>
                                </DisclosurePanel>
                            </template>
                        </Disclosure>
                        <div v-else class="space-y-1">
                            <RouterLink to=""
                                class="w-full flex justify-between items-center px-4 py-2 text-left text-sm font-medium rounded-md"
                                :class="[...cssBase, ...cssHover, ...cssMenuItemTextHover]">
                                <span>登入</span>
                            </RouterLink>
                        </div>
                    </DisclosurePanel>
                </template>
            </Disclosure>
        </div>
    </nav>
</template>

<style scoped></style>