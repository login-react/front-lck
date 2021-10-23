/*
 * @Description:
 * @Author: taimin_zhou
 * @Date: 2021-10-20 20:25:15
 * @LastEditTime: 2021-10-21 13:59:12
 * @LastEditors: taimin_zhou
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Design from "@/views/Design";
import Test from "@/views/ss";
Vue.use(VueRouter);

const routes = [
  {
    path: "/design",
    name: "Design",
    component: Design,
  },
  {
    path: "/manage",
    name: "Manage",
    component: () => import(/* webpackChunkName: "manage" */ "../views/Manage"),
    children: [
      {
        path: "a",
        name: "Manage",
        component: Test,
      },
    ],
  },
  {
    path: "/manage/login",
    name: "manage-login",
    component: () => import(/* webpackChunkName: "manage-login" */ "../views/manage-login"),
  },
  {
    path: "/viewhub",
    name: "Viewhub",
    component: () =>
      import(/* webpackChunkName: "ViewHub" */ "../views/ViewHub"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
