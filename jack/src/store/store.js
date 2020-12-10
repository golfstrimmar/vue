import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import task from "./task"
import tags from "./tags"

export default new Vuex.Store({
  modules: {
    task,
    tags,
  },
});


