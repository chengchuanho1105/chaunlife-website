<script setup lang="ts">
defineOptions({ name: 'crazyclownUserPage' })
definePageMeta({ layout: 'userLayout', middleware: ['auth', 'user'], })
</script>

<template>
    <div class="">
        <h1 class="h5">crazyclown User Page</h1>
    </div>
</template>

<style scoped></style>