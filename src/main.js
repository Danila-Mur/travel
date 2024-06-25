import Vue from 'vue';
import App from './App.vue';

import store from '@/store';
import router from '@/router';

Vue.config.productionTip = false;

import './assets/css/bootstrap.min.css';
import './assets/css/style.css';

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
