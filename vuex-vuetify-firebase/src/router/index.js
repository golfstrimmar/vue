import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Books from "../views/Books";
import Words from "../views/Words";
import Profile from "../views/Profile";
import Signin from "../views/Signin";
import Logout from "../views/Logout";
import Signup from "../views/Signup";

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Books",
    name: "Books",
    component: Books,
  },
  {
    path: "/Words",
    name: "Words",
    component: Words,
  },
  {
    path: "/Profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/Signin",
    name: "Signin",
    component: Signin,
  },
  {
    path: "/Logout",
    name: "Logout",
    component: Logout,
  },
  {
    path: "/Signup",
    name: "Signup",
    component: Signup,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
