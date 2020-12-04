import Vue from "vue";
import Vuex from "vuex";
import userModule from './store/user';
import userGeneral from './store/general';


Vue.use(Vuex);

export default new vuex.Store({
  modules: {
    userModule,
    userGeneral
  }
});
