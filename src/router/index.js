import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from "@/views/Index";

const Login = () => import('../views/Login')
const User = () => import('../views/user')
const Contract = () => import('../views/contract')
const File = () => import('../views/file')
const Test = () => import('../views/test')
const UserManagement = () => import('../views/usermanagement')

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Index,
        children: [
            {path: '/user', component: User},
            {path: '/contract', component: Contract},
            {path: '/file', component: File},
            {path: '/userManagement', component: UserManagement}
        ]
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/test',
        component: Test
    }
]

const router = new VueRouter({
    routes
})

export default router
