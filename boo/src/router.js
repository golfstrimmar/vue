import VueRouter from "vue-router";
// здесь импортируются страницы
import home from './pages/home'
import about from "./pages/about"
import contacts from "./pages/contacts";
import counters from "./pages/counters";
import clickButtons from "./pages/clickButtons";
import trans from "./pages/trans";

import componentsActions from "./pages/componentsActions";
import formElements from "./pages/formElements";
import computed from "./pages/computed";
import different from "./pages/разное";
import posts from "./pages/posts/Index";
import post from "./pages/posts/post";


export default new VueRouter({
  routes: [
    {
      path: "",
      component: home
    },
    {
      path: "/name-about",
      name: "about",
      component: about
    },
    {
      path: "/contacts",
      name: "contacts",
      component: contacts
    },
    {
      path: "/counters",
      name: "counters",
      component: counters
    },
    {
      path: "/clickButtons",
      name: "clickButtons",
      component: clickButtons
    },
    {
      path: "/trans",
      name: "trans",
      component: trans
    },
    {
      path: "/componentsActions",
      name: "componentsActions",
      component: componentsActions
    },
    {
      path: "/formElements",
      name: "formElements",
      component: formElements
    },
    {
      path: "/computed",
      name: "computed",
      component: computed
    },
    {
      path: "/different",
      name: "different",
      component: different
    },

    {
      path: "/posts",
      name: "posts",
      component: posts
    },
    //  динамический роут. меняется от id поста
    {
      path: "/post/:id",
      component: post
    }
  ],
  // отключение хэша #
  mode: "history"
});