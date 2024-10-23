import { showModal } from "@/chuxin/uni";

export function Modal(options) {
  return new Promise((resolve, reject) => {
    showModal({
      title: "提示",
      ...(options || {}),
      success: (res) => {
        // 点击确认
        if (res.confirm) {
          resolve(res);
        }
        // 点击取消
        if (res.cancel) {
          reject(res);
        }
        reject(res);
      },
      fail: reject,
    });
  });
}
