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
                @click="update(scope.row)">
              修改名称
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import {getAllDepartmentApi} from "@/apis/departmentApi";

export default {
  name: "index",
  data() {
    return {
      departmentList: []
    }
  },
  created() {
    this.initPage()
  },
  methods: {
    async update(row) {
      console.log('row-->' + JSON.stringify(row))

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
