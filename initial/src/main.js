import Vue from 'vue'
import axios from "axios";
import Vuelidate from "vuelidate";
import App from './App.vue';
import '../assets/css/fonts.css';

// здесь создается своя кастомная директива
import Color from './components/directives/color'


Vue.config.productionTip = false;
Vue.use(Vuelidate);

Vue.prototype.$axios = axios;

// здесь будет храниться экземпляр vue
export const eventEmiter = new Vue()

Vue.directive("color", Color);

new Vue({
  render: h => h(App),
}).$mount('#app')


