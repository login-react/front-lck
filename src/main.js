/*
 * @Description:
 * @Author: taimin_zhou
 * @Date: 2021-10-20 20:25:15
 * @LastEditTime: 2021-10-22 10:55:33
 * @LastEditors: taimin_zhou
 */
import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import axios from 'axios'
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "element-ui/lib/theme-chalk/index.css";
Vue.config.productionTip = false;
Vue.use(ElementUI, { size: "small", zIndex: 3000 });
Vue.prototype.$axios = axios
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
