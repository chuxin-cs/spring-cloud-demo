import variables from "@/styles/element-variables.scss";
import { defaultSettings } from "@/config/layouts.js";
const { showSettings, tagsView, fixedHeader, sidebarLogo } = defaultSettings;

export default {
  namespace: true,
  state: {
    theme: variables.theme,
    showSettings: showSettings,
    tagsView: tagsView,
    fixedHeader: fixedHeader,
    sidebarLogo: sidebarLogo,
  },
  mutations: {},
  actions: {},
};
