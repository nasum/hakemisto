import Vue from "vue";
import VueRouter from "vue-router";

import Top from "@renderer/components/pages/Top.vue";
import History from "@renderer/components/pages/History.vue";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      component: Top
    },
    {
      path: "/history",
      component: History
    }
  ]
});
