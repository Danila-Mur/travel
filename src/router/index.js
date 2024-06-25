import Vue from 'vue';
import VueRouter from 'vue-router';

import HeroView from '@/views/HeroView.vue';
import HeroItemView from '@/views/HeroItemView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: HeroView,
  },
  {
    name: 'card',
    path: '/card/:id',
    component: HeroItemView,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
