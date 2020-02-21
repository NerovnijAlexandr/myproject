<template>
    <div>
        <my-header></my-header>
        <div class="container mx-auto">
            <div class="p-5">
                <div class="flex justify-between">
                    <div><button @click="back"
                        class="bg-blue-300 hover:bg-blue-200 py-2 px-4 rounded"
                >Категории</button>
                    </div>
                    <div class="w-full">
                        <h3 class="font-bold text-title text-center">Товары в вашей корзине</h3>
                    </div>
                </div>
                <ul>
                    <li v-for="product in products_in_basket" :key="product.id" class="py-5 align-middle">
                        <div class="flex justify-between content-center">
                            <div class="px-5 text-center">
                                <img :src="product.img" alt="product" class="w-16 h-auto">
                            </div>
                            <div class="px-5 text-2xl pt-2">
                                <router-link
                                    :to="{
                                            name: 'product',
                                            params: { prod_id: product.id,}
                                        }"
                                    tag="a"
                                    class="hover:opacity-75 font-bold text-2x1"
                                >{{ product.name }}</router-link>
                            </div>
                            <div class="px-5 align-middle">
                                <cost :cost="product.cost_per_one" class="px-2"></cost>
                            </div>
                            <div class="px-5 pt-3">
                                <input type="number" v-model.number="product.count" min=1
                                       @change="change_count(product.id, product.count)"
                                       class="text-2xl w-1/2 border-2 border-blue-400 rounded pl-2"
                                >
                            </div>
                            <div class="px-5">
                                <cost :cost="product.total" class="px-2"></cost>
                            </div>
                            <div class="pt-3">
                                <button @click="del_from_basket"
                                        class="bg-red-600 hover:bg-red-500 text-white font-bold px-4 py-2 rounded">
                                    Убрать
                                </button>
                            </div>
                        </div>
                    </li>
                </ul>
                <div class="py-5 flex justify-between">
                    <div class="text-2xl">
                        <p v-if="products_in_basket.length > 0"><span>Total cost:</span><cost :cost="total_cost" class="px-2"></cost></p>
                        <p v-else>Ваша корзина пока пуста</p>
                    </div>
                    <div class="pl-5 pt-2" v-if="products_in_basket.length > 0">
                        <button class="px-4 py-2 bg-blue-300 hover:bg-blue-200 rounded font-bold">Оформить</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import my_header from '../my_header'
    import backer from '../../../mixins/backer'
    import cost from '../product/cost'

    export default {
        name: "basket",
        mixins: [
            backer
        ],
        components: {
            'my-header': my_header,
            cost
        },
        data() {
            return {
                total_cost: 0,
            }
        },
        computed: {
            ...mapGetters([
                'products_in_basket'
            ]),
        },
        methods: {
            change_count(prod_id, prod_count) {
                this.$store.commit('change_product_count', {
                    id: prod_id,
                    count: prod_count
                });
                this.get_total_cost();
            },
            del_from_basket(prod_id) {
                this.$store.commit('del_from_basket', {
                    id: prod_id
                });
                this.get_total_cost();
            },
            get_total_cost() {
                this.total_cost = this.products_in_basket.reduce(
                    (prev, cur) => prev + cur.total, 0
                );
            },
            back() {
                this.$router.push({name: "home"});
            }
        },
        created() {
            this.get_total_cost();
        }
    }
</script>

<style scoped>
    .text-title {
        font-size: 1.8rem;
    }
</style>