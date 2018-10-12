import Vue from 'vue';
const eventBus = new Vue();

export default {
  install(Vue: Function, options: object) {
    Vue.prototype.eventBus = eventBus;
  },
};
