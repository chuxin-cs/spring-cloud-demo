import config from "../../config/index.js";
import { fileUrl } from "@/chuxin/config/env.js";

/**
 * 分享
 * 第一种：<button open-type="share">分享</button>
 * 第2种：右上角点击分享
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
