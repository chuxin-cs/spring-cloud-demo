import {appendParamsToUrl, promisic} from "@/chuxin/utils";
import {
    navigateTo, redirectTo, reLaunch as _reLaunch, switchTab as _switchTab, navigateBack,
} from "@/chuxin/uni";


export const navigate = (options) => {
    return _navigate(navigateTo, options);
};

export const redirect = (options) => {
    return _navigate(redirectTo, options);
};

export const reLaunch = (options) => {
    return _navigate(_reLaunch, options);
};

export const switchTab = (options) => {
    return _navigate(_switchTab, options);
};

export const back = (options) => {
    return new Promise((resolve, reject) => {
        promisic(navigateBack)({
            complete: options.complete || (() => {
            }), ...options, success: resolve, fail: reject,
        });
    });
};

/**
 * 私有方法，设计之初不是提供给外部使用的~
 */
function _navigate(callback, options) {
    return new Promise((resolve, reject) => {
        // 获取 url
        let url = options?.url || "";
        // 为了方便 用户可能传入 params 或者 query 此处进行容错处理
        let _query = {
            ...(options?.params ||{}),
            ...(options?.query ||{})
        };

        // 处理参数
        if (_query) {
            url = appendParamsToUrl(url, _query);
            // 删除
            ["query", "params"].forEach(key => delete options[key])
        }

        promisic(navigateTo)({
            complete: options.complete || (() => {
            }), ...options, url, success: resolve, fail: reject,
        });
    });
}
