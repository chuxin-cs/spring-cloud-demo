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