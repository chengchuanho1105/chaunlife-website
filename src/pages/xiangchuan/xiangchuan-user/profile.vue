<script setup lang="ts">
defineOptions({ name: 'xiangchuanUserPage' })
definePageMeta({ layout: 'userLayout', middleware: ['auth', 'user'], })
</script>

<template>
    <div class="">
        <h1 class="h5">xiangchuan User Page</h1>
    </div>
</template>

<style scoped></style>