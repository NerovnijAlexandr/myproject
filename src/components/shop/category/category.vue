<template>
    <div>
        <my-header></my-header>
        <div class="pt-5">
            <div class="container mx-auto">
                <div class="flex">
                    <div class="w-1/3 p-5">
                        <category-list></category-list>
                    </div>
                    <div class="w-2/3 p-5">
                        <div>
                            <h2 class="text-2xl pb-5">{{ category.name }}</h2>
                            <div class="flex flex-wrap">
                                <div v-for="product of products" :key="product.id" class="w-1/3 py-5 px-1">
                                    <router-link
                                        :to="{
                                            name: 'product',
                                            params: { prod_id: product.id,}
                                        }"
                                        tag="a"
                                    >   <div>
                                            <img :src="product.img" alt="product_small"
                                                class="w-8 h-auto mx-auto">
                                        </div>
                                        <p class="hover:opacity-75 text-center">{{ product.name }}</p>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import my_header from '../my_header'
    import category_list from '../category_list'

    export default {
        name: "category",
        components: {
            'my-header': my_header,
            'category-list': category_list,
        },
        data() {
            return {
                cat_id: 0,
                category: {},
                products: []
            }
        },
        watch: {
            $route(to) {
                this.cat_id = to.params['cat_id'];
            }
        },
        created() {
            this.cat_id = this.$route.params['cat_id'];
            this.category = this.$store.getters.get_category(this.cat_id);
            this.products = this.$store.getters.get_products_by_category_id(this.cat_id);
        },
    }
</script>

<style scoped>

</style>