import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import About from "../views/About";
import MainPage from "../views/MainPage";
import PhotosPage from "../views/PhotosPage";

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/About",
    name: "About",
    component: About,
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
