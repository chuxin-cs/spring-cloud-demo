import Vue from "vue";
import App from "./App";
import store from "./common/store/index.js";

// uni-app 兼容 API
import "./uni.promisify.adaptor";
// uni-app 设置为 app
App.mpType = "app";
// 禁用生产报错提示
Vue.config.productionTip = false;


// 全局css
import "./chuxin/styles/common.css";
// 引入 uview 组件库
import uView from "uview-ui";
Vue.use(uView);

// 实例化 Vue
new Vue({ ...App, store }).$mount();
