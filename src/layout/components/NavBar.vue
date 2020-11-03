<template>
  <div>
    <!--    导航栏-->
    <div class="nav-bar">
      <!--      折叠按钮-->
      <div class="hambuger-container" @click="trigger">
        <i :class="isFold"/>
      </div>
      <!--      面包屑导航-->
      <el-breadcrumb>
        <el-breadcrumb-item v-for="item in breadcrumbList" :key="item.path">
          <span v-if="item.name">{{ item.name }}</span>
          <router-link v-else :to="item.name">{{ item.name }}</router-link>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!--    历史标签栏-->
    <div class="tabs-view-container">
      <span
          v-for="item in tabList"
          :key='item.path'
          @click="goTo(item)"
          :class="isActive(item)"
      >
        {{ item.name }}
        <i class="el-icon-close"
           v-if="item.path!='/'"
           @click.stop="removeTab(item)"
        >
        </i>
      </span>
      <span class="tabs-view-item" style="float: right" @click="closeAllTab">全部关闭</span>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "NavBar",
  data() {
    return {
      breadcrumbList: []
    }
  },
  computed: {
    isActive() {
      return function (tab) {
        if (tab.path == this.$route.path) {
          return "tabs-view-item-active";
        }
        return "tabs-view-item";
      }
    },
    //利用computed动态改变css样式
    isFold() {
      return this.$store.state.collapse ? "el-icon-s-unfold" : "el-icon-s-fold"
    },
    ...mapState(['tabList'])
  },
  methods: {
    //移除历史标签选项
    removeTab(tab) {
      this.$store.commit('removeTab', tab)
      //关闭的标签正好是当前标签
      if (tab.path == this.$route.path) {
        let tabList = this.$store.state.tabList
        this.$router.push({path: tabList[tabList.length - 1].path})
      }
    },
    //点击历史标签栏进入历史页面
    goTo(tab) {
      this.$router.push({path: tab.path})
    },
    // 关闭所有导航栏
    closeAllTab() {
      this.$store.commit('resetTab')
      this.$router.push('/')
    },
    /**
     * 折叠右侧导航栏
     */
    trigger() {
      this.$store.commit('trigger')
    }
  }
}
</script>

<style scoped>
.nav-bar {
  display: flex;
  align-items: center;
  padding-left: 15px;
  padding-right: 30px;
  height: 50px;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}

.hambuger-container {
  font-size: 1.25rem;
  cursor: pointer;
  margin-right: 24px;
}

.tabs-view-container {
  padding-left: 10px;
  padding-right: 10px;
  height: 33px;
  background: #fff;
  border-bottom: 1px solid #d8dce5;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
}

.tabs-view-item {
  display: inline-block;
  cursor: pointer;
  height: 25px;
  line-height: 25px;
  border: 1px solid #d8dce5;
  color: #495060;
  background: #fff;
  padding: 0 8px;
  font-size: 12px;
  margin-top: 4px;
  margin-left: 5px;
}

.tabs-view-item-active {
  display: inline-block;
  cursor: pointer;
  height: 26px;
  line-height: 26px;
  padding: 0 8px;
  font-size: 12px;
  margin-top: 4px;
  margin-left: 5px;
  background-color: #42b983;
  color: #fff;
  border-color: #42b983;
}

.tabs-view-item-active:before {
  content: "";
  background: #fff;
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  position: relative;
  margin-right: 2px;
}

.el-icon-close {
  padding: 0.1rem;
}

.el-icon-close:hover {
  border-radius: 50%;
  background: #b4bccc;
  transition-duration: 0.3s;
}

.right-menu {
  margin-left: auto;
  display: flex;
  align-items: center;
}

.el-icon-caret-bottom {
  margin-left: 0.5rem;
  font-size: 0.75rem;
}

</style>
