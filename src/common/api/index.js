/**
 * 对所有的 uni 方法进行收口，业务中所有调用到的 uni 方法，统一调用此文件
 * 后期如果换成 微信(wx) 和 支付宝小程序 只需在这里更换 uni 即可
 * 如果部分平台不支持某一个方法 可在当前文件实现 假如微信小程序中没有 wx.request 方法 可在当前文件中自行实现 request 外部只调用request
 * 后续随着业务的增加 会完善当前文件：
 */
const _uni = uni || {};

/**
 * 网络请求
 * uni-app：https://zh.uniapp.dcloud.io/api/request/request.html#request
 */
export const request = _uni.request;

/**
 * 同步获取缓存
 * uni-app：https://zh.uniapp.dcloud.io/api/storage/storage.html#getstoragesync
 */
export const getStorageSync = _uni.getStorageSync;
/**
 * 同步设置缓存
 * uni-app：https://zh.uniapp.dcloud.io/api/storage/storage.html#setstoragesync
 */
export const setStorageSync = _uni.setStorageSync;
/**
 * 同步删除缓存
 * uni-app：https://zh.uniapp.dcloud.io/api/storage/storage.html#removestoragesync
 */
export const removeStorageSync = _uni.removeStorageSync;

/**
 * 登录
 * uni-app：https://zh.uniapp.dcloud.io/api/plugins/login.html#login
 */
export const login = _uni.login;

/**
 * 支付
 * uni-app：https://zh.uniapp.dcloud.io/api/plugins/payment.html
 */
export const requestPayment = _uni.requestPayment;

/**
 * 显示消息提示框
 * uni-app：https://zh.uniapp.dcloud.io/api/ui/prompt.html#showtoast
 */
export const showToast = _uni.showToast;

/**
 * 调起客户端扫码界面，扫码成功后返回对应的结果。
 * uni-app：https://zh.uniapp.dcloud.io/api/system/barcode.html#scancode
 */
export const scanCode = _uni.scanCode;

/**
 * 将本地资源上传到开发者服务器
 * uni-app：https://zh.uniapp.dcloud.io/api/request/network-file.html#uploadfile
 */
export const uploadFile = _uni.uploadFile;

/**
 * 显示 loading 提示框, 需主动调用 uni.hideLoading 才能关闭提示框。
 * uni-app：https://zh.uniapp.dcloud.io/api/ui/prompt.html#showloading
 */
export const showLoading = _uni.showLoading;

/**
 * 显示模态弹窗，可以只有一个确定按钮，也可以同时有确定和取消按钮。类似于一个API整合了 html 中：alert、confirm。
 * uni-app：https://zh.uniapp.dcloud.io/api/ui/prompt.html#showmodal
 */
export const showModal = _uni.showModal;

/**
 * 隐藏 loading 提示框。
 * uni-app：https://zh.uniapp.dcloud.io/api/ui/prompt.html#hideloading
 */
export const hideLoading = _uni.hideLoading;

/**
 * 保留当前页面，跳转到应用内的某个页面，使用uni.navigateBack可以返回到原页面
 * uni-app地址：https://zh.uniapp.dcloud.io/api/router.html#navigateto
 */
export const navigateTo = _uni.navigateTo;

/**
 * 关闭当前页面，跳转到应用内的某个页面
 * uni-app地址：https://zh.uniapp.dcloud.io/api/router.html#redirectto
 */
export const redirectTo = _uni.redirectTo;

/**
 * 关闭所有页面，打开到应用内的某个页面。
 * uni-app地址：https://zh.uniapp.dcloud.io/api/router.html#relaunch
 */
export const reLaunch = _uni.reLaunch;

/**
 * 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面。
 * uni-app地址：https://zh.uniapp.dcloud.io/api/router.html#switchtab
 */
export const switchTab = _uni.switchTab;

/**
 * 关闭当前页面，返回上一页面或多级页面。可通过 getCurrentPages() 获取当前的页面栈，决定需要返回几层。
 * uni-app地址：https://zh.uniapp.dcloud.io/api/router.html#navigateback
 */
export const navigateBack = _uni.navigateBack;

/**
 * 创建并返回内部 audio 上下文 innerAudioContext 对象。
 * uni-app地址：https://zh.uniapp.dcloud.io/api/media/audio-context.html#createinneraudiocontext
 */
export const createInnerAudioContext = _uni.createInnerAudioContext;


/**
 * 动态设置当前页面的标题
 * uni-app地址：https://zh.uniapp.dcloud.io/api/ui/navigationbar.html#setnavigationbartitle
 */
export const setNavigationBarTitle = _uni.setNavigationBarTitle;

/**
 * 键盘高度变化事件的监听函数
 * uni-app地址：https://uniapp.dcloud.net.cn/api/key.html#onkeyboardheightchange
 */
export const onKeyboardHeightChange = _uni.onKeyboardHeightChange;


/**
 * 微信地址：https://developers.weixin.qq.com/miniprogram/dev/api/ui/menu/wx.getMenuButtonBoundingClientRect.html
 * uni-app：https://zh.uniapp.dcloud.io/api/ui/menuButton.html#getmenubuttonboundingclientrect
 */
export const getMenuButtonBoundingClientRect = _uni.getMenuButtonBoundingClientRect;