import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
Vue.use(Vuelidate);

new Vue({
  render: h => h(App),
}).$mount('#app')

import Vuelidate from "vuelidate";





// const Home{ template:'<h1>Home</h1>'},
// const About{ template:'<h1>About</h1>'},
// const Blog{template:'<h1>Blog</h1>'}

// const routes = {
//   {path: '/home', component: Home},
//   {path: '/about', component: About},
//   {path: '/blog', component: Blog}
// }


// const Router = new VueRouter {
// routes

// }