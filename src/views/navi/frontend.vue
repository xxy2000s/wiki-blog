
<template>

  <el-space wrap>
    <el-card class="box-card" style="width: 250px" v-for="i in 3" :key="i">
      <template #header>
        <div class="card-header">
          <span>Card name</span>
          <el-button class="button" type="text">Operation button</el-button>
        </div>
      </template>
      <div v-for="o in 4" :key="o" class="text item">
        <el-link type="primary" href="https://code.xiaxuyang.com">博客</el-link>
      </div>
    </el-card>
  </el-space>

</template>

<script>
  
</script>

<style>

</style>
