<template>
  <div>
    <el-card>
      <el-table :data="contractList">
        <el-table-column
            prop="name"
            label="合同名称"
            align="center"
        >
        </el-table-column>
        <el-table-column
            prop="contractNumber"
            label="合同号"
            align="center">
        </el-table-column>
        <el-table-column
            prop="department"
            label="部门"
            align="center"
        >
        </el-table-column>
        <el-table-column
            prop="amount"
            label="金额"
            align="center"
        >
        </el-table-column>
        <el-table-column
            prop="company"
            label="公司"
            align="center"
        >
        </el-table-column>
        <el-table-column
            prop="sign"
            label="时间"
            align="center"
        >
        </el-table-column>
      </el-table>
    </el-card>

    <!-- 分页 -->
    <el-pagination
        class="pagination-container"
        background
        @current-change="currentChange"
        :current-page="current"
        :page-size="size"
        :total="count"
        :page-sizes="[10]"
        layout="sizes, prev, pager, next, jumper"
    />
  </div>
</template>

<script>
import {getAllContractsApi} from "@/apis/contractApi";

export default {
  name: "index",
  data() {
    return {
      size: 10,
      count: 0,
      current: 1,
      contractList: []
    }
  },
  created() {
    this.initPage()
  },
  methods: {
    currentChange(val) {
      this.current = val
      this.listContracts(this.current, this.size)
    },
    async listContracts(page, size) {
      let resp = await getAllContractsApi(page, size)
      this.contractList = resp.data.data.pageContent
      console.log('all contracts-->' + JSON.stringify(resp))
    },
    async initPage() {
      let resp = await getAllContractsApi(1, 10)
      this.count = resp.data.data.total
      console.log('resp data-->' + JSON.stringify(resp.data.data))
      this.contractList = resp.data.data.pageContent
      console.log('数据-->', this.contractList)
    }
  }
}
</script>

<style scoped>

</style>
