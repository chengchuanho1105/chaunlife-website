<script setup lang="ts">
defineOptions({ name: 'xiangchuan-layout' })

import Navbar from '@/components/layoutCompo/Navbar.vue';

import { xiangchuanBrand } from '@/constants/brand/xiangchuan'
import { xiangchuanRoutes } from '@/constants/routes/xiangchuan'

</script>

<template>
    <header>
        <!--<Navbar :brand="xiangchuanBrand" :routes="xiangchuanRoutes"></Navbar>-->
    </header>
    <main class="">
        <slot></slot>
    </main>
    <footer class="">
        <p>這是 default layout 的 footer</p>
    </footer>
</template>

<style scoped></style>