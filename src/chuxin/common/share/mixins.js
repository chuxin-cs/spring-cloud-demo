import {onShareAppMessage} from "./index";

/**
 * mixins 方式
 * 使用：
 *      import shareMixins from "@/chuxin/common/share/mixins"
 *      export default {
 *          mixins: [shareMixins]
 *      }
 */
export default {
    data() {
        return {
            shareConfig: {
                title: "",
                path: "",
                imageUrl: "",
            }
        }
    },
    methods: {
        // set shareConfig
        setShareConfig(shareConfig) {
            this.shareConfig = {
                ...this.shareConfig, ...(shareConfig || {}),
            }
        },
        // get shareConfig
        getShareConfig() {
            return this.shareConfig;
        },
        // 分享
        onShareAppMessage() {
            return onShareAppMessage(this.getShareConfig())
        }
    },
    // 分享
    onShareAppMessage() {
        return onShareAppMessage(this.getShareConfig())
    },
}
