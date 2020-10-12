# contract_management

## 2020/10/08

~~ 1. 初始化项目 ~~

```shell script
vue create contract_management
```


~~ 2. 在Github上创建项目 ~~

~~ 3. 将本地项目与Github项目关联 ~~
    Github 多人协作
    
后面大概的规划

~~4. 删除Vue脚手架自动生成的HelloWorld等~~

~~5. 引入Element-ui 和 Axios等依赖~~

6. 配置Axios
    - 引入axios
    `cnpm install axios -S`
    - 配置axios
    ```js
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
 
   ```

7. 配置项目的目录结构

8. 登陆页面

9. 首页布局

10. 对接Api接口等

11. 配置开发环境, 生产环境等

12. 设置eslint等开发规范

13. 统计数据表格, 表格处理等

14. 上传,下载,打开文件的处理

## 2020/10/09
1. 完成登陆首页
    注意: vue脚手架项目不能单独引入bootstrap.css, 因为bootstrap依赖于JQuery, 而引入JQuery有可能会与vue发生冲突
    更改登陆首页样式
2. 测试后端交互接口

3. 规划首页布局

4. 引入Element-ui
```shell script
npm i element-ui -S
```
在main.js中配置Element-ui
```js
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
```
5. 完成Contract相关Api的书写

6. Element-UI 自定义校验器

7. 分页插件的使用

8. 级联选择器的使用

9. Element-ui Dropdown 使用
    
    slot: 插槽
    command: 点击菜单选项的事件回调
    
```js

```
10. 面包屑(分隔符)
    封装一个属于自己的面包屑组件

## 2020/10/11
    
1. Vue路由守护模式

2. Vue配置axios代理

3. Nginx简单配置代理

4. localStorage 存储用户重要数据

5. axios 设置Header信息

6. axios统一拦截信息     
    
