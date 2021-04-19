import Vue from 'vue'
import VueRouter from 'vue-router'
import VCatalog from "../views/v-catalog";
import VCart from "../views/v-cart";

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "catalog",
    component: VCatalog,
  },
  {
    path: "/cart",
    name: "cart",
    component: VCart,
    props: true,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
