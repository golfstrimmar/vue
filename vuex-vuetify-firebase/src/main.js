import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import axios from "axios";
import Vuex from "vuex";
import store from "./store/store"
import "materialize-css/dist/js/materialize.min.js";





import firebase from "firebase";
import "firebase/auth";
import "firebase/database";


import "./assets/ress.min.css"
import "./assets/reset.scss"
// import "./assets/null.scss"

Vue.prototype.axios = axios;
Vue.config.productionTip = false



new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App),
  created() {
    var firebaseConfig = {
      apiKey: "AIzaSyAZNxZk4vhQ-S0skY0iY7i78BvmNDWV43I",
      authDomain: "learn-8509f.firebaseapp.com",
      databaseURL: "https://learn-8509f.firebaseio.com",
      projectId: "learn-8509f",
      storageBucket: "learn-8509f.appspot.com",
      messagingSenderId: "812930035095",
      appId: "1:812930035095:web:e1db63a27966c6afdae8d2",
    };
    firebase.initializeApp(firebaseConfig);
  },
}).$mount("#app");






















