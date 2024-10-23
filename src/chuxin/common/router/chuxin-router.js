import {
    navigate, reLaunch, redirect, switchTab, back
} from "./index.js";

const navigateMap = {
    1: navigate,
    2: reLaunch,
    3: redirect,
    4: switchTab,
    5: back,
    "navigate": navigate,
    "reLaunch": reLaunch,
    "redirect": redirect,
    "switchTab": switchTab,
    "back": back
}

class ChuXinRouter {
    constructor(options) {
        this.routes = options?.routes || [];
        this.routeMap = this.loadRouterConfig(this.routes);
    }

    // 获取路由
    get(key) {
        if (this.has(key)) {
            return this.routeMap[key];
        }
        return null;
    }

    // 检查是否存在某个路由配置
    has(key) {
        return Boolean(this.routeMap[key]);
    }

    // 加载路由配置
    loadRouterConfig(routes) {
        return (routes || []).reduce((prev, item) => {
            prev[item.key] = item;
            return prev;
        }, {});
    }

    push(key, options = {}, navigateCallback) {
        const route = this.get(key);
        if (!route) {
            let error_msg = `Route with key "${key}" not found.`
            console.error(error_msg);
            return Promise.reject(error_msg);
        }
        // 如果不存在 默认赋值为 navigate
        if (!navigateCallback) navigateCallback = navigate;
        //
        if (typeof navigateCallback === 'string') {
            navigateCallback = navigateMap[navigateCallback] || navigate;
        }
        // 传入的函数 暂时先不处理
        if (typeof navigateCallback === 'function') {
        }

        return navigateCallback({
            ...(options || {}), url: route.path,
        });
    }

    back(key, options = {}) {
        const route = this.get(key);
        if (!route) {
            let error_msg = `Route with key "${key}" not found.`
            console.error(error_msg);
            return Promise.reject(error_msg);
        }
        return back({
            ...(options || {}), url: route.path,
        });
    }

    replace(key, options = {}) {
        const route = this.get(key);
        if (!route) {
            let error_msg = `Route with key "${key}" not found.`
            console.error(error_msg);
            return Promise.reject(error_msg);
        }

        return reLaunch({
            ...(options || {}), url: route.path,
        });
    }

}

export function createRouter(options) {
    return new ChuXinRouter(options);
}

export default ChuXinRouter;
