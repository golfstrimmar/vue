import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MainPage from "../views/MainPage.vue";
import PhotosPage from "../views/PhotosPage.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
 {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/MainPage",
    name: "MainPage",
    component: MainPage,
  },
  {
    path: "/PhotosPage",
    name: "PhotosPage",
    component: PhotosPage,
  },
  
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
