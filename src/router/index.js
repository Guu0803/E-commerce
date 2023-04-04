import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Products from '@/views/Products.vue'
import Cart from '@/views/Cart.vue'

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/produtos/:type",
    name: "Products",
    component: Products
  },
  {
    path: "/carrinho",
    name: "Cart",
    component: Cart

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
