import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "./element-variables.scss";
import {store} from "./store";
import VueGoogleMaps from "@fawmi/vue-google-maps";

const app = createApp(App);

app.use(ElementPlus);
app.use(VueGoogleMaps, {
    load: {
        key: import.meta.env.VITE_GOOGLE_MAPS_TOKEN ?? ""
    }
});
app.use(store);
app.mount("#app");
