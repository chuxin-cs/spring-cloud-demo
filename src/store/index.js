import Vue from "vue";
import Vuex from "vuex";
import getters from "@/store/getters";

Vue.use(Vuex);

function getModules() {
    const modulesFiles = require.context('./modules', true, /\.js$/)
    const modules = modulesFiles.keys().reduce((modules, modulePath) => {
        const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
        const value = modulesFiles(modulePath)
        modules[moduleName] = value.default
        return modules
    }, {})
    return modules || {}
}

export function createStore() {
    return new Vuex.Store({
        getters,
        modules: getModules(),
    })
}

export default createStore;
