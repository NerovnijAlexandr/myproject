import Vue from 'vue'
import Vuex from 'vuex'
import jdata from '@/assets/data.json'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        categories: jdata.categories,
        products: jdata.products,
        basket: [],
    },
    getters: {
        categories: state => state.categories,
        get_category: state => id => {
            return state.categories.find(category => category.id === id)
        },
        get_products_by_category_id: state => id => {
            return state.products.filter(product => product.category_id === id);
        },
        get_product: state => id => {
            return state.products.find(product => product.id === id)
        },
        products_in_basket: state => state.basket,
        basket_count: state => state.basket.length,
        is_product_contains_in_basket: state => id => {
            return state.basket.find(product => product.id === id) == null;
        }
    },
    mutations: {
        add_to_basket: (state, payload) => {
            let product = state.products.find(product => product.id === payload.id);
            let is_in = true;
            for(let prod of state.basket) {
                if (prod === product) {
                    is_in = false;
                    break;
                }
            }
            if (is_in) {
                product.count = 1;
                product.total = product.cost_per_one;
                state.basket.push(product);
            }
        },
        change_product_count: (state, payload) => {
            let product = state.basket.find(product => product.id === payload.id);
            product.count = payload.count < 0 ? 0 : payload.count;
            product.total = product.count * product.cost_per_one;
        },
        del_from_basket: (state, payload) => {
            let i = state.basket.map(product => product.id).indexOf(payload.id);
            state.basket.splice(i, 1);
        }
    },
    actions: {

    }
});