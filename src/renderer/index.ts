import Vue from 'vue'
import ElementUI from 'element-ui';
import 'normalize.css'
import 'element-ui/lib/theme-chalk/index.css';

import Main from '@renderer/components/main.vue'

Vue.use(ElementUI);

new Vue({
  render: h => h(Main),
}).$mount('#app')