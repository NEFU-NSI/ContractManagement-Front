import axiosInstance from "@/plugins/axios";

/**
 * 获取用户通知
 * @returns {*}
 */
export const getUserNoticesApi = (name) => {
    return axiosInstance({
        url: 'remind/list',
        method: 'GET',
        params: {
            name: name
        }
    })
}

/**
 * 标记为已读
 * @returns {*}
 */
export const readNoticeApi = (id) => {
    return axiosInstance({
        method: 'POST',
        url: 'remind/read',
        params: {
            id: id
        }
    })
}
