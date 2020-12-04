import VueRouter from "vue-router";
import home from './pages/home'
import about from "./pages/about"
import computed from "./pages/computed";


export default new VueRouter({
  routes: [
    {
      path: "/",
      component: home
    },
    {
      path: "/name-about",
      name: "about",
      component: about
    },
    
    {
      path: "/computed",
      name: "computed",
      component: computed
    },
    
  ],
  mode: "history"
});