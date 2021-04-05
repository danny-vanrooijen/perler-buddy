import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";

import { FontAwesomeIcon } from "@/plugins/font-awesome.js";
import "./assets/tailwind.css";
import "./assets/index.css";

createApp(App)
  .use(store)
  .use(router)
  .component("fa", FontAwesomeIcon)
  .mount("#app");
