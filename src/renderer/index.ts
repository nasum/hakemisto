import Vue from "vue";
import VueRouter from "vue-router";
import ElementUI from "element-ui";
import locale from "element-ui/lib/locale/lang/ja";
import "normalize.css";
import "element-ui/lib/theme-chalk/index.css";

import routes from "./route";
import store from "./store/index";

import Default from "./components/layouts/default.vue";

const router = new VueRouter({
  routes
});

Vue.use(VueRouter)
Vue.use(ElementUI, { locale });

new Vue({
  render: h => h(Default),
  store,
  router
}).$mount("#app");
