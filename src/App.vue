<template>
    <div id="app">
        <router-view :key="$route.path"></router-view>
    </div>
</template>

<script>
    export default {
        name: 'App',
    }
</script>

<style src="./assets/css/tailwind.css"></style>
<style scoped>
    body {
        background-color: lightgrey;
        font-family: Arial, serif;
    }
</style>
