import {apiUrl} from "@/chuxin/env"
import {get, post} from "@/chuxin/common/request";

/**
 * 说明：通用接口
 */

export function getInfo(data) {
    return get({
        url: apiUrl + "/auth/user/getInfo",
        data,
    });
}
