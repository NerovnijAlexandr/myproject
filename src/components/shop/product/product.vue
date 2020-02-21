<template>
    <div>
        <my-header></my-header>
        <div class="container mx-auto p-5">
            <button @click="back"
                    class="bg-blue-300 hover:bg-blue-200 py-2 px-4 rounded"
            >Назад</button>
            <div class="flex flex-col">
                <div class="flex justify-between py-5">
                    <h2 class="text-4xl">{{ product.name }}</h2>
                    <div class="text-2x1 pt-3"><span class="text-2xl" title="Категория">{{ category.name }}</span></div>
                </div>
                <div class="flex">
                    <img :src="product.img" alt="product">
                    <div class="flex flex-col pl-16 p-2 pt-12">
                        <div>
                            <cost :cost="product.cost_per_one" class="pr-5"></cost>
                            <button @click="add_to_basket"
                                    class="bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 align-bottom inline-block rounded">
                                Купить
                            </button>
                        </div>
                        <div class="pt-5">
                            <p class="text-2xl">
                                {{ product.about }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import my_header from '../my_header'
    import backer from '../../../mixins/backer'
    import cost from './cost'

    export default {
        name: "product",
        mixins: [
            backer
        ],
        components: {
            'my-header': my_header,
            cost
        },
        data() {
            return {
                prod_id: 0,
                product: {},
            }
        },
        watch: {
            $route(to) {
                this.prod_id = to.params['prod_id'];
            }
        },
        methods: {
            add_to_basket() {
                this.$store.commit('add_to_basket', {
                    id: this.prod_id,
                });
            },
        },
        computed: {
            category() {
                return this.$store.getters.get_category(this.product.category_id);
            }
        },
        created() {
            this.prod_id = this.$route.params['prod_id'];
            this.product = this.$store.getters.get_product(this.prod_id);
        },
    }
</script>

<style scoped>

</style>