import Vue from 'vue'
import Vuex from 'vuex'
import user from "./user";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        options: [],
        options1: []
    },
    mutations: {
        newOption(state, payload) {
            if (payload.category == "111") {
                state.options.push(payload);
            } else {
                if (payload.category == "222") {
                    state.options1.push(payload);
                } else {
                }
            }
            // category = "s-baby-3-5-debut-solo";
        }
    },
    actions: {
        newOption({ commit }, payload) {
            commit("newOption", payload);
        }
    },
    getters: {
        options(state) {
            return state.options;
        },
        options1(state) {
            return state.options1;
        }
    },
    modules: {
        user
    }
});



