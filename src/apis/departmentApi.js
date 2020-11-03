/**
 * 部门模块Api
 */

import axiosInstance from "@/plugins/axios";

/**
 * 获取全部部门
 * @returns {*}
 */
export const getAllDepartmentApi = () => {
    return axiosInstance({
        method: 'GET',
        url: 'department/all'
    })
}

/**
 * 更新部门信息
 * @param data
 * @returns {*}
 */
export const updateDepartmentApi = (data) => {
    return axiosInstance({
        method: 'PUT',
        url: 'department/update',
        data: data
    })
}

/**
 * 新增部门
 * @param data
 * @returns {*}
 */
export const addDepartmentApi = (data) => {
    return axiosInstance({
        method: 'POST',
        url: 'department/add',
        data: data
    })
}

/**
 * 删除部门Api
 * @returns {*}
 */
export const deleteDepartmentApi = (departmentId) => {
    return axiosInstance({
        method: 'DELETE',
        url: 'department/delete',
        params: {
            departmentId: departmentId
        }
    })
}
