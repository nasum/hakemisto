import Vue from "vue";
import VueRouter from "vue-router";

import Explorer from "@renderer/components/pages/explorer/Index.vue";
import History from "@renderer/components/pages/history/Index.vue";
import Setting from "@renderer/components/pages/setting/Index.vue";
import DefaultApplication from "@renderer/components/pages/setting/DefaultApplication.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/explorer",
      component: Explorer,
      children: [
        {
          path: "*",
          component: Explorer
        }
      ]
    },
    {
      path: "/history",
      component: History
    },
    {
      path: "/setting",
      component: Setting,
      children: [
        {
          path: "default_application",
          name: "default_application",
          component: DefaultApplication
        }
      ]
    }
  ]
});

export default router;
