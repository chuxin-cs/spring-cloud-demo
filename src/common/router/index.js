import {  reLaunch } from "@/chuxin/utils/router.js";

/**
 * 首页
 */
export function goHome(options) {
  return reLaunch({
    ...(options || {}),
    url: "/pages/index/index",
  });
}