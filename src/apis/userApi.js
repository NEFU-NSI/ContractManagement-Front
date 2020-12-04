/**
 * 用户模块Api
 *
 */

import axiosInstance from "@/plugins/axios";

/**
 * 获取用户信息
 * @returns {*}
 */
export const getUserInfoApi = () => {
    return axiosInstance({
        method: 'GET',
        url: 'user/info',

    })
}

/**
 * 获取用户通知功能
 * @returns {*}
 */
export const getUserNoticeApi = () => {
    return axiosInstance({
        method: 'GET',
        url: 'remind/list'
    })
}

/**
 * 将通知变为已读
 * @param id
 * @returns {*}
 */
export const readRemindApi = (id) => {
    return axiosInstance({
        method: 'POST',
        url: 'remind/read',
        params: {
            id: id
        }
    })
}

/**
 * 刷新token
 * @returns {*}
 */
export const refreshTokenApi = () => {
    return axiosInstance({
        method: 'GET',
        url: 'user/refresh'
    })
}

/**
 * 修改用户密码
 * @returns {*}
 */
export const updatePasswordApi = (email, password) => {
    return axiosInstance({
        method: 'POST',
        url: 'user/updatePassword',
        params: {
            email: email,
            password: password
        }
    })
}

/**
 * 用户注册接口
 * @param user
 * @returns {*}
 */
export const registerApi = (user) => {
    console.log('user-->' + JSON.stringify(user))
    return axiosInstance({
        method: 'POST',
        url: 'user/register',
        params: {
            email: user.email,
            password: user.password,
            name: user.username,
            department: user.department
        }
    })
}

// http://10.10.11.141:8080/api/user/register?email=2086176146%40qq.com&password=123456&name=test&department=1
// http://10.10.11.141:8080/api/user/register?email=2086176146%40qq.com&password=123456&name=aiwenbin&department=1

/**
 * 删除用户
 * @returns {*}
 */
export const deleteUserApi = () => {
    return axiosInstance({
        method: 'DELETE',
        url: 'user/delete'
    })
}


