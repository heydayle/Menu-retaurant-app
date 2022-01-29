import Vue from "vue";
import App from "@/App.vue";
import "@/assets/tailwind.css";
import router from "@/router";
import vuetify from "@/plugins/vuetify";

import "@/filters";

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
