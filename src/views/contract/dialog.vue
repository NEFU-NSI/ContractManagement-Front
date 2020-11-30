<!--<template>-->
<!--  <el-dialog title="新增" :visible.sync="data.dialog_info_flag" @close="close" width="700px" @opened="openDialog">-->
<!--    <el-form :model="data.form" :rules="data.rules" ref="addInfoForm">-->
<!--      <el-form-item label="用户名：" :label-width="data.formLabelWidth" prop="username">-->
<!--        <el-input v-model="data.form.username" placeholder="请输入邮箱"></el-input>-->
<!--      </el-form-item>-->
<!--      <el-form-item label="密码：" :label-width="data.formLabelWidth" prop="password">-->
<!--        <el-input type="password" v-model="data.form.password" placeholder="请输入6~20数字+字母"></el-input>-->
<!--      </el-form-item>-->
<!--      <el-form-item label="姓名：" :label-width="data.formLabelWidth" prop="truename">-->
<!--        <el-input v-model="data.form.truename" placeholder="请输入真实姓名"></el-input>-->
<!--      </el-form-item>-->
<!--      <el-form-item label="手机号：" :label-width="data.formLabelWidth" prop="phone">-->
<!--        <el-input v-model.number="data.form.phone" placeholder="请输入手机号"></el-input>-->
<!--      </el-form-item>-->
<!--      &lt;!&ndash;      <el-form-item label="地区：" :label-width="data.formLabelWidth" prop="region">&ndash;&gt;-->
<!--      &lt;!&ndash;        <CityPicker :cityPickerData.sync="data.cityPickerData" />&ndash;&gt;-->
<!--      &lt;!&ndash;      </el-form-item>&ndash;&gt;-->
<!--      <el-form-item label="是否启用：" :label-width="data.formLabelWidth" prop="status">-->
<!--        <el-radio v-model="data.form.status" label="1">禁用</el-radio>-->
<!--        <el-radio v-model="data.form.status" label="2">启用</el-radio>-->
<!--      </el-form-item>-->
<!--      <el-form-item label="角色：" :label-width="data.formLabelWidth" prop="role">-->
<!--        <el-checkbox-group v-model="data.form.role">-->
<!--          <el-checkbox v-for="item in data.roleItem" :key="item.role" :label="item.role">{{ item.name }}</el-checkbox>-->
<!--        </el-checkbox-group>-->
<!--      </el-form-item>-->
<!--      <el-form-item label="按钮：" :label-width="data.formLabelWidth">-->
<!--        <template v-if="data.btnPerm.length > 0">-->
<!--          <div v-for="item in data.btnPerm">-->
<!--            <h4>{{ item.name }}</h4>-->
<!--            <template v-if="item.perm && item.perm.length > 0">-->
<!--              <el-checkbox-group v-model="data.form.btnPerm">-->
<!--                <el-checkbox v-for="buttons in item.perm" :key="buttons.value" :label="buttons.value">{{-->
<!--                    buttons.name-->
<!--                  }}-->
<!--                </el-checkbox>-->
<!--              </el-checkbox-group>-->
<!--            </template>-->
<!--          </div>-->
<!--        </template>-->
<!--      </el-form-item>-->
<!--    </el-form>-->
<!--    <div slot="footer" class="dialog-footer">-->
<!--      <el-button @click="close">取消</el-button>-->
<!--      <el-button type="danger" :loading="data.submitLoading" @click="submit('addInfoForm')">确定</el-button>-->
<!--    </div>-->
<!--  </el-dialog>-->

<!--</template>-->

<!--<script>-->
<!--import {validateEmail} from "@/utils/validateEmail";-->

<!--export default {-->
<!--  name: "dialog",-->
<!--  data() {-->
<!--    //验证用户名-->
<!--    let validateUsername = (rule, value, callback) => {-->
<!--      if (value === '') {-->
<!--        callback(new Error('请输入用户名'))-->
<!--      } else if (validateEmail(value)) {-->
<!--        callback(new Error('用户名格式有误'));-->
<!--      } else {-->
<!--        callback(); //true-->
<!--      }-->
<!--    }-->

<!--    // 验证密码-->
<!--    let validatePassword = (rule, value, callback) => {-->
<!--      /**-->
<!--       * 业务逻辑-->
<!--       * 1、编辑状态：-->
<!--       *    需要检验：data.form.id存在并且，密码不为空时-->
<!--       *    不需要检验：data.form.id存在并且，密码为空时-->
<!--       *-->
<!--       * 2、添加状态-->
<!--       *    需要检验：data.form.id不存在-->
<!--       */-->
<!--      if (data.form.id && !value) {-->
<!--        callback();-->
<!--      }-->
<!--      if ((data.form.id && value) || !data.form.id) {-->
<!--        // 过滤后的数据-->
<!--        if (value) {-->
<!--          data.form.password = stripscript(value);-->
<!--          value = data.form.password;-->
<!--        }-->
<!--        if (value === '') {-->
<!--          callback(new Error("请输入密码"));-->
<!--        } else if (validatePass(value)) {-->
<!--          callback(new Error("密码为6至20位数字+字母"));-->
<!--        } else {-->
<!--          callback();-->
<!--        }-->
<!--      }-->
<!--    }-->

<!--    return {-->
<!--      dialog_info_flag: false,  // 弹窗标记-->
<!--      formLabelWidth: '90px',-->
<!--      form: {-->
<!--        username: "",-->
<!--        truename: "",-->
<!--        password: "",-->
<!--        phone: "",-->
<!--        region: "",-->
<!--        status: "2",-->
<!--        role: [],-->
<!--        btnPerm: []-->
<!--      },-->
<!--      rules: {-->
<!--        username: [-->
<!--          {validator: validateUsername, trigger: 'blur'}-->
<!--        ],-->
<!--        password: [-->
<!--          {validator: validatePassword, trigger: 'blur'}-->
<!--        ],-->
<!--        role: [-->
<!--          {required: true, message: "请选择角色", trigger: 'change'}-->
<!--        ]-->
<!--      },-->
<!--      // 角色选择-->
<!--      roleItem: [],-->
<!--      // 按钮权限-->
<!--      btnPerm: [],-->
<!--      // 按钮加载-->
<!--      submitLoading: false-->
<!--    }-->

<!--    //TODO 学习验证密码的思路-->

<!--  },-->
<!--  props: {-->
<!--    flag: {-->
<!--      type: Boolean,-->
<!--      default: false-->
<!--    },-->
<!--    editData: {-->
<!--      type: Object,-->
<!--      default: () => {-->
<!--      }-->
<!--    }-->
<!--  },-->
<!--  watch: {-->
<!--    flag(newValue, oldValue) {-->
<!--      console.log('newValue&ndash;&gt;', newValue)-->
<!--      console.log('oldValue&ndash;&gt;', oldValue)-->
<!--      this.dialog_info_flag = newValue-->
<!--    },-->
<!--    editData: {-->
<!--      handler(newValue, oldValue) {-->
<!--        console.log('newValue&ndash;&gt;', newValue)-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->

<!--</style>-->
