<script setup lang="ts">
defineOptions({ name: 'default-layout' })
</script>

<template>
    <div id="default-layout" class="">
        <header class="">
            <p>這是 default layout 的 header</p>
        </header>
        <main class="">
            <slot></slot>
        </main>
        <footer class="">
            <p>這是 default layout 的 footer</p>
        </footer>
    </div>
</template>

<style scoped></style>