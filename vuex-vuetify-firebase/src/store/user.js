import { JumbotronPlugin } from "bootstrap-vue";
import firebase from "firebase";


//---- Максим--------
// https://www.youtube.com/watch?v=zozB9gEEM0U&list=PLu_62Q68DvTqmSjoY-3uPtJAXmT5WWMy1&index=2&ab_channel=LearnProgrammingTogether
export default {
  state: {
    user:{
        isAuthenticated: false,
        uid: null
    }
  
  },
  mutations: {
    // на этой мутации перекидываются переменная индикации авторизации в  true . а главное- uid
    SET_USER(state, payload) {
      state.user.isAuthenticated = true;
      state.user.uid = payload;
    },
  },
  actions: {
    SIGNEUP({ commit }, payload) {
                                  // для того, чтобы сдлать недоступной кнопку зарегистрирваться после ввода очередного пользователя нужно отследить
                                  // начало процесса ввода. для этого сделана мутация SET_PROCESSING на general.js которая загоняет в 
                                  // хранилище  переменную processing=true которая вначале объявлена false. так же ее нужно перевести на then и error в false
                                  // здесь это все комитится
                                   commit("SET_PROCESSING", true),
                                    
                                   
                                   // отправка на firebase email  и пароль
                                     // then обрабатывает после успешной отправки
                                     // catch обрабатывает ошибку
                                     firebase
                                       .auth()
                                       .createUserWithEmailAndPassword(
                                         payload.email,
                                         payload.password
                                       )

                                       .then((user) => {
                                         console.log(user);
                                         commit("SET_USER", user.uid), commit("SET_PROCESSING", false);
                                       })

                                       .catch((error) => {
                                         console.log(error);
                                         commit("SET_PROCESSING", false);
                                         commit("SET_ERROR", error.message);
                                       });
                                 },
    SIGNEIN({ commit }, payload) {
                                   commit("SET_PROCESSING", true),
                                     firebase
                                       .auth()
                                       .signInWithEmailAndPassword(
                                         payload.email,
                                         payload.password
                                       )

                                       .then((user) => {
                                         console.log(user);
                                         commit("SET_USER", user.uid),
                                           commit("SET_PROCESSING", false);
                                       })

                                       .catch((error) => {
                                         console.log(error);
                                         commit("SET_PROCESSING", false);
                                         commit("SET_ERROR", error.message);
                                       });
                                 },
  },
  getters: {
    isAuthenticated: (state) => state.user.isAuthenticated
  },
};

