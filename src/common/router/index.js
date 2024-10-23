import {
    reLaunch, navigate, redirect, switchTab
} from "@/chuxin/common/router";
import routes from "./routes.js"
import {createRouter} from "@/chuxin/common/router/chuxin-router";

const router = createRouter({routes})

/**
 * 首页
 */
export function goIndex(options) {
    const {path} = router.get("index") || {};
    return reLaunch({
        ...(options || {}), url: path,
    });
}
