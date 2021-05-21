
<template>
<el-row>
</el-row>

<el-row :gutter="20">
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
  <el-col :span="6">
    <div class="grid-content">
    <router-link to="/navi/frontend">
        <el-button type="primary" icon="el-icon-folder">前端</el-button>
    </router-link>
    </div>
  </el-col>
  <el-col :span="6">
    <div class="grid-content">
    <router-link to="/navi/backend">
        <el-button type="primary" icon="el-icon-folder">后端</el-button>
    </router-link>
    </div>
  </el-col>
</el-row>

<router-view></router-view>


<el-row>
  <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
</el-row>
<el-row>
  <el-col :span="12"><div class="grid-content bg-purple">娱乐</div></el-col>
  <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
</el-row>
<el-row>
  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
</el-row>
<el-row>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
</el-row>
<el-row>
  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
</el-row>
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
  
</script>

<style>
  .el-row {
    margin-bottom: 20px;
    /* &:last-child {
      margin-bottom: 0;
    } */
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
