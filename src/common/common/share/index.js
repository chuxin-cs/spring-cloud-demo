import config from "../../config/index.js";
import { fileUrl } from "@/chuxin/config/env.js";

/**
 * 描述：分享给好友
 * wechat官方文档：https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/share.html
 * uni-app官方文档：https://uniapp.dcloud.net.cn/api/plugins/share.html
 * 分享方式：
 *    第1种：<button open-type="share">分享</button>
 *    第2种：右上角点击分享
 */
export function onShareAppMessage(options) {
  const { title, path, imageUrl } = options || {};
  let shareImageUrl = fileUrl + config.shareImageUrl;
  return {
    // 标题
    title: title || config.title,
    // 路径
    path: path || config.path,
    // 图片背景
    imageUrl: imageUrl || shareImageUrl,
  };
}
