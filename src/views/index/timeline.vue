
<template>
<div id="timeline">

  <div class="block">
    <el-timeline v-for="idx in title.length" :key=idx>
    <el-timeline-item :timestamp="createList[idx-1]" placement="top">
      <el-card >
        <router-link :to="{path: '/detail/'+ID[idx-1]}">
            <el-link type="primary"><h2>{{title[idx-1]}}</h2></el-link>
        </router-link>
        <p class="alter-color" v-if="createList[idx-1]!=updateList[idx-1]"> 修改于 {{updateList[idx-1]}}</p>
      </el-card>
    </el-timeline-item>
  </el-timeline>
  <!-- <el-timeline>
    <el-timeline-item timestamp="2018/4/12" placement="top">
      <el-card>
        <h4>更新 Github 模板</h4>
        <p>王小虎 提交于 2018/4/12 20:46</p>
      </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="2018/4/3" placement="top">
      <el-card>
        <h4>更新 Github 模板</h4>
        <p>王小虎 提交于 2018/4/3 20:46</p>
      </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="2018/4/2" placement="top">
      <el-card>
        <h4>更新 Github 模板</h4>
        <p>王小虎 提交于 2018/4/2 20:46</p>
      </el-card>
    </el-timeline-item>
  </el-timeline> -->
</div>
</div>

</template>
<script>

import {getArticleList} from "../../api/getArticleList.js"

export default{
  data(){
      return{
        ID: [],
        title: [],
        createList:[],
        updateList:[],
    }
  },
  mounted(){
      this.show()  
  },
  methods: {
      show(){
          getArticleList(1)
          .then((res)=>{
              for(var i=0;i<res.length;i++){
                  this.title.push(res[i].title)
                  this.createList.push(res[i].created_at)
                  this.updateList.push(res[i].updated_at)
                  this.ID.push(res[i].id)
              }
          })
          .catch((err)=>{
              console.log(err)
          })
      },
       scroll(){
                //console.log("打印log日志");实时看下效果
                console.log("开始滚动！");
                // window.addEventListener('scroll',()=>{console.log(window.scrollY)})
            }
            
  }
}
</script>


<style>
#timeline{
        width: 1000px;
    margin: 30px auto 60px auto;
    padding: 0 50px;
}
</style>
