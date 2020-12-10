import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import axios from "axios";
import Vuex from "vuex";
import store from "./store"



import firebase from "firebase";
import firebaseConfig from "./config/firebase";
import user from "./store/user";
import "firebase/auth";
import "firebase/database";

















import "./assets/ress.min.css"
import "./assets/reset.scss"
// import "./assets/null.scss"



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
store,user,
  render: h => h(App)
}).$mount('#app')
    // }
  // }


// )
// 
