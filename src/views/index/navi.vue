
<template>
  <el-container style="height: 740px; border: 1px solid #eee">
    <el-aside width="200px"
              style="overflow-x:hidden;background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['1', ]">
        <el-submenu index="1">
          <template #title><i class="el-icon-message"></i>计算机基础</template>
          <el-submenu index="1-1">
            <template #title>专业课</template>
            <el-menu-item index="1-1-1">计网</el-menu-item>
            <el-menu-item index="1-1-2">操作系统</el-menu-item>
            <el-menu-item index="1-1-3">数据结构</el-menu-item>

          </el-submenu>
          <el-submenu index="1-2">
            <template #title>网课</template>
            <el-menu-item index="1-2-1">6.824</el-menu-item>
          </el-submenu>
          <el-submenu index="1-5">
            <template #title>Lab</template>
            <el-menu-item index="1-5-1">ostep</el-menu-item>
            <el-menu-item index="1-5-2">CMU 6.824</el-menu-item>
            <el-menu-item index="1-5-3">CSAPP</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="2">
          <template #title><i class="el-icon-menu"></i>工作</template>
          <el-submenu index="2-1">
            <template #title>八股文</template>
            <el-menu-item index="2-1-1">计网</el-menu-item>
            <el-menu-item index="2-1-2">操作系统</el-menu-item>
            <el-menu-item index="2-1-3">数据库</el-menu-item>
            <el-menu-item index="2-1-4">redis</el-menu-item>
            <el-menu-item index="2-1-4">语言</el-menu-item>
          </el-submenu>
          <el-submenu index="2-2">
            <template #title>刷题</template>
            <el-menu-item index="2-2-1">leetcode</el-menu-item>
            <el-menu-item index="2-2-2">牛客</el-menu-item>
            <el-menu-item index="2-2-3">PAT</el-menu-item>
            <el-menu-item index="2-2-4">acwing</el-menu-item>
            <el-menu-item index="2-2-4">算法仓库</el-menu-item>
          </el-submenu>
          <el-submenu index="2-3">
            <template #title>项目</template>
            <el-menu-item index="2-3-1">写个raft</el-menu-item>
            <el-menu-item index="2-3-2">博客</el-menu-item>
            <el-menu-item index="2-3-3">找个秒杀商城</el-menu-item>
            <el-menu-item index="2-3-4">DNS</el-menu-item>
            <el-menu-item index="2-3-4">项目仓库</el-menu-item>
          </el-submenu>
          <el-menu-item index="2-4">
            <template #title>简历</template>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template #title><i class="el-icon-share"></i>外链</template>
          <el-submenu index="3-1">
            <template #title>领域</template>
            <el-menu-item index="3-1-1">后端</el-menu-item>
            <el-menu-item index="3-1-2">前端</el-menu-item>
          </el-submenu>
          <router-link to="/navi/tools">
          <el-menu-item index="3-2">
            <template #title>工具</template>
          </el-menu-item>
          </router-link>
          <router-link to="/navi/cs">
            <el-menu-item index="3-3">
              <template #title>教程</template>
            </el-menu-item>
          </router-link>
          <router-link to="/navi/frontend">
            <el-menu-item index="3-4">
              <template #title>前端</template>
            </el-menu-item>
          </router-link>
          <router-link to="/navi/backend">
            <el-menu-item index="3-4">
              <template #title>后端</template>
            </el-menu-item>
          </router-link>
          <router-link to="/navi/projects">
            <el-menu-item index="3-5">
              <template #title>项目</template>
            </el-menu-item>
          </router-link>
        </el-submenu>
      </el-menu>
    </el-aside>

    <router-view />
    <!-- <el-container>
   <el-row :gutter="60" style="text-align:center;overflow-x:hidden">
  <el-col :span="6">
    <div class="grid-content">
    <router-link to="/navi/cs">
        <el-button type="primary" icon="el-icon-folder">计算机专业课</el-button>
    </router-link>
    </div>
  </el-col>
  <el-col :span="6">
    <div class="grid-content">
    <router-link to="/navi/tools">
        <el-button type="primary" icon="el-icon-folder">工具</el-button>
    </router-link>
    </div>
  </el-col>
  <el-col :span="5">
    <div class="grid-content">
    <router-link to="/navi/frontend">
        <el-button type="primary" icon="el-icon-folder">前端</el-button>
    </router-link>
    </div>
  </el-col>
  <el-col :span="5">
    <div class="grid-content">
    <router-link to="/navi/backend">
        <el-button type="primary" icon="el-icon-folder">后端</el-button>
    </router-link>
    </div>
  </el-col>
    <el-col :span="4">
    <div class="grid-content">
    <router-link to="/navi/projects">
        <el-button type="primary" icon="el-icon-folder">项目</el-button>
    </router-link>
    </div>
  </el-col>
</el-row>
  </el-container> -->
  </el-container>

  <!-- <el-row :gutter="24" style="text-align:center;overflow-x:hidden">
  <el-col :span="5">
    <div class="grid-content">
    <router-link to="/navi/cs">
        <el-button type="primary" icon="el-icon-folder">计算机专业课</el-button>
    </router-link>
    </div>
  </el-col>
  <el-col :span="5">
    <div class="grid-content">
    <router-link to="/navi/tools">
        <el-button type="primary" icon="el-icon-folder">工具</el-button>
    </router-link>
    </div>
  </el-col>
  <el-col :span="5">
    <div class="grid-content">
    <router-link to="/navi/frontend">
        <el-button type="primary" icon="el-icon-folder">前端</el-button>
    </router-link>
    </div>
  </el-col>
  <el-col :span="5">
    <div class="grid-content">
    <router-link to="/navi/backend">
        <el-button type="primary" icon="el-icon-folder">后端</el-button>
    </router-link>
    </div>
  </el-col>
    <el-col :span="4">
    <div class="grid-content">
    <router-link to="/navi/projects">
        <el-button type="primary" icon="el-icon-folder">项目</el-button>
    </router-link>
    </div>
  </el-col>
</el-row> -->

  <!-- <router-view></router-view> -->

  <!-- <el-row :gutter="20">
  <el-col :span="6">
    <div class="grid-content">
    <el-button type="primary" icon="el-icon-folder">计算机专业课</el-button>
    </div>
  </el-col>
  <el-col :span="6"><div class="grid-content bg-purple">工具类</div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple">前端</div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple">后端</div></el-col>
</el-row> -->
</template>

<script>
   export default {
    // data() {
    //   const item = {
    //     date: '2016-05-02',
    //     name: '王小虎',
    //     address: '上海市普陀区金沙江路 1518 弄'
    //   };
    //   return {
    //     tableData: Array(20).fill(item)
    //   }
    // }
  };
</script>

<style scoped>
.el-container {
  overflow: hidden;
}
/*去掉超链接下划线*/
a {
  text-decoration: none;
  color: #409eff;
}
.el-row {
  margin-bottom: 20px;
  /* &:last-child {
      margin-bottom: 0;
    } */
  overflow-x: hidden;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
