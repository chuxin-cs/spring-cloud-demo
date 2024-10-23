import {tokenConfig} from "@/chuxin/config"
import {
    getStorageSync, setStorageSync, removeStorageSync,
} from "@/chuxin/uni";

const TokenKey = tokenConfig.TokenKey;
const RefreshTokenKey = tokenConfig.RefreshTokenKey;

/**
 * 获取token
 */
export function getToken() {
    return getStorageSync(TokenKey);
}

/**
 * 设置token
 */
export function setToken(token) {
    return setStorageSync(TokenKey, token);
}

/**
 * 删除token
 */
export function removeToken() {
    return removeStorageSync(TokenKey);
}

/**
 * 获取刷新token
 */
export function getRefreshToken() {
    return getStorageSync(RefreshTokenKey);
}

/**
 * 设置刷新token
 */
export function setRefreshToken(token) {
    return setStorageSync(RefreshTokenKey, token);
}

/**
 * 删除刷新token
 */
export function removeRefreshToken() {
    return removeStorageSync(RefreshTokenKey);
}
