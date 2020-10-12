/*
全局配置
 */
const config = {
    /**
     * 开发环境配置
     */
    development: {
        timeOut: 5000,
        baseURL: 'http://10.10.11.141:8080/api/'
    },

    /**
     * 生成环境配置
     */
    production: {},

    /**
     * 测试环境配置
     */
    test: {}
}

export default config[process.env.NODE_ENV]
