<template>
  <div class="login-container">
    <div class="login-box">
      <!--ref:必须属性，后期方便el-form组件获取使用-->
      <!--model:必须属性，与v-model没有关系，对表单全部数据对象进行绑定，后期表单校验会使用到-->
      <!--label-width:非必须属性，表单项目名称宽度-->
      <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules">
        <!--        <img src="./logo_index.png" alt="">-->
        <!--el-form-item:是表单项目组件，每个表单域需要通过此组件圈选-->
        <!--label:非必须属性，表单项目名称-->
        <!--prop:使得校验规则与当前项目联系起来，注意：属性值必须是表单对象成员名称-->
        <el-form-item prop="mobile">
          <!--el-input:普通输入框组件-->
          <!--v-model:必须属性，双向数据绑定-->
          <el-input v-model="loginForm.mobile" placeholder="请输入手机号码">
            <i slot="prefix" class="iconfont icon-shoujihao"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input v-model="loginForm.code" placeholder="请输入校验码">
            <i slot="prefix" class="iconfont icon-yanzhengma"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="xieyi" style="text-align:left;">
          <el-checkbox v-model="loginForm.xieyi" style="margin-right:10px;"></el-checkbox>
          <span>我已阅读并同意用户协议和隐私条款</span>
        </el-form-item>
        <el-form-item>
          <el-button :loading="isActive" :disabled="isActive" type="primary" style="width:100%;" @click="login()">登录
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      isActive: false, // 登录按钮等待、禁用状态
      ctaObj: null, // 极验窗口对象
      loginForm: {
        mobile: '13911111111', // 手机号码
        code: '246810', // 校验码
        xieyi: true
      },
      // 登录校验
      loginFormRules: {
        // 校验字段: [{ 规则 }, { 规则 }, { 规则 }]
        mobile: [
          {required: true, message: '手机号码必填'},
          {pattern: /^1[35789]\d{9}$/, message: '手机号码遵守格式'}
        ],
        code: [
          {required: true, message: '校验码必填'}
        ],
        xieyi: [
          {required: true, message: '协议必选'}
        ]
      }
    }
  }
}
</script>

<style scoped lang="less">

</style>
