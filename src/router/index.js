import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      hidden: true,
    },
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
    path: "/parent",
    name: "parent",
    component: () => import("@/views/ParentView.vue"),
    meta: {
      title: "父组件演示使用样式和事件",
    },
  },
  {
    path: "/style-jsx",
    name: "styleJsx",
    component: () => import("@/views/styleJsx/StyleJsx"),
    meta: {
      title: "jsx样式演示",
      hidden: true,
    },
  },
  {
    path: "/list-demo",
    name: "list-demo",
    component: () => import("@/views/ListJsx"),
    meta: {
      title: "jsx的列表样式",
    },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
