<template>
  <div>
    <el-card>
      <el-table :data="noticeList">
        <el-table-column
            label="通知消息"
            prop="message"
            align="center">
        </el-table-column>
        <el-table-column
            label="通知时间"
            prop="messageTime"
            align="center">
        </el-table-column>
        <el-table-column
            label="消息id"
            prop="id"
            align="center">
        </el-table-column>
        <el-table-column
            label="操作"
            align="center">
          <template slot-scope="scope">
            <el-button
                type="primary"
                size="mini"
                @click="remark(scope.row)">
              标记为已读
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>

import {getUserNoticesApi, readNoticeApi} from "@/apis/noticeApi";

export default {
  name: "index",
  data() {
    return {
      noticeList: []
    }
  },
  created() {
    this.initPage()
  },
  methods: {
    async remark(row) {
      console.log('row-->' + JSON.stringify(row))
      if (row.readOrNot) {
        console.log('true')
        this.$message.error('已标记, 请不要重复标记')
      } else {
        console.log('false')
        let resp = await readNoticeApi(row.id)
        console.log('notice resp-->' + resp)
        if (resp.data.code == 200) {
          this.$message.success('标记成功')
        }
        // this.$message.success('标记成功')
      }
    },
    async initPage() {
      let resp = await getUserNoticesApi('aiwenbin')
      console.log('resp data-->', JSON.stringify(resp))
      this.noticeList = resp.data.data.slice(0, 10)
    }
  }
}
</script>

<style scoped>

</style>
