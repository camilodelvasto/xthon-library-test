import Vue from 'vue';
import AppHeaderx from '@/components/RideForGood/AppHeaderx.vue';

const Components = {
  AppHeaderx
}

Object.keys(Components).forEach((name) => {
  Vue.component(name, filters[name]);
});

export default Components
