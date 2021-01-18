import Vue from "vue";
import App from "./App.vue";
import VueResource from "vue-resource";
import { MdButton, MdContent, MdTabs } from "vue-material/dist/components";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";
import vuetify from "./plugins/vuetify";
import VueRouter from "vue-router";

import Users from "./components/Users.vue";
import Flights from "./components/Flights.vue";

const routes = [
  { path: "/", component: App },
  { path: "/Users", component: Users },
  { path: "/Flights", component: Flights },
];

const router = new VueRouter({
  routes,
});

Vue.use(VueRouter);
Vue.use(MdButton);
Vue.use(MdContent);
Vue.use(MdTabs);
Vue.use(VueResource);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
