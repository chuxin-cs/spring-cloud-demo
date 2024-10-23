import { appendParamsToUrl, promisic } from "@/common/utils/util.js";
import {
  navigateTo,
  redirectTo,
  reLaunch as _reLaunch,
  switchTab as _switchTab,
  navigateBack,
} from "@/common/api/index.js";

export const navigate = (options) => {
  return new Promise((resolve, reject) => {
    let url = options?.url || "";

    if (options.params) {
      url = appendParamsToUrl(url, options.params);
      delete options.params;
    }
    promisic(navigateTo)({
      complete: options.complete || (() => {}),
      ...options,
      url,
      success: resolve,
      fail: reject,
    });
  });
};

export const redirect = (options) => {
  return new Promise((resolve, reject) => {
    let url = options?.url || "";
    if (options.params) {
      url = appendParamsToUrl(url, options.params);
      delete options.params;
    }
    promisic(redirectTo)({
      complete: options.complete || (() => {}),
      ...options,
      url,
      success: resolve,
      fail: reject,
    });
  });
};

export const reLaunch = (options) => {
  return new Promise((resolve, reject) => {
    let url = options?.url || "";
    if (options.params) {
      url = appendParamsToUrl(url, options.params);
      delete options.params;
    }
    promisic(_reLaunch)({
      complete: options.complete || (() => {}),
      ...options,
      url,
      success: resolve,
      fail: reject,
    });
  });
};

export const switchTab = (options) => {
  return new Promise((resolve, reject) => {
    let url = options?.url || "";
    if (options.params) {
      url = appendParamsToUrl(url, options.params);
      delete options.params;
    }
    promisic(_switchTab)({
      complete: options.complete || (() => {}),
      ...options,
      url,
      success: resolve,
      fail: reject,
    });
  });
};

export const back = (options) => {
  return new Promise((resolve, reject) => {
    promisic(navigateBack)({
      complete: options.complete || (() => {}),
      ...options,
      success: resolve,
      fail: reject,
    });
  });
};
