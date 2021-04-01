import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import 'materialize-css/dist/js/materialize.min.js';
import Vuelidate from "vuelidate";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
// import "@mdi/font/css/materialdesignicons.min.css";

Vue.use(Vuetify);
Vue.use(Vuelidate);
Vue.prototype.axios = axios;
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  // mdi,
  render: (h) => h(App),
}).$mount("#app");



