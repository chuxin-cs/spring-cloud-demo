import {
    navigate, reLaunch, redirect, switchTab, back
} from "./index.js";


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

    /**
     *  navigate
     */
    push(key, options = {}) {
        return this.handleRouteAction(navigate, key, options);
    }

    /**
     *  back
     */
    back(key, options = {}) {
        return this.handleRouteAction(back, key, options);
    }

    /**
     *  reLaunch
     */
    replace(key, options = {}) {
        return this.handleRouteAction(reLaunch, key, options);
    }

    /**
     *  redirect
     */
    redirect(key, options = {}) {
        return this.handleRouteAction(redirect, key, options);
    }

    /**
     *  switchTab
     */
    switchTab(key, options = {}) {
        return this.handleRouteAction(switchTab, key, options);
    }

    /**
     *  公共方法，处理路由操作
     */
    handleRouteAction(action, key, options = {}) {
        const route = this.get(key);
        if (!route) {
            let error_msg = `Route with key "${key}" not found.`;
            console.error(error_msg);
            return Promise.reject(error_msg);
        }

        return action({...(options || {}), url: route.path});
    }
}

export function createRouter(options) {
    return new ChuXinRouter(options);
}

export default ChuXinRouter;
