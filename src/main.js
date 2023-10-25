import Vue from "vue";
import App from "./App.vue";
import {createStore} from "./store";
import {createRouter} from "./router";
import {loadPlugins} from "@/plugins";

// load
loadPlugins(Vue);

// css
import "normalize.css";
import 'element-ui/lib/theme-chalk/index.css';
import "@/styles/index.scss";

// 消除警告提示
Vue.config.productionTip = false;

function createApp() {
    return new Vue({
        router: createRouter(), store: createStore(), render: (h) => h(App),
    })
}

createApp().$mount("#app");
