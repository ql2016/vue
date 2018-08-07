import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Test from '@/components/Test';
import Trial from '@/components/Trial';
import shoppingcart from '@/components/shoppingcart';

Vue.use(Router);
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/test',
      name: 'Test',
      component: Test,
    },
    {
      path: '/trial',
      name: 'Trial',
      component: Trial,
    },
    {
      path: '/shoppingcart',
      name: 'shoppingcart',
      component: shoppingcart,
    }
  ],
});
