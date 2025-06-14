<script setup lang="ts">
import { useRoute } from 'vue-router'
import { resolveLayout } from '@/router/layout.ts'

const route = useRoute()
</script>

<template>
  <component :is="resolveLayout(route.meta.layout as string | undefined)">
    <RouterView />
  </component>
</template>

<style scoped></style>
