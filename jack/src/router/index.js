import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Task from '@/components/task'
import Login from "../views/Login";
import Registration from "../views/Registration";

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/task",
    name: "Task",
    component: Task,
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
  },
  {
    path: "/Registration",
    name: "Registration",
    component: Registration,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
