import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    meta: {
      title: "关于",
    },
  },
  {
    path: "/style-jsx",
    name: "styleJsx",
    component: () => import("@/views/styleJsx/StyleJsx"),
    meta: {
      title: "jsx样式演示",
    },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
