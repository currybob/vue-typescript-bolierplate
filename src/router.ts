import Vue from 'vue';
import Router from 'vue-router';
import { Main } from './views';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // when build
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});
