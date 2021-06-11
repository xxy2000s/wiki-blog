
<template>
<el-progress type="dashboard" :percentage="percentage">
  <template #default="{ percentage }">
    <span class="percentage-value">{{ percentage }}%</span>
    <span class="percentage-label">计网</span>
  </template>
</el-progress><div>
  <el-button-group>
    <el-button icon="el-icon-minus" @click="decrease"></el-button>
    <el-button icon="el-icon-plus" @click="increase"></el-button>
  </el-button-group>
</div>
<h2 style="text-align:center">编程语言</h2>
<div style="width: 500px;margin: auto;" >
<el-progress :text-inside="true" :stroke-width="30" :percentage="javascript" class="progress">
  <span class="pos-left">javascript</span>
  <span>{{javascript}}%</span>
</el-progress>
<el-progress :text-inside="true" :stroke-width="30" :percentage="html" status="success" class="progress">
  <span class="pos-left">html</span>
  <span>{{html}}%</span>
</el-progress>
<el-progress :text-inside="true" :stroke-width="30" :percentage="css" status="warning" class="progress">
  <span class="pos-left">css</span>
  <span>{{css}}%</span>
</el-progress>
<el-progress :text-inside="true" :stroke-width="30" :percentage="go"  class="progress">
  <span class="pos-left">go</span>
  <span>{{go}}%</span>
</el-progress>
<el-progress :text-inside="true" :stroke-width="30" :percentage="python" class="progress">
  <span class="pos-left">python</span>
  <span>{{python}}%</span>
</el-progress>
<el-progress :text-inside="true" :stroke-width="30" :percentage="vue" class="progress">
  <span class="pos-left">vue</span>
  <span>{{vue}}%</span>
</el-progress>
</div>
</template>

<script>
  export default {
    data() {
      return {
        percentage: 10,
        colors: [
          {color: '#f56c6c', percentage: 20},
          {color: '#e6a23c', percentage: 40},
          {color: '#5cb87a', percentage: 60},
          {color: '#1989fa', percentage: 80},
          {color: '#6f7ad3', percentage: 100}
        ],
        javascript: 70,
        html: 100,
        css: 80,
        go: 60,
        python: 60,
        vue: 70,
      };
    },
    methods: {
      increase() {
        this.percentage += 10;
        if (this.percentage > 100) {
          this.percentage = 100;
        }
      },
      decrease() {
        this.percentage -= 10;
        if (this.percentage < 0) {
          this.percentage = 0;
        }
      }
    }
  }
</script>

<style scoped>
  .progress{
      margin-top: 20px;
  }
  .pos-left{
      position:absolute;
      left: 20px;
  }
</style>>

