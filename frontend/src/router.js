import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import { login } from './services/auth';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/profile',
      name: 'Profile',
      // route level code-splitting
      // this generates a separate chunk (profile.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "profile" */ './components/Profile.vue'),
    },
    {
      path: '/login',
      name: 'Login',
      // route level code-splitting
      // this generates a separate chunk (login.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "login" */ './components/Login.vue'),
    },
    {
      path: '/register',
      name: 'Register',
      // route level code-splitting
      // this generates a separate chunk (register.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "register" */ './components/Register.vue'),
    },
    {
      path: '*',
      redirect: '/login',
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.fullPath === '/profile' && !localStorage.usertoken) { next('/login'); }

  if (to.fullPath === '/login' && localStorage.usertoken) { next('/profile'); }

  if (localStorage.usertoken) {
    login(localStorage.usertoken);
  }

  next();
});

export default router;
