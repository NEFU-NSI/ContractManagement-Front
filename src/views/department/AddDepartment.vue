<template>
  <div>
    <el-button @click="onOpenAdd">添加部门</el-button>
    <el-dialog :visible.sync="isEdit" width="3">
      <div class="dialog-title-container" slot="title">
        添加部门
      </div>
      <el-form size="medium">

        <el-form-item label="部门名称"
                      :rules="{required: true, message: '部门名称不能为空', trigger: 'blur'}">
          <el-input v-model="name" style="width:220px"/>
        </el-form-item>

      </el-form>
      <div slot="footer">
        <el-button @click="isEdit = false">取 消</el-button>
        <el-button type="primary" @click="addDepart">
          确 定
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {addDepartmentApi} from "@/apis/departmentApi";

export default {
  name: "AddDepartment",
  data() {
    return {
      isEdit: false,
      name: ''
    }
  },
  methods: {
    onOpenAdd() {
      this.isEdit = true
    },
    async addDepart() {
      if (this.name) {
        let data = {
          departmentName: this.name
        }
        let resp = await addDepartmentApi(data)
        console.log('添加resp-->', resp)
        if (resp.data.code === 200) {
          this.$message.success('添加成功')
          this.isEdit = false
        } else {
          this.$message.error('添加失败, 请重新添加')
        }
      } else {
        this.$message.error('部门名称不能为空')
      }
    }
  }
}
</script>

<style scoped>

</style>
