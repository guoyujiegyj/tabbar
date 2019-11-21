import Vue from 'vue'
import VueRouter from 'vue-router'
const Home=()=>import('../views/home/Home')
const Cart = ()=>import('../views/cart/Cart')
const Mine = ()=>import('../views/mine/Mine')
const Category = ()=>import('../views/category/Category')
Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/mine',
    component: Mine
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
