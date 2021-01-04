import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default{
  state: {
    photos: [],
  },

  mutations: {
    updatePhotos(state, payload) {
      state.photos = payload;
    },
  },

  actions: {
    async fetchPhotos(ctx) {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/photos?_limit=10"
      );
      const photos = await res.json();
      ctx.commit("updatePhotos", photos);
    },
    },



  getters: {
    getPhotos(state) {
      return state.photos;
    },
  },
};