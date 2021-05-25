<template>
<div class="block img-background">
  <el-timeline v-for="idx in title.length" :key=idx>
    <el-timeline-item :timestamp="createList[idx-1]" placement="top">
      <el-card style="opacity: 0.8">
        <router-link :to="{path: '/detail/'+ID[idx-1]}">
            <el-link type="primary"><h2>{{title[idx-1]}}</h2></el-link>
        </router-link>
        <p class="alter-color" v-if="createList[idx-1]!=updateList[idx-1]"> 修改于 {{updateList[idx-1]}}</p>
      </el-card>
    </el-timeline-item>
  </el-timeline>
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
      }
  }
}
</script>

<style >

.alter-color{
    color: #67C23A;
}

.img-background{
    width: 100%;
    height: 100%;
    background: url("../../assets/imgs/background.jpg");
    background-position: center center;
    background-repeat:  no-repeat;
    background-size: cover;
    
}


a {
  text-decoration: none;
}     
.router-link-active {
  text-decoration: none;
}
</style>
