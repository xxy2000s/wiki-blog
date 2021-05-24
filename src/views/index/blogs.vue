
<template>
<div class="main">
<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1">
    <router-link to="/blogs/timeline">
      时间戳
    </router-link>
  </el-menu-item>
  <el-submenu index="2">
    <template #title>力扣相关</template>
    <el-menu-item index="2-1">树</el-menu-item>
    <el-menu-item index="2-2">图</el-menu-item>
    <el-menu-item index="2-3">搜索</el-menu-item>
    <el-submenu index="2-4">
      <template #title>排序</template>
      <el-menu-item index="2-4-1">堆排</el-menu-item>
      <el-menu-item index="2-4-2">快排</el-menu-item>
      <el-menu-item index="2-4-3">选择排序</el-menu-item>
    </el-submenu>
  </el-submenu>

  <el-submenu index="3">
    <template #title>后端</template>
    <el-menu-item index="3-1">go基础</el-menu-item>
    <el-menu-item index="3-2">go算法</el-menu-item>
    <el-menu-item index="3-3">go实例</el-menu-item>
  </el-submenu>

  <el-menu-item index="4">
      <router-link to="/article">
          <el-button type="success">写文章</el-button>
      </router-link>
  </el-menu-item>

  </el-menu>

</div>

<div>
<el-row :gutter="24" v-for="ID in article.length" :key=ID >
  <el-col :span="24">
    <router-link :to="{path: '/detail/' + article[ID-1]}">
    <el-card shadow="hover" style="text-align: center" id="card">
      {{title[ID-1]}}
    </el-card>
    </router-link>
  </el-col>
</el-row>

</div>

  <router-view></router-view>

<div class="line"></div>

</template>

<script>

import {getArticleList} from "../../api/getArticleList.js"
import { showArticle } from '../../api/showArticle.js';
  export default {
    data() {
      return {
        activeIndex: '1',
        //activeIndex2: '1'
        article:[],
        title: [],
      };
    },
    mounted(){
        this.init()
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      showArticleList(){
          getArticleList(1)
          .then((res)=>{
              for(var i=0;i<=res.length;i++){
                  this.article.push(res[i].id)
                  this.title.push(res[i].title)
              }
              console.log(this.article.length)
          })
          .catch((err)=>{
              console.log(err.data)
          })
      },
      show(id){
          showArticle(id)
            .then((res)=>{
                this.content = (res.content)
                this.title = res.title
                this.contentEditor.setValue(this.content)
                //console.log(res.data.id)
            })
            .catch((err)=>{
                console.log(err)
            })
      },
      init(){
          this.showArticleList()
      }
    },
  }
</script>

<style scope="scoped">
    #card{
        height: 120px;
        margin-bottom: 15px;
    }

/* 下面两个样式用于消除router link下划线 */
a {
  text-decoration: none;
}     
.router-link-active {
  text-decoration: none;
}
</style>
