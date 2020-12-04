<template>
  <div>
    <el-card>
      <el-table :data="departmentList">
        <el-table-column
            label="部门id"
            prop="id"
            align="center">
        </el-table-column>
        <el-table-column
            label="部门名称"
            prop="departmentName"
            align="center">
        </el-table-column>
        <el-table-column
            label="操作"
            align="center">
          <template slot-scope="scope">
            <el-button
                type="primary"
                size="mini"
                @click="updateBtn(scope.row)">
              修改名称
            </el-button>
            <el-dialog :visible.sync="openUpdate">
              <div class="dialog-title-container" slot="title">
                更新部门名称
              </div>
              <el-form>
                <el-form-item label="旧名称">
                  <el-input v-model="oldName" readonly></el-input>
                </el-form-item>
                <el-form-item label="新名称">
                  <el-input v-model="newName"></el-input>
                </el-form-item>
              </el-form>
              <div slot="footer">
                <el-button @click="openUpdate = false">取 消</el-button>
                <el-button type="primary" @click="updateEvent">
                  更新
                </el-button>
              </div>
            </el-dialog>

            <el-button
                type="danger"
                size="mini"
                @click="deleteBtn(scope.row)">
              删除部门
            </el-button>
            <el-dialog :visible.sync="openDelete">
              <div class="dialog-title-container" slot="title">
                警告
              </div>
              <span>是否确认删除该部门</span>
              <div slot="footer">
                <el-button @click="openDelete = false">取 消</el-button>
                <el-button type="primary" @click="deleteEvent">
                  确 定
                </el-button>
              </div>
            </el-dialog>

          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import {deleteDepartmentApi, getAllDepartmentApi, updateDepartmentApi} from "@/apis/departmentApi";

export default {
  name: "index",
  data() {
    return {
      oldName: '',
      newName: '',
      openDelete: false,
      departmentList: [],
      row: '',
      openUpdate: false
    }
  },
  created() {
    this.initPage()
  },
  methods: {
    async updateEvent() {
      if (this.newName) {
        let data = {
          departmentName: this.newName
        }
        let departmentId = this.row.id
        let paramsData = {
          departmentId: departmentId
        }
        let resp = await updateDepartmentApi(paramsData, data)
        console.log('更新resp-->', resp)
        // TODO 更新成功的逻辑
        if (resp) {
          await this.initPage()
          this.openUpdate = false
          this.$message.success("更新成功")
        } else {
          this.$message.error("更新失败")
        }
      } else {
        this.$message.error('请填写新的部门名称')
      }
    },
    deleteBtn(row) {
      console.log('row-->', row)
      this.row = row
      this.openDelete = true
    },
    async deleteEvent() {
      if (this.row) {
        let resp = await deleteDepartmentApi(this.row.id)
        console.log('删除resp-->', resp)
        // TODO 删除成功的逻辑
        if (resp) {
          await this.initPage()
          this.openDelete = false
          this.$message.success('删除成功')
        } else {
          this.$message.error("删除失败")
        }

      } else {
        this.$message.error('禁止操作')
      }
    },
    async updateBtn(row) {
      console.log('row-->', row)
      this.row = row
      this.openUpdate = true
      this.oldName = row.departmentName
    },
    async initPage() {
      let resp = await getAllDepartmentApi()
      console.log('depart resp-->' + JSON.stringify(resp))
      this.departmentList = resp.data.data
    }
  }
}
</script>

<style scoped>

</style>
