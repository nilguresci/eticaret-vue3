import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./store/store.js";
import "bootstrap/dist/css/bootstrap.min.css";

import "./assets/main.css";

const app = createApp(App);

app.use(router, store);

app.mount("#app");

import "bootstrap/dist/js/bootstrap.js";
