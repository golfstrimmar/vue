import Vue from 'vue'
import Router from 'vue-router'
import books from "@/router/books";
import signin from "@/router/signin";
import signup from "@/router/signup";
import words from "@/router/words"
import profile from "@/router/profile";
import home from "@/router/home";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "главная",
      component: home
    },
    {
      path: "/books",
      name: "books",
      component: books
    },
    {
      path: "/signin",
      name: "signin",
      component: signin
    },
    {
      path: "/signup",
      name: "signup",
      component: signup
    },
    {
      path: "/profile",
      name: "profile",
      component: profile
    },
    {
      path: "/words",
      name: "words",
      component: words
    }
  ],
  mode: "history"
});
