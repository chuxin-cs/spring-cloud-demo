import { login } from "@/chuxin/api";
import { promisic } from "@/chuxin/utils/util";

// 平台登录
export function platformLogin() {
  return promisic(login)({ provider: "weixin" });
}
