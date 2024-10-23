<script>
export default {
  // 当uni-app 初始化完成时触发（全局只触发一次）
  onLaunch () {
    this.init();
  },
  // 页面打开
  onShow() {},
  // 页面关闭
  onHide() {},
  methods: {
    init() {
      // #ifndef APP-NVUE
      uni.requireNativePlugin = () => {};
      // #endif
    },
  },
};
</script>

<style lang="scss">
@import "uview-ui/index.scss";
</style>
