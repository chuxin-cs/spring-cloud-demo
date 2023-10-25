import { asyncRoutes, constantRoutes } from "@/router/modules";

export default {
  namespace: true,
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
    generateRoutes({ commit }, roles) {
      return new Promise((resolve) => {
        commit("set_routes", asyncRoutes);
        resolve(accessedRoutes);
      });
    },
  },
};
