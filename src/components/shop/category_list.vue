<template>
    <ul class="flex flex-col bg-white p-2 rounded-lg border-2 border-blue-500 shadow-lg">
        <li v-for="category of categories" :key="category.id">
            <router-link
                    :to="{
                          name: 'category',
                          params: { cat_id: category.id }
                    }"
                    tag="a"
                    class="text-blue-500 hover:text-blue-800 pl-5"
                    active-class="font-bold"
                    exact
            >{{ category.name }}</router-link>
        </li>
    </ul>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "category_list",
        computed: {
            ...mapGetters([
                'categories',
            ]),
        }
    }
</script>

<style scoped>

</style>