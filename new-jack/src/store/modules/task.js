export default {
  state: {
    tasks: [
      {
        id: "1",
        title: "Halk",
        discription: "best movie of all time",
        whatWatch: "Film",
        completed: false,
        editing: false,
      },
      {
        id: "2",
        title: "Svaty",
        discription: "the best TV series ever watched",
        whatWatch: "Serial",
        completed: false,
        editing: false,
      },
    ],
  },
  mutations: {
    newTask(state, payload){
      state.tasks.push(payload);
    }
  },
  actions: {
    // объект  который принимает свойство commit и второй параметр сам task
    newTask({ commit }, payload) {
      commit("newTask", payload);
    },
  },
  getters: {
    tasks(state) {
      return state.tasks;
    },
  },
};