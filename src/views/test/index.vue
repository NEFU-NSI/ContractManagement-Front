<!--<template>-->
<!--  <div class="container-test">-->
<!--    <my-bread>测试-订单管理页面</my-bread>-->
<!--    <el-button @click="getAllContract">筛选</el-button>-->
<!--    <el-card>-->
<!--      <div slot="header">根据筛选条件共查询到 {{ total }} 条结果：</div>-->
<!--      &lt;!&ndash;      使用table&ndash;&gt;-->
<!--      <el-table :data="contracts">-->
<!--        <el-table-column label="序号" prop="name"></el-table-column>-->
<!--        <el-table-column label="合同名称" prop="name"></el-table-column>-->
<!--        <el-table-column label="合同号" prop="name"></el-table-column>-->
<!--        <el-table-column label="金额" prop="amount"></el-table-column>-->
<!--        <el-table-column label="公司" prop="company"></el-table-column>-->
<!--        <el-table-column label="时间" prop="sign"></el-table-column>-->
<!--        <el-table-column label="序列号" prop="accessories"></el-table-column>-->
<!--        <el-table-column label="操作">-->
<!--          <template slot-scope="scope">-->
<!--            <el-button plain type="primary" icon="el-icon-edit" circle></el-button>-->
<!--            <el-button plain type="danger" icon="el-icon-edit" circle></el-button>-->
<!--          </template>-->
<!--        </el-table-column>-->
<!--      </el-table>-->
<!--      &lt;!&ndash;      分页组件&ndash;&gt;-->
<!--      <el-pagination style="margin-top:20px;text-align:right"-->
<!--                     background-->
<!--                     layout="prev, pager, next"-->
<!--                     @current-change="changePager"-->
<!--                     :total="total"-->
<!--      >-->
<!--      </el-pagination>-->
<!--    </el-card>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--import MyBread from "@/components/my-bread";-->
<!--import {getContractList} from "@/apis/contractApi";-->

<!--export default {-->
<!--  name: "index",-->
<!--  components: {MyBread},-->
<!--  data() {-->
<!--    return {-->
<!--      total: 0,-->
<!--      contracts: '',-->
<!--      contract: {-->
<!--        name: '',-->
<!--        company: '',-->
<!--        amount: '',-->
<!--        accessories: '',-->
<!--        sign: '',-->
<!--      }-->
<!--    }-->
<!--  },-->
<!--  methods: {-->
<!--    changePager(page) {-->
<!--      console.log('触发改变页面事件')-->
<!--    },-->
<!--    async getAllContract() {-->
<!--      let resp = await getContractList();-->
<!--      console.log(resp)-->
<!--      this.contracts = resp.data.pageContent-->
<!--      console.log('contracts&ndash;&gt;' + this.contracts)-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->

<!--</style>-->
