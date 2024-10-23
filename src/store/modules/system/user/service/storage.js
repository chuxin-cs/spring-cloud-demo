import {
  getStorageSync,
  setStorageSync,
  removeStorageSync,
} from "@/chuxin/api";

const UserInfoKey = "user-info";

export function setUserInfo(userInfo) {
  setStorageSync(UserInfoKey, userInfo);
}
export function getUserInfo() {
  return getStorageSync(UserInfoKey) || {};
}
export function removeUserInfo() {
  removeStorageSync(UserInfoKey);
}
