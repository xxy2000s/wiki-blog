
<template>

  <div>
    <div class="mask"
         v-if="showModal"
         @click="showModal=false"></div>
    <div class="pop"
         v-if="showModal">
      <el-row style="padding: 12px;">
        <el-col :span="4"
                v-for="(o, index) in 4"
                :key="o"
                :offset="1"
                style="text-align:center">
          <el-card :body-style="{ padding: '0px' }"
                   shadow="hover">
            <a :href="sites[index][1]">
              <img :src="urls[index]"
                   height="200"
                   width="300"
                   class="image">
              <div style="padding: 14px; opacity: 0.95">
                <span>{{sites[index][0]}}</span>
              </div>
            </a>
          </el-card>
        </el-col>
      </el-row>

      <!-- <button @click="showModal=false" class="btn">点击出现弹框</button> -->
    </div>
    <button @click="showModal=true"
            class="btn">点击出现弹框</button>
  </div>
</template>



<script>
import pic1 from "../../../assets/imgs/stream.jpg"
import pic2 from "../../../assets/imgs/bird.jpg"
import pic3 from "../../../assets/imgs/deer.jpg"
import pic4 from "../../../assets/imgs/dog.jpg"

  export default {
    data() {
      return {
        isCollapse: true,
        showModal: false,
        sites:[
            ["gitbook","https://app.gitbook.com"],
            ["语雀","https://www.yuque.com/dashboard/my_books"],
            ["面经","https://interview.xiaxuyang.com"],
            ["算法","https://docs.xiaxuyang.com"]
            ],
          urls:[pic1,pic2,pic3,pic4],
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
 a{ TEXT-DECORATION:none; color:#409EFF}
  .el-row {
    margin-bottom: 20px;
    /* &:last-child {
      margin-bottom: 0;
    } */
  }
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.mask {
  background-color: #000;
  opacity: 0.3;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.pop {
  background-color: #fff;

  position: fixed;
  top: 100px;
  left: 300px;
  width: calc(100% - 600px);
  height: calc(100% - 200px);
  z-index: 2;
}
.btn {
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid blue;
  padding: 4px 12px;
}
</style>
