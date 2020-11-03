/**
 * 登陆模块Api
 */
import axiosInstance from "@/plugins/axios";

export const loginApi = (email, password) => {
    return axiosInstance({
            method: 'POST',
            url: 'user/login',
            data: {
                email: email,
                password: password
            },
            transformRequest: [function (data) {
                let ret = ''
                for (let it in data) {
                    ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
                }
                return ret
            }],
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
    )
}
