import Vue from "vue";
import Router from "vue-router";
import store from "@/store";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import "@/assets/css/global.css";

Vue.config.productionTip = false;

Vue.use(Router);

const router = new Router({
  routes: [],
});

new Vue({
  store,
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
