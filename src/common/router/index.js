import {  reLaunch } from "@/chuxin/common/router";

/**
 * 首页
 */
export function goHome(options) {
  return reLaunch({
    ...(options || {}),
    url: "/pages/index/index",
  });
}