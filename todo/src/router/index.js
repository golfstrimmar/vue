import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import signIn from "../components/signIn.vue";
import signUp from "../components/signUp.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/signIn",
    name: "signIn",
    component: signIn,
  },
  {
    path: "/signUp",
    name: "signUp",
    component: signUp,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
