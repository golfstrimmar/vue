import firebase from "firebase";


export default {

  state: {
    user: {
      isAuthenticated: false,
      uid: null
    }
  },
  mutations: {},
  actions: {
    signUp({commit},payload){
firebase
  .auth()
  .createUserWithEmailAndPassword(payload.form.email, payload.form.password)
  .then(user => {
    console.log(user);
  })
  .catch(error => {
    console.log(error);
    var errorCode = error.code;
    var errorMessage = error.message;
  });
    }
  }
};