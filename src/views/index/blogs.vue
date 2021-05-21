
<template>
<div class="main">
<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1">
      <router-link to="/blogs/timeline">
          时间戳
      </router-link>
  </el-menu-item>
  <el-submenu index="2">
    <template #title>力扣相关</template>
    <el-menu-item index="2-1">树</el-menu-item>
    <el-menu-item index="2-2">图</el-menu-item>
    <el-menu-item index="2-3">搜索</el-menu-item>
    <el-submenu index="2-4">
      <template #title>排序</template>
      <el-menu-item index="2-4-1">堆排</el-menu-item>
      <el-menu-item index="2-4-2">快排</el-menu-item>
      <el-menu-item index="2-4-3">选择排序</el-menu-item>
    </el-submenu>
  </el-submenu>

  <el-submenu index="3">
    <template #title>后端</template>
    <el-menu-item index="3-1">go基础</el-menu-item>
    <el-menu-item index="3-2">go算法</el-menu-item>
    <el-menu-item index="3-3">go实例</el-menu-item>
  </el-submenu>

  <el-menu-item index="4">
      <router-link to="/article">
          <el-button type="success">写文章</el-button>
      </router-link>
  </el-menu-item>
</el-menu>
</div>

  <router-view></router-view>

<div class="line"></div>

</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        //activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scope="scoped">
    
</style>
