import Vue from 'vue';
import AppHeaderx from '@/components/RideForGood/AppHeader.vue';
import AppBanner from '@/components/RideForGood/AppBanner.vue';

const Components = {
  AppHeaderx,
  AppBanner
}

Object.keys(Components).forEach((name) => {
  Vue.component(name, filters[name]);
});

export default Components
