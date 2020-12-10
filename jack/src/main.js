import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import axios from "axios";
import Vuex from "vuex";

// import "./assets/ress.min.css"
// import "./assets/reset.scss"
import "./assets/null.scss"






Vue.prototype.axios = axios;

Vue.config.productionTip = false


new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
