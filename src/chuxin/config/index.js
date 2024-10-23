// token
export const tokenConfig = {
    // 存储 token 的key
    TokenKey: `chuxin-access-token`,
    // 存储 刷新token 的key
    RefreshTokenKey: `chuxin-refresh-token`
}


const config = {
    // 项目名称
    projectName: "项目名称",

    // 分享时使用的title
    title: "..",

    // 默认分享路径
    path: "/pages/index/index",

    shareImageUrl: "default/share.png",

    // 微信相关配置, 如果配置过大可自行拆文件出去
    wx: {
        // 微信小程序 appId
        appId: "",
    },

    // uni-app相关配置
    uni: {},

    // h5相关配置
    h5: {},
}

export default  {
    config,
    tokenConfig
}
