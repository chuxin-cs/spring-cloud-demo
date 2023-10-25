import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./modules";

Vue.use(VueRouter);

export function createRouter() {
    return new VueRouter({
        routes,
        scrollBehavior: () => ({y: 0}),
    })
}

export default createRouter;
