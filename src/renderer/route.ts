import Vue from "vue";
import VueRouter from "vue-router";

import Explorer from "@renderer/components/pages/Explorer.vue";
import History from "@renderer/components/pages/History.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/explorer",
      component: Explorer,
      children: [{
        path: "*",
        component: Explorer
      }]
    },
    {
      path: "/history",
      component: History
    }
  ]
});

export default router