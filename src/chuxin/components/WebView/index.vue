<template>
  <view class="web-view-container">
    <web-view :src="url" allow></web-view>
  </view>
</template>

<script>
export default {
  name: "WebView",
  data() {
    return {
      url: "",
    };
  },
  onLoad(option) {
    this.url = option.url;
  },
};
</script>
