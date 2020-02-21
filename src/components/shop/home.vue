<template>
    <div>
        <my-header></my-header>
        <categories></categories>
    </div>
</template>

<script>
    import categories from './category/categories'
    import my_header from './my_header'

    export default {
        name: "home",
        components: {
            categories,
            'my-header': my_header
        },

    }
</script>

<style scoped>

</style>