import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    photos: [],
  },

  mutations: {},

  actions: {
    async fetchPosts(ctx) {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/photos?_limit=10"
      );
      const photos = await res.json();
      ctx.commit("photos", photos);
    },
  },

  getters: {
    photos(state) {
      return state.photos;
    },
  },
});