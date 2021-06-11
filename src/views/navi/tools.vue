
<template>

<el-row>
</el-row>
  <!-- <div>
    <span>github stars管理插件remu</span>
    <el-divider content-position="right">少年包青天</el-divider>
    <span>饿了别叫妈, 叫饿了么</span>
    <el-divider><i class="el-icon-mobile-phone"></i></el-divider>
    <span>为了无法计算的价值</span>
    <el-divider content-position="right">阿里云</el-divider>
  </div> -->

  <el-row style="padding: 12px;">
 <el-col :span="4" v-for="(o, index) in 4" :key="o" :offset="1" style="text-align:center">
    <el-card :body-style="{ padding: '0px' }" shadow="hover">
      <a :href="sites[index][1]" >
      <img :src="urls[index]" height="200" width="300" class="image" >
      <div style="padding: 14px; opacity: 0.95">
        <span>{{sites[index][0]}}</span>
      </div>
      </a>
    </el-card>
  </el-col>
</el-row>

</template>

<script>
import pic1 from "../../assets/imgs/stream.jpg"
import pic2 from "../../assets/imgs/bird.jpg"
import pic3 from "../../assets/imgs/deer.jpg"
import pic4 from "../../assets/imgs/dog.jpg"
export default{
    data(){
      return{
          sites:[
            ["gitbook","https://app.gitbook.com"],
            ["语雀","https://www.yuque.com/dashboard/my_books"],
            ["面经","https://interview.xiaxuyang.com"],
            ["算法","https://docs.xiaxuyang.com"]
            ],
          urls:[pic1,pic2,pic3,pic4],
      }
        
    }
}
</script>

<style>
 /*去掉超链接下划线*/
 a{ TEXT-DECORATION:none; color:#409EFF}
  .el-row {
    margin-bottom: 20px;
    /* &:last-child {
      margin-bottom: 0;
    } */
  }
</style>
