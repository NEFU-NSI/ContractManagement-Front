/**
 * 文件模块Api
 */

import axiosInstance from "@/plugins/axios";

/**
 * 上传文件
 * @param data
 * @returns {*}
 */
export const uploadFileApi = (data) => {
    return axiosInstance({
        method: 'POST',
        url: 'minio/upload',
        data: data
    })
}

/**
 * 删除文件
 * @param fileName
 * @returns {*}
 */
export const deleteFileApi = (fileName) => {
    return axiosInstance({
        method: 'DELETE',
        url: 'minio/delete',
        params: {
            fileName: fileName
        }
    })
}

/**
 * 下载文件
 * @param fileName
 * @returns {*}
 */
export const downloadFileApi = (fileName) => {
    return axiosInstance({
        method: 'GET',
        url: 'minio/download',
        params: {
            fileName: fileName
        }
    })
}
