import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { router } from "./router/router";
import PhosphorIcons from "@phosphor-icons/vue";
const app = createApp(App);
app.use(PhosphorIcons);
app.use(router);

app.directive("select-on-focus", {
  mounted(el) {
    el.addEventListener("focus", () => {
      el.select();
    });
  },
});

app.mount("#app");
