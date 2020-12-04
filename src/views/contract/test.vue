<template>
  <div>
    <h3>合同测试</h3>
    <select-vue :config="configOption" :selectData.sync="selectData"></select-vue>
    <el-button @click="getUserInfo">获取个人信息</el-button>
    <el-button @click="testLogin">测试登陆</el-button>
  </div>
</template>

<script>
import SelectVue from '../../components/select'
import {getUserInfoApi} from "@/apis/userApi";
import {testLoginApi} from "@/apis/loginApi";

export default {
  name: "test",
  components: {SelectVue},
  data() {
    return {
      configOption: {
        init: ["name", "phone"]
      },
      // 下接菜单的数据
      selectData: {}
    }
  },
  methods: {
    async testLogin() {
      let resp = await testLoginApi("2086176146@qq.com", "123456");
      console.log(resp)
    },
    async getUserInfo() {
      let resp = await getUserInfoApi();
      console.log("resp-->", resp);
    }
  }
}
</script>

<style scoped>

</style>
