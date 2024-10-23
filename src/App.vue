<script>
export default {
  // 当uni-app 初始化完成时触发（全局只触发一次）
  onLaunch: function () {
    this.init();
  },
  onShow: function () {},
  onHide: function () {},
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
