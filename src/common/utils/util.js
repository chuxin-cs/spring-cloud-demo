/**
 * @author 初心
 * @date 2021-03-31
 * @param {Function} fn 微信小程序API (wx.login、wx.request、wx.getUserInfo、wx.getSetting) 等
 */
export const promisic = (fn) => {
  return (params = {}) => {
    return new Promise((resolve, reject) => {
      fn({
        ...(params || {}),
        success: (data) => resolve(data),
        fail: (error) => reject(error),
      });
    });
  };
};

/**
 * @author 初心
 * 处理参数转换
 */
export function parseQuery(url) {
  let params = {};
  if (!url) return params;
  url = decodeURIComponent(url);
  url = url.split("?")[1]?.split("#")[0]?.split("&");
  return url.reduce((prev, current) => {
    const [key, value] = current.split("=");
    prev[key] = value;
    return prev;
  }, params);
}

/**
 * 封装拼接参数到URL的方法
 */
export function appendParamsToUrl(url, params) {
  if (!params || Object.keys(params).length === 0) {
    return url;
  }

  const paramsStr = Object.keys(params)
    .map((key) => `${key}=${encodeURIComponent(params[key])}`)
    .join("&");

  return `${url}?${paramsStr}`;
}

export function debounce(func, delay) {
  let timer; // 定时器
  return function () {
    let context = this; // 记录 this 值,防止在回调函数中丢失
    let args = arguments; // 函数参数
    //如果定时器存在，则清除定时器(如果没有,也没必要进行处理)
    timer ? clearTimeout(timer) : null;
    timer = setTimeout(() => {
      // 防止 this 值变为 window
      func.apply(context, args);
    }, delay);
  };
}