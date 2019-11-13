import Vue from "vue";
import ElementUI from "element-ui";
import locale from "element-ui/lib/locale/lang/ja";
import "normalize.css";
import "element-ui/lib/theme-chalk/index.css";

import router from "./route";
import store from "./store/index";

import Default from "./components/layouts/default.vue";

Vue.use(ElementUI, { locale });

new Vue({
  render: h => h(Default),
  store,
  router
}).$mount("#app");