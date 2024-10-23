import {fileUrl} from "@/chuxin/env";
import {shareConfig} from "@/chuxin/config";

/**
 * 描述：分享给好友
 * wechat官方文档：https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/share.html
 * uni-app官方文档：https://uniapp.dcloud.net.cn/api/plugins/share.html
 * 分享方式：
 *    第1种：<button open-type="share">分享</button>
 *    第2种：右上角点击分享
 */
export function onShareAppMessage(options) {
    const {title, path, imageUrl} = options || {};
    let shareImageUrl = fileUrl + shareConfig.imageUrl;

    return {
        // 标题
        title: title || shareConfig.title,
        // 路径
        path: path || shareConfig.path,
        // 图片背景
        imageUrl: imageUrl || shareImageUrl,
    };
}
