import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Slokas from '@/components/Slokas';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/',
      name: 'Slokas',
      component: Slokas,
    },
  ],
});
