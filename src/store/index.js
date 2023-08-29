import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      formIsValid: sessionStorage.getItem('isLogin'),
    };
  },
  mutations: {
    isLogin(state) {
      state.formIsValid = true;
      sessionStorage.setItem('isLogin', JSON.stringify(true));
    },
    isLogout(state) {
      state.formIsValid = false;
      sessionStorage.setItem('isLogin', JSON.stringify(false));
    },
  },
  getters: {},
  actions: {},
  modules: {},
});

export default store;
