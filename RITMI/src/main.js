import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import axios from "axios";
import 'materialize-css/dist/js/materialize.min.js';
import Vuelidate from "vuelidate";
// import Vuetify from "vuetify";
// import "vuetify/dist/vuetify.min.css";
// import "@mdi/font/css/materialdesignicons.min.css";
import firebase from "firebase";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";


// Vue.use(Vuetify);
Vue.use(Vuelidate);
Vue.prototype.axios = axios;
Vue.config.productionTip = false;



new Vue({
    router,
    store,
    // mdi,
    render: h => h(App),
    created() {
        var firebaseConfig = {
            apiKey: "AIzaSyC6ubqVcLDthy1rOvoy1eu_536poRcQsuc",
            authDomain: "ritmi-ddaa6.firebaseapp.com",
            projectId: "ritmi-ddaa6",
            storageBucket: "ritmi-ddaa6.appspot.com",
            messagingSenderId: "630113214836",
            appId: "1:630113214836:web:e2c89d8d70d66d715b0c21",
            measurementId: "G-RN4RNS62RN"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        firebase.analytics();
    }
}).$mount("#app");
  // }
// )



