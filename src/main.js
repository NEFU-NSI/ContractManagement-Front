/**
 * 项目结构：
 1）启动程序    main.js
 2）主页面     App.vue
 3）相关的页面  views下。views中的页面内，引入相关的组件
 4）组件       components components下有各种业务组件，大部分组件都支持在多处被调用。
 5）环境配置    config config下可以支持配置开发、测试、生产3个环境
 6）路由       router
 7）状态       store
 8）全局过滤器  filters
 9）通用工具类  utils
 运行前请先做好如下准备
 1）请在config下配置好后端地址
 2）本地请可用 npm run serve
 3）打包请使用 npm run build
 */

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from "axios"
import Config from './config'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

//阻止启动生产消息
Vue.config.productionTip = false

//挂载属性
Vue.prototype.$axios = Axios
Vue.prototype.config = Config

Vue.use(ElementUI)

//创建vue实例
const vm = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
//把vm传到comm中,使整个项目保值是一个VUE实例
Vue.prototype.vm = vm
