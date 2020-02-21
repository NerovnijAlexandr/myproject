<template>
    <span class="text-4xl text-red-600">{{ prety_val }}</span>
</template>

<script>
    export default {
        name: "cost",
        props: {
            cost: {
                type: Number,
                required: true
            }
        },
        computed: {
            prety_val() {
                return `${this.cost}₴`;
            }
        }
    }
</script>

<style scoped>

</style>