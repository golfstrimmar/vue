import firebase from "firebase";


//---- Максим--------
// https://www.youtube.com/watch?v=zozB9gEEM0U&list=PLu_62Q68DvTqmSjoY-3uPtJAXmT5WWMy1&index=2&ab_channel=LearnProgrammingTogether
// export default {
//   state: {
//     user:{
//         isAuthenticated: false,
//         uid: null
//     }
  
//   },
//   mutations: {
//     SET_USER(state, payload) {
//       state.user.isAuthenticated = true;
//       state.user.uid = payload;
//     },
//   },
//   actions: {
//     SIGNEUP({ commit }, payload) {
//       commit("SET_PROCESSING", true),
//         firebase
//           .auth()
//           .createUserWithEmailAndPassword(payload.email, payload.password)
//           .then((user) => {
//             commit("SET_USER", user.uid), commit("SET_PROCESSING", false);
//           })
//           .catch((error) => {
//             commit("SET_PROCESSING", false);
//             commit("SET_ERROR", error.message);
//           });
//     },
//   },
//   getters: {
//     isUserAuthenticated: (state) => state.user.isAuthenticated
//   },
// };


// --------jack -----------
// https://www.youtube.com/watch?v=DlXSA3_lSX4&ab_channel=JackCoder

export default {
  state: {
    user: null
  
  },
  mutations: {
  
  },
  actions: {
   async registerUser ({ commit }, {email,password}){
     const user = await firebase.auth().createUserWithEmailAndPassword(email,password)
     console.log(user)
   }
   
  },
  getters: {
    user: (state) => state.user,
    user: (state) => state.user !=null,
  },
};