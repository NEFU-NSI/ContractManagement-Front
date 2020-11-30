<template>
  <div class="login-container">
    <div class="register_container">
      <!--ref:必须属性，后期方便el-form组件获取使用-->
      <!--model:必须属性，与v-model没有关系，对表单全部数据对象进行绑定，后期表单校验会使用到-->
      <!--label-width:非必须属性，表单项目名称宽度-->
      <el-card class="register_box">
        <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" label-width="50px" label-position="left"
                 hide-required-asterisk=true>
          <div class="form_title">注册用户</div>
          <!--        <img src="./logo_index.png" alt="">-->
          <!--el-form-item:是表单项目组件，每个表单域需要通过此组件圈选-->
          <!--label:非必须属性，表单项目名称-->
          <!--prop:使得校验规则与当前项目联系起来，注意：属性值必须是表单对象成员名称-->
          <el-form-item prop="email" label="邮箱">
            <!--el-input:普通输入框组件-->
            <!--v-model:必须属性，双向数据绑定-->
            <el-input v-model="loginForm.email" placeholder="请输入邮箱">
              <!--              <i slot="prefix" class="iconfont icon-shoujihao"></i>-->
            </el-input>
          </el-form-item>
          <el-form-item prop="username" label="姓名">
            <el-input v-model="loginForm.username" placeholder="请输入用户名">
              <!--              <i slot="prefix" class="iconfont icon-yanzhengma"></i>-->
            </el-input>
          </el-form-item>
          <el-form-item prop="password" label="密码">
            <el-input v-model="loginForm.password" placeholder="请输入密码" type="password">
              <!--              <i slot="prefix" class="iconfont icon-yanzhengma"></i>-->
            </el-input>
          </el-form-item>
          <el-form-item prop="department" label="部门">
            <el-select v-model="loginForm.department" placeholder="请选择部门">
              <el-option v-for="item in allDepartments"
                         :label="item.departmentName"
                         :value="item.id"
                         :key="item.id">
              </el-option>
            </el-select>
            <!--            <el-input v-model="loginForm.department" placeholder="请选择部门">-->
            <!--              &lt;!&ndash;              <i slot="prefix" class="iconfont icon-yanzhengma"></i>&ndash;&gt;-->
            <!--            </el-input>-->
          </el-form-item>
          <!--          <el-form-item prop="xieyi" style="text-align:left;">-->
          <!--            <el-checkbox v-model="loginForm.xieyi" style="margin-right:10px;"></el-checkbox>-->
          <!--            <span>我已阅读并同意用户协议和隐私条款</span>-->
          <!--          </el-form-item>-->
          <el-form-item>
            <el-button :loading="isActive" :disabled="isActive" type="primary" style="width:100%;" @click="register">注册
            </el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </div>
</template>

<script>
import {registerApi} from "@/apis/userApi";
import {getAllDepartmentApi} from "@/apis/departmentApi";

export default {
  name: "Login",
  data() {
    return {
      isActive: false, // 登录按钮等待、禁用状态
      ctaObj: null, // 极验窗口对象
      allDepartments: [],
      loginForm: {
        email: '', // 邮箱
        password: '', // 密码
        username: '', //用户名
        department: '', //部门
      },
      // 登录校验
      loginFormRules: {
        // 校验字段: [{ 规则 }, { 规则 }, { 规则 }]
        email: [
          {required: true, message: '邮箱必填'}
        ],
        password: [
          {required: true, message: '密码必填'}
        ],
        username: [
          {required: true, message: '用户名必填'}
        ],
        department: [
          {required: true, message: '部门必填'}
        ],
        xieyi: [
          {required: true, message: '协议必选'}
        ]
      }
    }
  },
  async created() {
    let resp = await getAllDepartmentApi()
    console.log('部门resp-->', resp)
    this.allDepartments = resp.data.data
    console.log('all-->', this.allDepartments)
  },
  methods: {
    async register() {
      let user = this.loginForm
      if (user.email && user.password && user.username && user.department) {
        let resp = await registerApi(user)
        console.log("注册resp-->", resp)
        if (resp.data.code == 200) {
          this.$message.success('注册成功, 请登录')
          await this.$router.push('/login')
        } else {
          this.$message.error('注册失败, 请重新注册')
        }
      } else {
        this.$message.error('表单项不能为空')
      }
    }
  }
}
</script>

<style scoped lang="less">
//.register_container {
//  width: 100%;
//  height: 100%;
//  display: flex;
//  justify-items: center;
//  align-items: center;
//  background-color: black;
//}
.form_title {
  text-align: center;
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 20px;
}

.register_box {
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
}
</style>
