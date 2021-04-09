import firebase from 'firebase/app'

export default {
  state: {
    user: null,
  },
  mutations: {},
  actions: {
    // асинхронное действие
    async registerUser({commit}, {email, password}){
      const user = firebase
        .auth()
        .createUserWithEmailAndPassword(email, password); 
        console.log(user);
    }
  },
  getters: {
    user(state){
      return state.user
    },
    checkUser(state){
      // выдает false или true в зависимости есть юзер или нет
        return state.user !== null ;
    }
  },
};