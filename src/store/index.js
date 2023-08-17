import { createStore } from 'vuex';
import router from '../router';
const store = createStore({
  state() {
    return { formIsValid: false, userName: '', passWord: '', correct: false };
  },
  mutations: {
    isLogin(state) {
      if (state.userName === 'anna' && state.passWord === 'anna001114') {
        state.formIsValid = true;
        state.correct = false;
        // console.log(state.formIsValid);
        router.push({ name: 'home' });
      } else {
        state.formIsValid = false;
        state.correct = true;
        // console.log(state.formIsValid);
      }
    },
    switchButton(state) {
      if (state.formIsValid === false) {
        router.push({ name: 'login' });
      } else {
        state.formIsValid = false;
        // router.push({ name: 'login' });
      }
    },
  },
  getters: {},
  actions: {},
  modules: {},
});

export default store;
