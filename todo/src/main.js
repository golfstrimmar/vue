import Vue from "vue";
import App from "./App.vue";
import "./assets/style.css"		
// import "./assets/bootstrap.css"		
Vue.config.productionTip = false;

import { BootstrapVue, IconsPlugin } from "bootstrap-vue"
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  render: h => h(App)
}).$mount("#app");
