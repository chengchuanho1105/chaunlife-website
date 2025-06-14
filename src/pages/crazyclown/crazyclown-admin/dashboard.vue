<script setup lang="ts">
defineOptions({ name: 'crazyclownAdminPage' })
definePageMeta({ layout: 'adminLayout', middleware: ['auth', 'admin'], })
</script>

<template>
    <div class="">
        <h1 class="h5">crazyclown Admin Page</h1>
    </div>
</template>

<style scoped></style>