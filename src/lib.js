import Vue from 'vue';
import App from './App.vue';
import AppHeaderx from '@/components/RideForGood/AppHeaderx.vue';
import Datetime from 'vue-datetime';

import router from './router';
import store from './store';
import './registerServiceWorker';
import * as filters from './util/filters.js';
import SmoothScroll from '@/components/plugins/smoothScroll';
import 'vue-datetime/dist/vue-datetime.css';
Vue.config.productionTip = false;

Vue.use(Datetime);

// register global utility filters.
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
});

Vue.use(SmoothScroll);


const Components = {
  AppHeaderx
}

Object.keys(Components).forEach((name) => {
  Vue.component(name, filters[name]);
});

export default new Vue({
  router,
  store,
  render: h => h(App),
})
