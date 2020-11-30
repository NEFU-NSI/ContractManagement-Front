<!--<template>-->
<!--  <div>-->
<!--    <el-table>-->
<!--      <el-table-column v-if="tableConfig.selection" type="selection" width="55"></el-table-column>-->
<!--      <template v-for="item in tableConfig.tHead">-->
<!--        &lt;!&ndash;        v-solt&ndash;&gt;-->
<!--        <el-table-column-->
<!--            :key="item.field"-->
<!--            :prop="item.field"-->
<!--            :label="item.label"-->
<!--            :width="item.width"-->
<!--            v-if="item.columnType === 'slot'">-->
<!--          <template slot-scope="scope">-->
<!--            <slot :name="item.slotName" :data="scope.row"></slot>-->
<!--          </template>-->
<!--        </el-table-column>-->

<!--        &lt;!&ndash;        文本数据渲染&ndash;&gt;-->
<!--        <el-table-column-->
<!--            :key="item.field"-->
<!--            :prop="item.field"-->
<!--            :label="item.label"-->
<!--            :width="item.width"-->
<!--            v-else>-->
<!--        </el-table-column>-->
<!--      </template>-->

<!--      <el-pagination-->
<!--          v-if="tableConfig.paginationShow"-->
<!--          @size-change="handleSizeChange"-->
<!--          @current-change="handleCurrentChange"-->
<!--          :current-page="currentPage"-->
<!--          :page-sizes="pageSizes"-->
<!--          :page-size="pageSize"-->
<!--          :layout="tableConfig.paginationLayout"-->
<!--          :total="total"-->
<!--          background-->
<!--      ></el-pagination>-->
<!--    </el-table>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  name: "index",-->
<!--  data() {-->
<!--    return {-->
<!--      tableConfig: {-->
<!--        selection: true,-->
<!--        recordCheckbox: false,-->
<!--        requestData: {},-->
<!--        tHead: [],-->
<!--        paginationLayout: "total, sizes, prev, pager, next, jumper",-->
<!--        paginationShow: true-->
<!--      },-->
<!--      tableData: []-->
<!--    }-->
<!--  },-->
<!--  props: {-->
<!--    config: {-->
<!--      type: Object,-->
<!--      default: () => {-->
<!--      }-->
<!--    }-->
<!--  },-->
<!--  beforeMount() {-->
<!--    console.log('beforeMount&ndash;&gt;')-->
<!--    // TODO 思考为什么在beforeMount里面初始化数据-->
<!--    this.initTableConfig()-->
<!--  },-->
<!--  mounted() {-->
<!--    console.log('mount&ndash;&gt;')-->
<!--  },-->
<!--  methods: {-->
<!--    initTableConfig() {-->
<!--      //TODO 借鉴-->
<!--      let configData = this.config-->
<!--      let keys = Object.keys(this.tableConfig)-->
<!--      for (let key in configData) {-->
<!--        if (keys.includes(key)) {-->
<!--          this.tableConfig[key] = configData[key]-->
<!--        }-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->

<!--</style>-->
