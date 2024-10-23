import {
  getStorageSync,
  setStorageSync,
  removeStorageSync,
} from "../../api/index.js";

const TokenKey = "chuxin-access-token";
const RefreshTokenKey = "chuxin-refresh-token";

// 获取token
export function getToken() {
  return getStorageSync(TokenKey);
}
// 设置token
export function setToken(token) {
  return setStorageSync(TokenKey, token);
}
// 删除token
export function removeToken() {
  return removeStorageSync(TokenKey);
}

// 获取刷新toekn
export function getRefreshToken() {
  return getStorageSync(RefreshTokenKey);
}
// 设置刷新toekn
export function setRefreshToken(token) {
  return setStorageSync(RefreshTokenKey, token);
}
// 删除刷新toekn
export function removeRefreshToken() {
  return removeStorageSync(RefreshTokenKey);
}
