
import Vue from 'vue'
import App from './App'
import router from './router'
import "./assets/css/fonts.css";





// firebase;
import firebaseConfig from "./config/firebase"
import firebase from "firebase"
firebase.initializeApp(firebaseConfig);







// BootstrapVue;
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";


// vuex;
// import Vuex from "vuex";
// Vue.use(Vuex);


Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
