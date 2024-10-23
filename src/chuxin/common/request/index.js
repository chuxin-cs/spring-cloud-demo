import { apiUrl } from "@/common/config/env.js";
import { promisic } from "@/common/utils/util.js";
import {
  request as _request,
  showToast,
  uploadFile as _uploadFile,
} from "@/common/api/index.js";
import { getToken, removeToken, removeRefreshToken } from "../auth/index.js";
import { removeUserInfo } from "@/store/modules/system/user/service/storage.js";
import store from "@/store"

const GET = "GET"; // get 枚举
const POST = "POST"; // post 枚举
let isLoggingIn = false; // 是否登录
let retryQueue = []; // 用于存储需要重新调用的请求
// 默认配置
const DEFAULT_CONFIG = {
  // 页头
  header: {},
  // 超时 (超时时间，单位 ms)
  timeout: 60000,
};

/**
 * Promise 版本的 request
 * @param {Object} options 请求配置
 */
export function request(options) {
  // token
  let _token = getToken();
  if (_token) {
    DEFAULT_CONFIG.header["Blade-Auth"] = `bearer ${_token}`;
  }

  // 当请求为 POST 请求时  data 传参则 "content-type" 设置为 "application/json"    params 则 "content-type" 设置为 "application/x-www-form-urlencoded"
  if (options.method === POST) {
    if (options.data) {
      DEFAULT_CONFIG.header["content-type"] = "application/json";
    }
    if (options.params) {
      DEFAULT_CONFIG.header["content-type"] =
        "application/x-www-form-urlencoded";
      options.data = options.params;
    }
  }

  return new Promise((resolve, reject) => {
    promisic(_request)({
      ...DEFAULT_CONFIG,
      ...(options || {}),
    })
      .then((res) => {
        const data = res?.data || {};
        const code = data.code;
        const msg = data.msg || "未知错误";

        if (code === 401) {
          // 删除token
          removeToken();
          removeRefreshToken();
          // 删除用户信息
          removeUserInfo();
          if (options.method === POST && options.params) {
            delete options.data;
          }
          // 将当前请求添加到队列中
          retryQueue.push({
            options,
            resolveCallback: resolve,
          });
          // 触发重新登录
          setTimeout(handle401Error, 500);
          return;
        }

        if (code !== 200) {
          showToast({
            icon: "none",
            title: msg,
            duration: 1500,
            success() {
              reject(data);
            },
          });
          return;
        }

        resolve(data.data);
      })
      .catch(reject);
  });
}


/**
 * 处理 401 错误
 */
function handle401Error() {
  // 第一个login登录 并且 retryQueue要是有值的
  if (!isLoggingIn && retryQueue.length) {
    isLoggingIn = true;
    store.dispatch("user/handleLogin").then((res) => {
      retryQueue.forEach(({ options, resolveCallback }) => {
        if (options?.data?.hasOwnProperty("userId")) {
          options.data.userId = res.id;
        }
        request(options).then(resolveCallback);
      });

      retryQueue = [];
      isLoggingIn = false;
    }).catch(() => {
      showToast({
        icon: "none",
        title: "登录失败",
      });
      retryQueue = [];
      isLoggingIn = false;
    })
  }
}



/**
 * Promise 版本的 post request
 * @param {Object} options 请求配置
 */
export function post(options) {
  return request({
    method: POST,
    ...options,
  });
}

/**
 * Promise 版本的 get request
 * @param {Object} options 请求配置
 */
export function get(options) {
  return request({
    method: GET,
    ...options,
  });
}

/**
 * 图片上传
 */
export function uploadFile(options) {
  return new Promise((resolve, reject) => {
    promisic(_uploadFile)({
      name: "file",
      url: `${apiUrl}/blade-resource/oss/endpoint/put-file`,
      header: {
        "Content-Type": "multipart/form-data",
        "Blade-Auth": "bearer " + getToken(),
      },
      ...(options || {}),
    })
      .then((res) => {
        let data = {};
        try {
          data = JSON.parse(res?.data || "{}");
        } catch (error) {
          if (typeof res.data == "object") {
            data = res.data || {};
          }
        }
        const code = data.code;
        const msg = data.msg || "未知错误";

        if (code !== 200) {
          showToast({
            icon: "none",
            title: msg,
            duration: 1500,
            success() {
              resolve(data);
            },
          });
          return;
        }

        resolve(data.data);
      })
      .catch(reject);
  });
}
