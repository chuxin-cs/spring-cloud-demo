/**
 * token config
 */
export const tokenConfig = {
    // 存储 token 的key
    TokenKey: `chuxin-access-token`,
    // 存储 刷新token 的key
    RefreshTokenKey: `chuxin-refresh-token`
}

/**
 * share config
 */
export const shareConfig = {
    // 标题
    title: "分享时的title",
    // 路径
    path: "/pages/index/index",
    // 图片背景
    imageUrl: "default/share.png",
}

export default  {
    tokenConfig,
    shareConfig,
}
