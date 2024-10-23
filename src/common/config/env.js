// 接口
let apiUrl = "";
// 文件
let fileUrl = "";
// socket
let socketUrl = "";
// webview
let webUrl = "";
// 获取当前环境
const env = process.env;

// 开发环境
if (env.NODE_ENV === "development") {
  apiUrl = ``;
  socketUrl = ``;
  fileUrl = ``;
  webUrl = ``;
}

// // 生产环境
// if (env.NODE_ENV === "production") {
// apiUrl = `http://172.16.90.184`;
//   apiUrl = `http://120.77.174.50`;
//   fileUrl = ``;
//   socketUrl = `ws://172.16.90.184:9102`;
//   webUrl = ``;
// }

// // 测试环境
// if (env.NODE_ENV === "test") {
//   apiUrl = `http://172.16.90.184`;
//   fileUrl = ``;
//   socketUrl = `ws://172.16.90.184:9102`;
//   webUrl = ``;
// }

export { apiUrl, fileUrl, socketUrl, webUrl, env };
