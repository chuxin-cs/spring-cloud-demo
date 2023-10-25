import { asyncRoutes, constantRoutes } from "@/router/modules";

export default {
  namespaced: true,
  state: {
    routes: [],
    addRoutes: [],
  },
  mutations: {
    set_routes(state, routes) {
      state.addRoutes = routes;
      state.routes = [...constantRoutes, ...routes];
    },
  },
  actions: {
    generateRoutes({ commit }) {
      return new Promise((resolve) => {
        commit("set_routes", asyncRoutes);
        resolve(asyncRoutes);
      });
    },
  },
};
