import axios from 'axios'
import config from '../../config'

/**
 * 创建axios实例, 配置路由, 连接超时等...
 * @type {AxiosInstance}
 */
const axiosInstance = axios.create({
    baseURL: config.baseURL,
    timeout: config.timeout
})

/**
 * 配置axios拦截器
 * 通常用来设置token
 */
axiosInstance.interceptors.request.use(
    config => {
        // 这里可以自定义一些config 配置
        return config
    },
    error => {
        //  这里处理一些请求出错的情况
        Promise.reject(error)
    }
)

/**
 * 配置axios响应拦截器
 * 通常用来统一处理异常信息
 */
// response 拦截器
axiosInstance.interceptors.response.use(
    response => {
        const res = response.data
        console.log("拦截到数据：", res)
        // //验证未登录，或token不合法时，直接跳到登录页
        // if (res.code == -200) {
        //     member.removeMemberSession();
        // } else {
        //     //普通错误，统一处理
        //     if (res.code == -1) {
        //         throw res.msg;
        //     }
        // }
        return res
    },
    error => {
        // 这里处理一些response 出错时的逻辑
        return Promise.reject(error)
    }
)

export default axiosInstance
