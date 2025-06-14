<script setup lang="ts">
defineOptions({ name: 'xiangchuanHomePage' })

import Navbar from '@/components/layoutCompo/Navbar.vue';

import { xiangchuanBrand } from '@/constants/brand/xiangchuan'
import { xiangchuanRoutes } from '@/constants/routes/xiangchuan'

</script>

<template>
    <Navbar :brand="xiangchuanBrand" :routes="xiangchuanRoutes"></Navbar>
    <div class="h-screen ">
        123<br>
        123<br>
        123<br>
        123<br>
    </div>
</template>

<style scoped></style>