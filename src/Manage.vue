
<template>
<el-container style="height: 740px; border: 1px solid #eee">
  <el-aside width="200px" style="overflow-x:hidden;background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1', '3']">
      <el-submenu index="1">
        <template #title><i class="el-icon-message"></i>导航一</template>
        <el-menu-item-group>
          <template #title>分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template #title>选项4</template>
          <el-menu-item index="1-4-1">选项4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="2">
        <template #title><i class="el-icon-menu"></i>导航二</template>
        <el-menu-item-group>
          <template #title>分组一</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="2-4">
          <template #title>选项4</template>
          <el-menu-item index="2-4-1">选项4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="3">
        <template #title><i class="el-icon-setting"></i>导航三</template>
        <el-menu-item-group>
          <template #title>分组一</template>
          <el-menu-item index="3-1">选项1</el-menu-item>
          <el-menu-item index="3-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="3-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="3-4">
          <template #title>选项4</template>
          <el-menu-item index="3-4-1">选项4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
  </el-aside>

  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <template #dropdown>
          <el-dropdown-menu>
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <span>王小虎</span>
    </el-header> 

    <el-main>
      <el-table :data="tableData">
        <el-table-column prop="date" label="日期" width="140">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column>
      </el-table>
    </el-main>
    </el-container>
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

.el-container{
    overflow: hidden;

}
 /*去掉超链接下划线*/
 a{ TEXT-DECORATION:none; color:#409EFF}
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
