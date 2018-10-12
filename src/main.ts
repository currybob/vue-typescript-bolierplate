import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { store } from './store';
import VueAxios from 'vue-axios';
import { eventBus, axios } from './plugins';

import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/ko';
import Element from 'element-ui';

Vue.use(eventBus);
Vue.use(VueAxios, axios);
Vue.use(Element, { locale });

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
