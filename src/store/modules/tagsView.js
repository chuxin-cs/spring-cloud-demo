export default {
  namespaced: true,
  state: {
    visitedViews: [],
    cachedViews: [],
  },
  mutations: {
    DEL_OTHERS_VISITED_VIEWS: (state, view) => {
      state.visitedViews = state.visitedViews.filter((v) => {
        return v.meta.affix || v.path === view.path;
      });
    },
    DEL_OTHERS_CACHED_VIEWS: (state, view) => {
      const index = state.cachedViews.indexOf(view.name);
      if (index > -1) {
        state.cachedViews = state.cachedViews.slice(index, index + 1);
      } else {
        // if index = -1, there is no cached tags
        state.cachedViews = [];
      }
    },
    UPDATE_VISITED_VIEW: (state, view) => {
      for (let v of state.visitedViews) {
        if (v.path === view.path) {
          v = Object.assign(v, view);
          break;
        }
      }
    },
  },
  actions: {
    delOthersViews({ dispatch, state }, view) {
      return new Promise((resolve) => {
        dispatch("delOthersVisitedViews", view);
        dispatch("delOthersCachedViews", view);
        resolve({
          visitedViews: [...state.visitedViews],
          cachedViews: [...state.cachedViews],
        });
      });
    },
    delOthersVisitedViews({ commit, state }, view) {
      return new Promise((resolve) => {
        commit("DEL_OTHERS_VISITED_VIEWS", view);
        resolve([...state.visitedViews]);
      });
    },
    delOthersCachedViews({ commit, state }, view) {
      return new Promise((resolve) => {
        commit("DEL_OTHERS_CACHED_VIEWS", view);
        resolve([...state.cachedViews]);
      });
    },
    updateVisitedView({ commit }, view) {
      commit("UPDATE_VISITED_VIEW", view);
    },
  },
};
