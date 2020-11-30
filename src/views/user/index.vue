<template>
  <div class="container-setting">
    <el-card>
      <div slot="header">
        <my-bread>个人设置</my-bread>
      </div>
      <!-- 栅格 -->
      <el-row>
        <el-col :span="12">
          <el-form ref="userForm" :rules="rules" :model="user" label-width="120px">
            <el-form-item label="编号：">{{ user.id }}</el-form-item>
            <el-form-item label="手机：">{{ user.mobile }}</el-form-item>
            <el-form-item prop="name" label="媒体名称：">
              <el-input v-model="user.name"></el-input>
            </el-form-item>
            <el-form-item prop="intro" label="媒体介绍：">
              <el-input v-model="user.intro" type="textarea" :rows="3"></el-input>
            </el-form-item>
            <el-form-item prop="email" label="邮箱：">
              <el-input v-model="user.email"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="updateUserInfo">保存设置</el-button>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :span="12">
          <el-upload
              class="avatar-uploader"
              action=""
              :show-file-list="false"
              :http-request="updateUserPhoto"
          >
            <img v-if="user.photo" :src="user.photo" class="avatar"/>
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          <p style="text-align:center">修改头像</p>
        </el-col>
      </el-row>
      <el-button @click="getUserInfo">获取用户信息</el-button>
    </el-card>
  </div>
</template>

<script>
import MyBread from '@/components/my-bread'
import {getUserInfoApi} from "@/apis/userApi";

export default {
  name: "index",
  components: {MyBread},
  data() {
    return {
      // 提交的用户信息
      user: {
        name: '',
        intro: '',
        email: '',
        photo: ''
      },
      rules: {
        name: [
          {required: true, message: '请输入媒体名称'},
          {min: 3, max: 5, message: '长度在 3 到 5 个字符'}
        ],
        intro: [
          {required: true, message: '请输入媒体介绍'},
          {max: 50, message: '长度不能超过50个字符'}
        ],
        email: [
          {required: true, message: '请输入邮箱'},
          {type: 'email', message: '请输入正确的邮箱'}
        ]
      }
    }
  },

  methods: {
    async getUserInfo() {
      let resp = await getUserInfoApi();
      console.log('userInfo resp-->', resp)
    },
    updateUserPhoto() {
      console.log('更新用户头像')
    },
    updateUserInfo() {
      console.log('更新用户信息')
    }
  }
}
</script>

<style scoped>

</style>
