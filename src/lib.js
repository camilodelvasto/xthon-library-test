import Vue from 'vue';
import AppHeader from '@/components/RideForGood/AppHeader.vue';
import AppBanner from '@/components/RideForGood/AppBanner.vue';

const Components = {
  AppHeader,
  AppBanner
}

Object.keys(Components).forEach((name) => {
  Vue.component(name, filters[name]);
});

export default Components
