/**
 * 合同模块Api
 */

import axiosInstance from "@/plugins/axios";

/**
 * 获取所用合同
 * @returns {*}
 */
export const getAllContractsApi = (current, size) => {
    return axiosInstance({
        method: 'GET',
        url: 'contract/list',
        params: {
            current: current,
            size: size
        }
    })
}

/**
 * 按照年龄获取合同
 * @param year
 * @returns {*}
 */
export const getContractsByYearApi = (year) => {
    return axiosInstance({
        method: 'GET',
        url: 'contract/statistics',
        params: {
            year: year
        }
    })
}

/**
 * 新增合同
 * @param data
 * @returns {*}
 */
export const addContractApi = (data) => {
    console.log('data-->' + JSON.stringify(data))
    return axiosInstance({
        method: 'POST',
        url: 'contract/add',
        data: data
    })
}
