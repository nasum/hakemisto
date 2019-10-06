import Vue from "vue";
import VueRouter from "vue-router";

import Explorer from "@renderer/components/pages/Explorer.vue";
import History from "@renderer/components/pages/History.vue";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      component: Explorer
    },
    {
      path: "/history",
      component: History
    }
  ]
});
