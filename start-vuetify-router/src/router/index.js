import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Cards from "../views/Cards";
import MainPage from "../views/MainPage";
import Greed from "../views/Greed";

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Cards",
    name: "Cards",
    component: Cards,
  },
  {
    path: "/MainPage",
    name: "MainPage",
    component: MainPage,
  },
  {
    path: "/Greed",
    name: "Greed",
    component: Greed,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
