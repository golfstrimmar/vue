import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cards: [
      {
        title: "first",
        id: 1,
        description: "описание 1",
        completed: false,
      },
      {
        title: "second",
        id: 2,
        description: "описание 2",
        completed: false,
      },
    ],
  },

  mutations: {
    // payload это карточка
    NewCard(state, payload) {
      state.cards.push(payload);
      payload.id = Math.random();
    },
  },

  actions: {
    NewCard({ commit }, payload) {
      commit("NewCard", payload);
    },
  },

  getters: {
    cards(state) {
      return state.cards;
    },
  },
});