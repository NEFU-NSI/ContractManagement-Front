<template>
  <div class="login-container">
    <div class="login-card">
      <div class="login-title">管理员登录</div>
      <!-- 登录表单 -->
      <el-form
          status-icon
          :model="loginForm"
          :rules="loginFormRules"
          ref="ruleForm"
          class="login-form"
      >
        <!-- 用户名输入框 -->
        <el-form-item prop="email">
          <el-input
              v-model="loginForm.email"
              prefix-icon="el-icon-user-solid"
              placeholder="用户名"
              @keyup.enter.native="login"
          />
        </el-form-item>
        <!-- 密码输入框 -->
        <el-form-item prop="password">
          <el-input
              v-model="loginForm.password"
              prefix-icon="iconfont el-icon-mymima"
              show-password
              placeholder="密码"
              @keyup.enter.native="login"
          />
        </el-form-item>
        <!-- 登录按钮 -->
        <el-button type="primary" @click="login">登录</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
import {loginApi} from '@/apis/loginApi'
import {setItem} from "@/utils/storage";

export default {
  name: "Login",
  data() {
    return {
      isActive: false, // 登录按钮等待、禁用状态
      ctaObj: null, // 极验窗口对象
      loginForm: {
        email: '2086176146@qq.com', // 手机号码
        password: '123456', // 校验码
      },
      // 登录校验
      loginFormRules: {
        // 校验字段: [{ 规则 }, { 规则 }, { 规则 }]
        email: [
          {required: true, message: '邮箱必填', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '密码必填', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    async login() {
      let resp = await loginApi(this.loginForm.email, this.loginForm.password)
      console.log("resp-->" + resp)
      console.log("resp token-->" + resp.data.data.token)
      if (resp.data.data.token === null) {
        //TODO 用户未注册后需不需要跳转到注册页面
        this.$message.error('用户未注册')
        console.log('用户未注册')
      } else {
        // let tokenHead = resp.data.data.tokenHead
        // console.log('tokenhead-->' + tokenHead)
        let token = resp.data.data.token
        console.log("local-->" + token)
        //设置token
        setItem('token', token)
        this.$router.push('/')
      }
    }
  }
}
</script>

<style scoped>
.login-container {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: url('../assets/images/login_bg.jpg') center center /
    cover no-repeat;
}

.login-card {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  background: #fff;
  padding: 170px 60px 180px;
  width: 350px;
}

.login-title {
  color: #303133;
  font-weight: bold;
  font-size: 1rem;
}

.login-form {
  margin-top: 1.2rem;
}

.login-card button {
  margin-top: 1rem;
  width: 100%;
}
</style>
