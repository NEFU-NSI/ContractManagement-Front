<template>
  <el-container class="container-home">
    <h3>欢迎登陆合同管理系统</h3>
<!--    &lt;!&ndash;    侧边栏&ndash;&gt;-->
    <!--    <el-aside :width="isOpen?'200px':'64px'">-->
    <!--      &lt;!&ndash; logo &ndash;&gt;-->
    <!--      <div class="logo" :class="{minLogo: !isOpen}"></div>-->
    <!--      &lt;!&ndash; 菜单 &ndash;&gt;-->
    <!--      <el-menu-->
    <!--          :default-active="$route.path"-->
    <!--          background-color="#002033"-->
    <!--          text-color="#fff"-->
    <!--          active-text-color="#ffd04b"-->
    <!--          :collapse="!isOpen"-->
    <!--          :collapse-transition="false"-->
    <!--          router-->
    <!--      >-->
    <!--        <el-menu-item index="/">-->
    <!--          <i class="el-icon-s-home"></i>-->
    <!--          <span slot="title">首页</span>-->
    <!--        </el-menu-item>-->
    <!--        <el-menu-item index="/contract">-->
    <!--          <i class="el-icon-document"></i>-->
    <!--          <span slot="title">合同管理</span>-->
    <!--        </el-menu-item>-->
    <!--        <el-menu-item index="/image">-->
    <!--          <i class="el-icon-picture"></i>-->
    <!--          <span slot="title">素材管理</span>-->
    <!--        </el-menu-item>-->
    <!--        <el-menu-item index="/publish">-->
    <!--          <i class="el-icon-s-promotion"></i>-->
    <!--          <span slot="title">上传文件</span>-->
    <!--        </el-menu-item>-->
    <!--        <el-menu-item index="/userManagement">-->
    <!--          <i class="el-icon-present"></i>-->
    <!--          <span slot="title">用户管理</span>-->
    <!--        </el-menu-item>-->
    <!--        <el-menu-item index="/user">-->
    <!--          <i class="el-icon-setting"></i>-->
    <!--          <span slot="title">个人设置</span>-->
    <!--        </el-menu-item>-->
    <!--        <el-menu-item index="/departMent">-->
    <!--          <i class="el-icon-setting"></i>-->
    <!--          <span slot="title">部门管理</span>-->
    <!--        </el-menu-item>-->
    <!--      </el-menu>-->
    <!--    </el-aside>-->
    <!--    &lt;!&ndash;    主要内容栏&ndash;&gt;-->
    <!--    <el-container>-->
    <!--      &lt;!&ndash;      头部&ndash;&gt;-->
    <!--      <el-header>-->
    <!--        &lt;!&ndash;        缩小左边菜单去&ndash;&gt;-->
    <!--        <span @click="toggleAside" class="el-icon-s-fold icon"></span>-->
    <!--        <span class="text">xxx党员管理系统</span>-->

    <!--        &lt;!&ndash; 下拉菜单用户头像 &ndash;&gt;-->
    <!--        <el-dropdown class="my-dropdown" @command="handler">-->
    <!--          <span class="el-dropdown-link">-->
    <!--            <img class="user-icon" :src="photo" alt/>-->
    <!--            <span class="user-name">{{ name }}</span>-->
    <!--            <i class="el-icon-arrow-down el-icon&#45;&#45;right"></i>-->
    <!--          </span>-->
    <!--          <el-dropdown-menu slot="dropdown">-->
    <!--            <el-dropdown-item icon="el-icon-setting" command="setting">个人设置</el-dropdown-item>-->
    <!--            <el-dropdown-item icon="el-icon-unlock" command="logout">退出登录</el-dropdown-item>-->
    <!--          </el-dropdown-menu>-->
    <!--        </el-dropdown>-->
    <!--      </el-header>-->

    <!--      &lt;!&ndash;      内容展示区&ndash;&gt;-->
    <!--      <el-main>-->
    <!--        &lt;!&ndash; 二级路由的显示位置 &ndash;&gt;-->
    <!--        <router-view></router-view>-->
    <!--      </el-main>-->
    <!--    </el-container>-->
  </el-container>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      // // 表示左菜单是展开还是收起
      // isOpen: true,
      // // 用户名称
      // name: '',
      // // 用户头像
      // photo: ''
    }
  },
  // methods: {
  //   // toggleAside() {
  //   //   // 切换左菜单
  //   //   this.isOpen = !this.isOpen
  //   // },
  //   // //处理指令函数
  //   // handler(command) {
  //   //   // command 值  setting|logout
  //   //   // 如果是 setting  跳转去个人设置  如果是logout  清楚用户信息跳转去登录
  //   //   // if (command === 'setting')
  //   //   // if (command === 'logout')
  //   //   // 如果指令是setting调用的是this.setting() this['setting']()
  //   //   // 如果指令是logout调用的是this.logout() this['logout']()
  //   //   this[command]()
  //   }
}
</script>

<style scoped lang="less">


</style>
