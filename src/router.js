import { createRouter, createWebHistory } from 'vue-router';
import Navigation from './page/Navigation.vue';
import store from './store/index';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'nav',
      path: '/',
      component: Navigation,
      children: [
        {
          name: 'home',
          path: '/home',
          component: () => import('./page/HomeView.vue'),
        },
        {
          name: 'about',
          path: '/about',
          redirect: '/introduction',
          component: () => import('./page/AboutMore.vue'),
          children: [
            {
              name: 'introduction',
              path: '/introduction',
              component: () => import('./page/sideBar/Introduction.vue'),
            },
            {
              name: 'author',
              path: '/author',
              component: () => import('./page/sideBar/Author.vue'),
            },
            {
              name: 'background',
              path: '/background',
              component: () => import('./page/sideBar/BackGround.vue'),
            },
          ],
        },
        {
          name: 'login',
          path: '/login',
          component: () => import('./page/Login.vue'),
        },
        {
          name: 'personal',
          path: '/personal',
          component: () => import('./page/PersonalData.vue'),
          beforeEnter(to, from, next) {
            if (store.state.formIsValid) {
              next();
            } else {
              window.alert('請先登錄');
              next({ name: 'login' });
            }
          },
        },
      ],
    },
    {
      name: 'notFound',
      path: '/:notFound(.*)',
      component: () => import('./page/NotFound.vue'),
    },
  ],
});

export default router;
