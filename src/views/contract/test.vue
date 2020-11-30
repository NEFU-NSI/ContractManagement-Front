<template>
  <div>
    <h3>合同测试</h3>
    <select-vue :config="configOption" :selectData.sync="selectData"></select-vue>
  </div>
</template>

<script>
import SelectVue from '../../components/select'

export default {
  name: "test",
  components: {SelectVue},
  data() {
    return {
      configOption: {
        init: ["name", "phone"]
      },
      // 下接菜单的数据
      selectData: {}
    }
  }
}
</script>

<style scoped>

</style>
