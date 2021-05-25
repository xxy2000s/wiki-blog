<template>
<div class="header-margin">
</div>
  <el-carousel :interval="1600000" type="card" height="520px">
    <el-carousel-item v-for="(item, index) in links" :key="item" >
    <div class="block" >
      <a :href="links[index%5]">
        <el-image :src="src[index%5]"></el-image>
      </a>
    </div>        
    </el-carousel-item>
  </el-carousel>

</template>

<script>
import pic1 from "../../assets/imgs/stream.jpg"
import pic2 from "../../assets/imgs/bird.jpg"
import pic3 from "../../assets/imgs/deer.jpg"
import pic4 from "../../assets/imgs/dog.jpg"
import pic5 from "../../assets/imgs/wolf.jpg"
export default{
    data(){
      return{
        links: [
          "https://code.xiaxuyang.com", 
          "https://baidu.com", 
          "https://leetcode-cn.com",
          "https://csdn.com", 
          "https://taobao.com"
          ],
        //src: "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
        src: [pic1, pic2,pic3,pic4,pic5],
        cnt: 0,
      }
    },
    methods:{
      func(){

      }
    }
}
    
</script>

<style>
.header-margin{
    margin-top: 10px;
}
.el-image__inner{
    width: 880px;
}

.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
