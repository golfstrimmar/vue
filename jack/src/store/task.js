export default {
  // хранилище
  state: {
    tasks: [
      {
        id: 1,
        title: "GrowthBusters: Hooked on Growth",
        description:
          "I directed this documentary challenging the myths linking growth with prosperity and fulfillment. It explores how our beliefs about economic and consumption",
        whatWatch: "Film",
        completed: false,
        editing: false,
      },
      {
        id: 2,
        title: "Game of thrones",
        description: "Best serials",
        whatWatch: "Serial",
        completed: true,
        editing: false,
      },
    ],
  },

  mutations: {
    // payload это task
    newTask(state, payload){
      state.tasks.push(payload);
      payload.id  = Math.random()
    }
  },

  actions: {
    newTask({ commit }, payload) {
      commit("newTask", payload);
    },
  },

  getters: {
    // от слова берем
    tasks(state) {
      // обращаемся к текущему стейту и возвращаем таски
      return state.tasks;
    },
    taskCompleted(state){
      // отфильтруются только таски в состоянии complited
      return state.tasks.filter(
        task => {
          return task.completed === true
        }
      )
    },
    taskNotCompleted(state){
      // отфильтруются только таски в состоянии  кроме complited
      return state.tasks.filter(
        task => {
          return task.completed === false
        }
      )
    }
  },
};