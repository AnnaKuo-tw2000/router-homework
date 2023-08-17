import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      formIsValid: false,
    };
  },
  mutations: {
    isLogin(state) {
      state.formIsValid = true;
    },
    isLogout(state) {
      state.formIsValid = false;
    },
  },
  getters: {},
  actions: {},
  modules: {},
});

export default store;
