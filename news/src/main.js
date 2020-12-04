import Vue from 'vue'
import App from './App'
import "./assets/css/fonts.css";



// bootstrap
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

//router
import VueRouter from "vue-router";
Vue.use(VueRouter);

// vue - plyr
import VuePlyr from "vue-plyr";
import "vue-plyr/dist/vue-plyr.css";
Vue.use(VuePlyr, {
plyr: {}
});

// прописываем router
import router from './router'


import Vuetify from "vuetify";
// import "vuetify/dist/vuetify.min.css";
Vue.use(Vuetify);
const opts = {};
export default new Vuetify(opts);







Vue.config.productionTip = false

new Vue({
  el: '#app',
  components: { App },
  // прописываем router
  router,
  template: '<App/>'
})
