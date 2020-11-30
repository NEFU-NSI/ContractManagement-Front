<template>
  <el-select v-model="selectValue" placeholder="请选择">
    <el-option v-for="item in initOptionData" :key="item.value" :value="item.value" :label="item.label"></el-option>
  </el-select>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      selectValue: '',
      initOptionData: [],
      option: [
        {value: "name", label: "姓名"},
        {value: "phone", label: "手机号"},
        {value: "email", label: "邮箱"},
        {value: "id", label: "ID"},
        {value: "title", label: "标题"},
      ]
    }
  },
  props: {
    config: {
      type: Object,
      default: () => {
      }
    }
  },

  methods: {
    /**
     * 初始化选项
     */
    initOption() {
      let initData = this.config.init
      let optionArr = []
      if (initData.length === 0) {
        console.log("config的参数是空的，无法显示下拉菜单；")
        return false
      }

      /***
       * 匹配对应的选项
       */
      initData.forEach(item => {
        let arr = this.option.filter(elem => elem.value == item)
        if (arr.length > 0) {
          optionArr.push(arr[0])
        }
      })

      // 数据检验
      if (optionArr.length === 0) {
        console.log("匹配的数据为空！");
        return false;
      }
      // 初始化赋值
      this.initOptionData = optionArr;
      // 初始化搜索类型
      this.selectValue = optionArr[0].value;
    }
  },
  watch: {
    config: {
      handler(newValue, oldValue) {
        console.log('watch-->')
        this.initOption()
      },
      immediate: true  //组件初始化时, 立刻对config监听
    }
  }

}
</script>

<style scoped>

</style>
