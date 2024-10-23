// 获取当前环境
const env = process.env || {};
const _NODE_ENV = env.NODE_ENV || '';

// 配置对象
const envConfig = {
  // 开发环境
  development: {
    apiUrl: "xxxxxxxxxxxxxxxxxxxxxxxxx", // 接口地址
    fileUrl: "xxxxxxxxxxxxxxxxxxxxxxxxx", // 文件地址
    socketUrl: "xxxxxxxxxxxxxxxxxxxxxxxxx", // WebSocket地址
    webUrl: "xxxxxxxxxxxxxxxxxxxxxxxxx" // Webview地址
  },
  // 生产环境
  production: {
    apiUrl: "xxxxxxxxxxxxxxxxxxxxxxxxx", // 接口地址
    fileUrl: "xxxxxxxxxxxxxxxxxxxxxxxxx", // 文件地址
    socketUrl: "xxxxxxxxxxxxxxxxxxxxxxxxx", // WebSocket地址
    webUrl: "xxxxxxxxxxxxxxxxxxxxxxxxx" // Webview地址
  },
  // 测试环境
  test: {
    apiUrl: "xxxxxxxxxxxxxxxxxxxxxxxxx", // 接口地址
    fileUrl: "xxxxxxxxxxxxxxxxxxxxxxxxx", // 文件地址
    socketUrl: "xxxxxxxxxxxxxxxxxxxxxxxxx", // WebSocket地址
    webUrl: "xxxxxxxxxxxxxxxxxxxxxxxxx" // Webview地址
  }
};

// 根据当前环境获取配置
const currentConfig = envConfig[_NODE_ENV] || envConfig.development;

// 导出配置
export const { apiUrl, fileUrl, socketUrl, webUrl } = currentConfig;
export { env };
// 导出平台判断
export * from "./platform.js";