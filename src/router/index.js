import Vue from 'vue'
import VueRouter from 'vue-router'


const Login = () => import('../views/Login')
const Register = () => import('../views/Register')
const Test = () => import('../views/test')
const Layout = () => import('../layout/index')

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Layout,
        hidden: false,
        children: [
            {
                path: '',
                name: '首页',
                component: () => import('../views/Index')
            }
        ]
    },
    {
        path: '/user-submenu',
        name: '用户管理',
        component: Layout,
        children: [
            {
                path: '/userInfo',
                name: '个人信息',
                component: () => import('../views/user/index')
            },
            {
                path: '/updatePassword',
                name: '修改密码',
                component: () => import('../views/user/UpdatePassword')
            }
        ]
    },
    {
        path: '/department-submenu',
        name: '部门管理',
        component: Layout,
        children: [
            {
                path: '/allDepartment',
                name: '所有部门',
                component: () => import('../views/department/index')
            },
            {
                path: '/addDepartment',
                name: '增加部门',
                component: () => import('../views/department/AddDepartment')
            }
        ]
    },

    {
        path: '/notice-submenu',
        name: '提醒通知',
        component: Layout,
        children: [
            {
                path: '/allNotice',
                name: '通知列表',
                component: () => import('../views/notice/index')
            }
        ]
    },

    {
        path: '/contract-submenu',
        name: '合同管理',
        component: Layout,
        children: [
            {
                path: '/allContract',
                name: '合同列表',
                component: () => import('../views/contract/index')
            },
            {
                path: '/addContract',
                name: '添加合同',
                component: () => import('../views/contract/AddContract')
            }
        ]
    },

    {
        path: '/login',
        name: '登陆',
        hidden: true,
        component: Login
    },
    {
        path: '/register',
        name: '注册',
        hidden: true,
        component: Register
    },
    {
        path: '/test',
        name: '测试',
        hidden: true,
        component: Test
    }
]

const router = new VueRouter({
    mode: "history",
    routes
})

export default router
