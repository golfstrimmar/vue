import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import axios from "axios";
import Vuex from "vuex";
import firebase from "firebase";
import firebaseConfig from "./config/firebase";
import store from "./store"

import "./assets/ress.min.css"
import "./assets/reset.scss"
// import "./assets/null.scss"
import "firebase/auth";
import "firebase/database";


Vue.prototype.axios = axios;


 

Vue.config.productionTip = false

firebase.initializeApp(firebaseConfig);

// let app

// firebase.auth().onAuthStateChanged(

  // () => {
    // if(!app){

      new Vue({
  vuetify,
  router,
store,
  render: h => h(App)
}).$mount('#app')
    // }
  // }


// )
// 
