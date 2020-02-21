<template>
    <div class="pt-5">
        <div class="container mx-auto">
            <div class="flex">
                <div class="w-1/3 p-5">
                    <category-list></category-list>
                </div>
                <div class="w-2/3 p-5">
                    <presentation></presentation>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import category_list from '../category_list'
    import presentation from '../presentation'

    export default {
        name: "categories",
        components: {
            'category-list': category_list,
            presentation
        }
    }
</script>

<style scoped>

</style>