<template>
    <div class="bg-blue-300">
        <div class="container mx-auto">
            <div class="flex">
                <div>
                    <router-link
                            :to="{name: 'home'}"
                            exact>
                        <img class="w-16 h-auto" alt="Vue logo" src="../../assets/logo.png">
                    </router-link>
                </div>
                <div class="w-full flex justify-between  text-white">
                    <div class="text-center w-full">
                        <p class="text-4xl font-bold">
                            Магазин больших скидок
                        </p>
                    </div>
                    <div class="mt-3" id="basket">
                        <router-link
                                :class="{'text-green-600': basket_count > 0}"
                                class="text-2xl font-bold hover:underline hover:border-green-600 px-2 py-1 rounded"
                                :to="{name: 'basket'}"
                                exact
                        >Корзина({{ basket_count }})</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "my_header",
        computed: {
            ...mapGetters([
                'basket_count'
            ]),
        }
    }
</script>

<style scoped>

</style>