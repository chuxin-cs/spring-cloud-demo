import { apiUrl } from "@/chuxin/config/env.js";
import { get, post, uploadFile } from "@/chuxin/utils/request.js";

// 登录
export function login(data) {
  return post({
    url: apiUrl + "/xiaoyu-biz/wechat/login",
    data,
  });
}

// 获取用户信息
export function getUserInfo(data) {
  return get({
    url: apiUrl + "/xiaoyu-biz/userinfo/detail",
    data,
  });
}

// 设置用户信息
export function setUserInfo(data) {
  return post({
    url: apiUrl + "/xiaoyu-biz/userinfo/update",
    data,
  });
}

// 头像上传 过于封装了 只需传入 filePath 即可
export function putFile(data) {
  return uploadFile(data);
}
