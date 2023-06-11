import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { router } from "./router/router";
import PhosphorIcons from "@phosphor-icons/vue";
const app = createApp(App);
app.use(PhosphorIcons);
app.use(router);
app.mount("#app");
