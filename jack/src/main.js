import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import axios from "axios";
import "@/assets/null.scss";



// vuex;
import store from "@/store/store";


import Vuelidate from "vuelidate";
Vue.use(Vuelidate);

Vue.prototype.axios = axios;

Vue.config.productionTip = false


new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
