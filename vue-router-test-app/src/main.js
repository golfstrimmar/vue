

import Vue from "vue";
import App from "@/App.vue";
import VueRouter from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Board from "@/components/Board";		

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    component: HelloWorld,
  },
  {
    path: "/board",
    component: {
      render: (h) => h("div", ["Board Page", h("router-view")]),
    },
    children: [
      {
        path: '/board/:id',
        component: Board,
      }
    ]
  },
];		

const router = new VueRouter({
  routes,
  mode: "history",
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");		