import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    cart: [],
  },
  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products;
    },
    SET_CART: (state, product) => {
        if (state.cart.length) {
          let IsProductExists = false;

state.cart.map(function(item){
          if (item.article === product.article) {
            IsProductExists = true;
            item.quantity++;
          }
          
}
)

if (!IsProductExists) {
state.cart.push(product);
}
     
        }else{
          state.cart.push(product);
        }
    },
    DELETE_FROM_CART: (state, index) => {
      state.cart.splice(index, 1);
    },
  },
  actions: {
    GET_PRODUCTS_FRON_API({ commit }) {
      return axios("http://localhost:3000/products", {
        method: "GET",
      })
        .then((products) => {
          commit("SET_PRODUCTS_TO_STATE", products.data);
          return products;
        })
        .catch((error) => {
          return error;
        });
    },
    ADD_TO_CART({ commit }, product) {
      commit("SET_CART", product);
    },
    DELETE_FROM_CART({ commit }, index) {
      commit("DELETE_FROM_CART", index);
    },
  },
  modules: {},
  getters: {
    PRODUCTS(state) {
      return state.products;
    },
    CART(state) {
      return state.cart;
    },
  },
});
