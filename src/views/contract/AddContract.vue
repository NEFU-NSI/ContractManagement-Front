<template>
  <div>
    <h3>增加合同</h3>
    <el-card>
      <el-form :model="contractForm" ref="contractForm">
        <el-form-item label="合同名称" prop="name">
          <el-input v-model="contractForm.name"></el-input>
        </el-form-item>
        <el-form-item label="公司" prop="company">
          <el-input v-model="contractForm.company"></el-input>
        </el-form-item>
        <el-form-item label="金额" prop="amount">
          <el-input v-model="contractForm.amount"></el-input>
        </el-form-item>
        <el-form-item label="部门" prop="department">
          <el-input v-model="contractForm.department"></el-input>
        </el-form-item>
        <el-form-item label="合同签约时间" prop="sign">
          <el-input v-model="contractForm.sign"></el-input>
        </el-form-item>
        <el-form-item label="合同号" prop="contractNumber">
          <el-input v-model="contractForm.contractNumber"></el-input>
        </el-form-item>
        <el-form-item label="质保到期时间" prop="qualityGuaranteeDatetime">
          <el-input v-model="contractForm.qualityGuaranteeDatetime"></el-input>
        </el-form-item>
        <el-form-item label="维修到期时间" prop="maintenanceDatetime">
          <el-input v-model="contractForm.maintenanceDatetime"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="addContract">添加</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import {addContractApi} from "@/apis/contractApi";

export default {
  name: "AddContract",
  data() {
    return {
      contractForm: {
        accessories: '',
        amount: 0,
        company: '',
        contractNumber: '',
        department: 0,
        maintenanceDatetime: '',
        name: '',
        qualityGuaranteeDatetime: '',
        sign: ''
      },
      rules: []
    }
  },
  methods: {
    async addContract() {
      console.log('触发添加合同事件')
      let resp = await addContractApi(this.contractForm)
      console.log('resp.data-->' + JSON.stringify(resp))
    }
  }
}
</script>

<style scoped>

</style>
