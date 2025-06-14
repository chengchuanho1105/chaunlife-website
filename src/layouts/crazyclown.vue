<script setup lang="ts">
defineOptions({ name: 'crazyclown-layout' })

import Navbar from '@/components/layoutCompo/Navbar.vue';

import { crazyclownBrand } from '@/constants/brand/crazyclown'
import { crazyclownRoutes } from '@/constants/routes/crazyclown'

</script>

<template>
    <header>
        <Navbar :brand="crazyclownBrand" :routes="crazyclownRoutes"></Navbar>
    </header>
    <main class="bg-gray-50 dark:bg-gray-950">
        <slot></slot>
    </main>
    <footer class="">
    </footer>
</template>

<style scoped></style>