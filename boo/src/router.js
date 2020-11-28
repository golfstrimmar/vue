import VueRouter from "vue-router";
// здесь импортируются страницы
import home from './pages/home'
import about from "./pages/about"
import contacts from "./pages/contacts";


export default new VueRouter({
  routes: [
    { path: "", component: home },
    { path: "/name-about", name: "about", component: about },
    { path: "/contacts", component: contacts }
  ],
  // отключение хэша #
  mode: "history"
});