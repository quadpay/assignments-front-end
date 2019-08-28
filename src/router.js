import Vue from 'vue';
import Router from 'vue-router';
import LoginView from './views/LoginView.vue';
import ConfirmOrderView from './views/ConfirmOrderView.vue';
import SuccessfulOrderView from './views/SuccessfulOrderView.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/confirm-order',
      name: 'confirm-order',
      component: ConfirmOrderView
    },
    {
      path: '/successful-order',
      name: 'successful-order',
      component: SuccessfulOrderView
    },
  ]
})
