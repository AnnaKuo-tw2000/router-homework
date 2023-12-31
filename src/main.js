import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js';
import store from './store/index.js';
import './assets/reset.css';
import Navigation from './page/Navigation.vue';

const app = createApp(App);
app.use(router);
app.use(store);
app.component('navigation', Navigation);
app.mount('#app');
