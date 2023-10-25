import Cookies from "js-cookie";

export default {
  namespace: true,
  state: {
    sidebar: {
      opened: Cookies.get("sidebarStatus")
        ? !!+Cookies.get("sidebarStatus")
        : true,
      withoutAnimation: false,
    },
    device: "desktop",
    size: Cookies.get("size") || "medium",
  },
  mutations: {},
  actions: {},
};
