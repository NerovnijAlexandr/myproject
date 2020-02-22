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
        methods: {
            get_data() {
                this.$store.dispatch('get_data');
            }
        },
        created() {
            this.get_data();
        }

    }
</script>

<style scoped>

</style>