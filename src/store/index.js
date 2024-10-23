import Vue from "vue";
import Vuex from "vuex";
// 系统模块
import user from "./modules/system/user";
import globalConfig from "./modules/system/globalConfig";

// 业务模块

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    // 系统
    user,
    globalConfig,

    // 业务
  },
});

export default store;
