import Vue from 'vue'
import axios from "axios";
import Vuelidate from "vuelidate";
import App from './App.vue';
import '../assets/css/fonts.css';

Vue.config.productionTip = false;
Vue.use(Vuelidate);

Vue.prototype.$axios = axios;



new Vue({
  render: h => h(App),
}).$mount('#app')


