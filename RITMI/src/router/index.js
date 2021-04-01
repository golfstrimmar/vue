import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Registration from "../views/Registration.vue";
import Categories from "../views/Categories.vue";
import Timetable from "../views/Timetable.vue";
import Contacts from "../views/Contacts.vue";

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        name: "Home",
        meta: { layout: "main" },
        component: Home
    },
    {
        path: "/Registration",
        name: "Registration",
        meta: { layout: "reg" },
        component: () => import("../views/Registration.vue")
    },
    {
        path: "/Categories",
        name: "Categories",
        meta: { layout: "reg" },
        component: () => import("../views/Categories.vue")
    },
    {
        path: "/Timetable",
        name: "Timetable",
        meta: { layout: "reg" },
        component: () => import("../views/Timetable.vue")
    },
    {
        path: "/Contacts",
        name: "Contacts",
        meta: { layout: "main" },
        component: () => import("../views/Contacts.vue")
    }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
