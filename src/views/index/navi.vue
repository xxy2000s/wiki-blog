
<template>
  <!-- <el=menu :default-openeds="['1', ]"> 自动展开-->


  <el-container style="height: calc(100vh - 70px); border: 1px solid #eee">
    <el-aside :class="[isCollapse?'width-hide':'width-show']"
              style="overflow-x:hidden;background-color: rgb(238, 241, 246)">

      <el-menu @open="handleOpen"
               @close="handleClose"
               :collapse="isCollapse">
        <el-menu-item @click="clp()"
                      :label="!isCollapse">
          <el-radio-group v-model="isCollapse">
            <div><i :class="[isCollapse?'el-icon-s-unfold':'el-icon-s-fold']"></i></div>
          </el-radio-group>
        </el-menu-item>
        <el-submenu index="1">
          <template #title><i class="el-icon-message"></i><span>计算机基础</span></template>
          <el-submenu index="1-1">
            <template #title>专业课</template>
            <router-link to="menu1-1-1">
              <el-menu-item index="1-1-1">计网</el-menu-item>
            </router-link>
            <router-link to="menu1-1-2">
              <el-menu-item index="1-1-2">操作系统</el-menu-item>
            </router-link>
            <router-link to="menu1-1-3">
              <el-menu-item index="1-1-3">数据结构</el-menu-item>
            </router-link>

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
          <template #title><i class="el-icon-menu"></i><span>工作</span></template>
          <el-submenu index="2-1">
            <template #title>八股文</template>
            <el-menu-item index="2-1-1">计网</el-menu-item>
            <el-menu-item index="2-1-2">操作系统</el-menu-item>
            <el-menu-item index="2-1-3">数据库</el-menu-item>
            <el-menu-item index="2-1-4">redis</el-menu-item>
            <el-menu-item index="2-1-4">语言</el-menu-item>
          </el-submenu>
          <el-menu-item index="2-2">
            <template #title>刷题</template>
            <!-- <el-menu-item index="2-2-1">leetcode</el-menu-item>
            <el-menu-item index="2-2-2">牛客</el-menu-item>
            <el-menu-item index="2-2-3">PAT</el-menu-item>
            <el-menu-item index="2-2-4">acwing</el-menu-item>
            <el-menu-item index="2-2-4">算法仓库</el-menu-item> -->
          </el-menu-item>
          <el-submenu index="2-3">
            <template #title>项目</template>
            <router-link to="menu2-3-1">
              <el-menu-item index="2-3-1">写个raft</el-menu-item>
            </router-link>
            <router-link to="menu2-3-2">
              <el-menu-item index="2-3-2">博客</el-menu-item>
            </router-link>
            <router-link to="menu2-3-3">
              <el-menu-item index="2-3-3">找个秒杀商城</el-menu-item>
            </router-link>
            <router-link to="menu2-3-4">
              <el-menu-item index="2-3-4">DNS</el-menu-item>
            </router-link>
            <router-link to="menu2-3-5">
              <el-menu-item index="2-3-5">项目仓库</el-menu-item>
            </router-link>
          </el-submenu>
          <el-menu-item index="2-4">
            <template #title>简历</template>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template #title><i class="el-icon-share"></i><span>外链</span></template>
          <el-submenu index="3-1">
            <template #title>领域</template>
            <router-link to="menu3-1-1">
              <el-menu-item index="3-1-1">后端</el-menu-item>
            </router-link>
            <router-link to="menu3-1-2">
              <el-menu-item index="3-1-2">前端</el-menu-item>
            </router-link>
          </el-submenu>
          <router-link to="menu3-2">
            <el-menu-item index="3-2">
              <template #title>工具</template>
            </el-menu-item>
          </router-link>
          <router-link to="menu3-3">
            <el-menu-item index="3-3">
              <template #title>教程</template>
            </el-menu-item>
          </router-link>
          <router-link to="menu3-4">
            <el-menu-item index="3-4">
              <template #title>项目</template>
            </el-menu-item>
          </router-link>
          <router-link to="menu3-5">
            <el-menu-item index="3-5">
              <template #title>生活</template>
            </el-menu-item>
          </router-link>
          <router-link to="menu3-6">
            <el-menu-item index="3-6">
              <template #title>番组</template>
            </el-menu-item>
          </router-link>
        </el-submenu>
      </el-menu>
    </el-aside>

    <router-view />
  </el-container>

</template>

<script>
   export default {
     data(){
       return{
          isCollapse: true,
       }
     },
    methods: {
      clp(){
          this.isCollapse = !this.isCollapse
      }
    }
  };
</script>

<style scoped>
.width-hide {
  width: auto !important;
}
.width-show {
  width: 200px !important;
}
.el-menu--collapse {
  width: 70px;
}
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
