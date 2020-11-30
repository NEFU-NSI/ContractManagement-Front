<template>
  <el-card>
    <el-form>
      <el-form-item
          label="邮箱">
        <el-input placeholder="请输入注册时的邮箱" v-model="email"></el-input>
      </el-form-item>
      <el-form-item
          label="新密码">
        <el-input placeholder="请输入新的密码" v-model="newPassword"></el-input>
      </el-form-item>
      <el-form-item
          label="确认密码">
        <el-input placeholder="请确认密码" v-model="confirmPassword"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="updatePassword" type="primary">
          修改密码
        </el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
import {updatePasswordApi} from "@/apis/userApi";

export default {
  name: "UpdatePassword",
  data() {
    return {
      email: '',
      newPassword: '',
      confirmPassword: ''
    }
  },
  methods: {
    async updatePassword() {
      if (this.email && this.newPassword && this.confirmPassword) {
        if (this.newPassword === this.confirmPassword) {
          let resp = await updatePasswordApi(this.email, this.newPassword)
          console.log('resp-->', resp)
        } else {
          this.$message.error('新旧密码不一致, 请重新输入')
        }
      } else {
        this.$message.error('表单项不能为空')
      }

    }
  }

}
</script>

<style scoped>

</style>
