// 默认头像
export const defaultAcatar = "/static/common/pic.png";

/**
 * 用户信息
 */
export function getUserInfoModel() {
  return {
    // 昵称
    nickname: "",
    // 头像
    avatar: defaultAcatar,
    // openid
    openid: "",
    // 用户id
    userId: "",
  };
}

/**
 * 登录信息
 */
export function getLoginInfoModel() {
  return {
    // token
    access_token: "",
    // 刷新token
    refresh_token: "",
  };
}
