<template>
<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1">
    <router-link to="/" ><el-button type="primary" round>主页</el-button></router-link>
  </el-menu-item>

  <el-menu-item index="2">
    <router-link to="/navi" ><el-button type="primary" round>导航</el-button></router-link>
  </el-menu-item>

  <el-menu-item index="3">
      <router-link to="/todo"><el-button type="primary" round>待办</el-button></router-link>
  </el-menu-item>

  <el-menu-item index="4">
      <router-link to="/blogs"><el-button type="primary" round>文章</el-button></router-link>
  </el-menu-item>
</el-menu>
<div class="line"></div>


  <!-- <el-container class="box-shadow">
    <nav>
    <router-link to="/" ><el-button type="primary" round>主页</el-button></router-link>
    <router-link to="/navi" ><el-button type="primary" round>导航</el-button></router-link>
    <router-link to="/todo"><el-button type="primary" round>待办</el-button></router-link>
    <router-link to="/test"><el-button type="primary" round>文章</el-button></router-link>
    </nav>
  </el-container> -->

  <router-view></router-view>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" /> -->

</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  // components: {
  //   HelloWorld
  // }
}
</script>
<style scoped="scoped">
    a{
      margin: 0 0rem;
    }
</style>