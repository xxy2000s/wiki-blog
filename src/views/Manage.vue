
<template>
  <el-container style="height: 740px; border: 1px solid #eee">

    <el-aside :class="[isCollapse?'width-hide':'width-show']"
              style="overflow-x:hidden;background-color: rgb(238, 241, 246)">
      <el-menu :collapse="isCollapse">
        <el-menu-item @click="clp()"
                      :label="!isCollapse">
          <el-radio-group v-model="isCollapse">
            <div><i :class="[isCollapse?'el-icon-s-unfold':'el-icon-s-fold']"></i></div>
          </el-radio-group>
        </el-menu-item>
        <router-link to="articles">
          <el-menu-item index="1">

            <i v-if="isCollapse"
               class="el-icon-notebook-2"></i>
            <template #title><i class="el-icon-notebook-2"></i><span>文章管理</span></template>
          </el-menu-item>
        </router-link>

        <router-link to="categories">
          <el-menu-item index="2">
            <div v-if="isCollapse"><i class="el-icon-c-scale-to-original"></i></div>
            <template #title><i class="el-icon-c-scale-to-original"></i><span>分类管理</span></template>
          </el-menu-item>
        </router-link>
        <router-link to="tags">
          <el-menu-item index="3">
            <div v-if="isCollapse"><i class="el-icon-price-tag"></i></div>
            <template #title><i class="el-icon-price-tag"></i><span>标签管理</span></template>
          </el-menu-item>
        </router-link>

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
