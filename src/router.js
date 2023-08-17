import { createRouter, createWebHistory } from 'vue-router';
import Navigation from './page/Navigation.vue';
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
          component: () => import('./page/AboutMore.vue'),
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
