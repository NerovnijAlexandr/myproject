import VueRouter from 'vue-router'
import Home from './components/shop/home'
import Category from './components/shop/category/category'
import Product from './components/shop/product/product'
import Basket from './components/shop/basket/basket'
import err404 from './components/support/err404'

export default new VueRouter({
    routes: [
        {
            path: '/',
            component: Home,
            name: 'home'
        },
        {
            path: '/category/:cat_id',
            component: Category,
            name: 'category',
        },
        {
            path: '/product/:prod_id',
            component: Product,
            name: 'product'
        },
        {
            path: '/basket',
            component: Basket,
            name: 'basket'
        },
        {
            path: '*',
            component: err404,
            name: 'err404'
        }
    ],
    mode: 'history'
})