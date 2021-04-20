import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
import axios from "axios";
import router from "../router/index";

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    todo: "",
  },
  mutations: {
    todoUpdate(state, payload) {
      state.todo = payload;
    },
  },
  actions: {
    async login({ commit }, { todo }) {
      const responseTodo = await axios.get(
        "https://stark-refuge-16364.herokuapp.com/api/todolist",
        {
          params: {
            todo: todo,
          },
        }
      );
      commit("todo", responseTodo.data.data[0]);
      router.replace("/");
    },
  },
  modules: {
  }
})
