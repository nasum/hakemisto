import Vue from 'vue'
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/ja'
import 'normalize.css'
import 'element-ui/lib/theme-chalk/index.css';

import store from './store/index'

import Main from './components/pages/main.vue'

Vue.use(ElementUI, { locale });

new Vue({
  render: h => h(Main),
  store
}).$mount('#app')