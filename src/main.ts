import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { router } from "./router/router";
import PhosphorIcons from "@phosphor-icons/vue";
import Vue3TouchEvents from "vue3-touch-events";
import { install } from "./components/popables/modalSetup";

const app = createApp(App);
app.use(PhosphorIcons);
app.use(router);
app.use(Vue3TouchEvents);
app.use(install);

app.directive("select-on-focus", {
  mounted(el) {
    el.addEventListener("focus", () => {
      el.select();
    });
  },
});

app.mount("#app");
