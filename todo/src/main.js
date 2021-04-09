import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/messaging";
import 'materialize-css/dist/js/materialize.min.js'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
created(){
    var firebaseConfig = {
      apiKey: "AIzaSyDIAFBzSNwWbcmZzfpi2qDAyT9rCWurKsg",
      authDomain: "todo-d39aa.firebaseapp.com",
      projectId: "todo-d39aa",
      storageBucket: "todo-d39aa.appspot.com",
      messagingSenderId: "467591186146",
      appId: "1:467591186146:web:277372e312c5b4d5f940bb",
    };
    firebase.initializeApp(firebaseConfig);
}
}).$mount("#app");
