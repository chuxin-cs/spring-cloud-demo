import { platformLogin } from "./service/index.js";
import { defaultAcatar } from "./service/model.js";
import { setToken, removeToken } from "@/chuxin/utils/auth.js";
import { login, getUserInfo, setUserInfo } from "./service/api.js";
import { getUserInfoModel, getLoginInfoModel } from "./service/model.js";
import {
  getUserInfo as getUserInfoStorage,
  setUserInfo as setUserInfoStorage,
} from "./service/storage.js";

export default {
  namespaced: true,
  state: {
    // 用户信息
    userInfo: {
      ...getUserInfoModel(),
      ...getUserInfoStorage(),
    },
    // 登录信息
    loginInfo: getLoginInfoModel(),
  },
  getters: {
    token(state) {
      return state.loginInfo.access_token || "";
    },
  },
  mutations: {
    // 更新用户信息
    updateUserInfo(state, userInfo) {
      state.userInfo = {
        ...state.userInfo,
        ...userInfo,
      };
      setUserInfoStorage(state.userInfo);
    },
    // 重置用户信息
    resetUserInfo(state) {
      state.userInfo = { ...getUserInfoModel() };
      setUserInfoStorage(state.userInfo);
    },
    // 更新登录信息
    updateLoginInfo(state, loginInfo) {
      state.loginInfo = {
        ...state.loginInfo,
        ...loginInfo,
      };
      setToken(state.loginInfo.access_token);
    },
    // 重置登录信息
    resetLoginInfo(state) {
      state.loginInfo = { ...getLoginInfoModel() };
      setToken(state.loginInfo.access_token);
    },
  },
  actions: {
    // 获取用户信息
    getUserInfo({ commit, state }) {
      getUserInfo({}).then((res) => {
        console.info(res, "获取用户信息");
      });
    },
    // 设置用户信息
    setUserInfo({ state }, params) {
      let { nickname, avatar, userId } = state?.userInfo || {};
      return setUserInfo({ nickname, avatar, userId, ...params });
    },
    // 用户登录
    handleLogin({ commit }) {
      return new Promise(async (resolve) => {
        // wx.login 进行微信端登录
        const detail = await platformLogin();
        const code = detail?.code || "";
        // 调用后端进行登录
        const res = await login(code);
        // 更新用户信息
        commit("updateUserInfo", {
          openid: res?.openid || "",
          nickname: res?.nickname || "",
          avatar: res?.avatar || defaultAcatar,
          userId: res?.id || "",
        });
        // 更新登录信息
        commit("updateLoginInfo", {
          access_token: res?.access_token || "",
        });
        // 提供给外部
        resolve(res);
      });
    },
    // 退出登录
    handleLogOut({ commit }) {
      // 1.删除缓存
      // removeUserInfo();
      removeToken();
      // 2.重置状态
      // commit("resetUserInfo");
      commit("resetLoginInfo");
    },
  },
};
