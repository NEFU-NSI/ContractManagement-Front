<template>
  <div class="container-test">
    <my-bread>测试-用户管理页面</my-bread>
    <!--    <el-button @click="getAllContract">筛选</el-button>-->
    <el-card>
      <!--      <div slot="header">根据筛选条件共查询到 {{ total }} 条结果：</div>-->
      <!--      使用table-->
      <el-table :data="users">
        <el-table-column label="序号" prop="name"></el-table-column>
        <el-table-column label="头像" prop="name"></el-table-column>
        <el-table-column label="姓名" prop="name"></el-table-column>
        <el-table-column label="手机号" prop="name"></el-table-column>
        <el-table-column label="金额" prop="amount"></el-table-column>
        <el-table-column label="公司" prop="company"></el-table-column>
        <el-table-column label="时间" prop="sign"></el-table-column>
        <el-table-column label="序列号" prop="accessories"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button plain type="primary" icon="el-icon-edit" circle></el-button>
            <el-button plain type="danger" icon="el-icon-edit" circle></el-button>
          </template>
        </el-table-column>
      </el-table>
      <!--      &lt;!&ndash;      分页组件&ndash;&gt;-->
      <!--      <el-pagination style="margin-top:20px;text-align:right"-->
      <!--                     background-->
      <!--                     layout="prev, pager, next"-->
      <!--                     @current-change="changePager"-->
      <!--                     :total="total"-->
      <!--      >-->
      <!--      </el-pagination>-->
    </el-card>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      users: ''
    }
  }
}
</script>

<style scoped>

</style>
