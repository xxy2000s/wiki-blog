
<template>
  <div>
    <!-- <el-menu :default-active="activeIndex"
             class="el-menu-demo"
             mode="horizontal"
             @select="handleSelect">
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

      <div class="manage-right">
        <el-menu-item index="5">
          <router-link to="/management">
            <el-button type="success"
                       plain>后台管理</el-button>
          </router-link>
        </el-menu-item>
      </div>
    </el-menu> -->
  </div>

  <!-- <div class="img-background">
<el-row :gutter="12" v-for="ID in article.length" :key=ID >
  <el-col :span="12" class="article-center">
    <router-link :to="{path: '/detail/' + article[ID-1]}">
    <el-card shadow="hover" class="self-hover root" id="card">
      <h2>{{title[ID-1]}}</h2>
    </el-card>
    </router-link>
  </el-col>
</el-row>
</div> -->


  <div class="l-content">
    <div class="l-wrapper">
      <div class="l-grid">
        <article class="m-article-card"
                 v-for="ID in article.length"
                 :key=ID>
          <router-link :to="{path: '/detail/' + article[ID-1]}">
            <div class="m-article-card__picture">
              <img class="m-article-card__picture-background"
                   :src="'src/assets/imgs/back'+(ID%4)+'.jpg'"
                   loading="lazy">
            </div>

            <div class="m-article-card__info">
              <a class="m-article-card__tag">工具利器</a>
              <a class="m-article-card__info-link"
                 aria-label="十佳 AI 产品工具，为生活添彩">
                <div>
                  <h2 class="m-article-card__title js-article-card-title "
                      title="{{title[ID-1]}}"
                      style="">
                    {{title[ID-1]}}
                  </h2>
                </div>
                <div class="m-article-card__timestamp">
                  <span>发布于</span>
                  <span>&nbsp;•&nbsp;</span>
                  <span>{{createTime[ID-1]}}</span>
                </div>
              </a>
            </div>
          </router-link>
        </article>
      </div>
    </div>
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
        createTime:[],
        content:[],
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
                  this.createTime.push(res[i].created_at)
                  this.content.push(res[i].content)
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


<style scoped src='../../assets/css/article.css'></style>
<style scoped>
.router-link-active {
  text-decoration: #409eff;
}
.self-hover {
  text-align: center;
  color: #409eff;
  opacity: 0.85;
  border-radius: 24px;
}
:root {
  --article-shadow-hover: 0 4px 60px 0 rgb(0 0 0 / 83%);
}
#card {
  height: 120px;
  margin-bottom: 15px;
}

.manage-right {
  float: right;
}

.article-center {
  margin-left: 25%;
  margin-right: 25%;
}

/* .img-background{
    width: 100%;
    height: 110%;
    background: url("https://img.susundingkai.cn:8888/images/2021/05/25/59190594_p0.jpg");
    background-position: center center;
    background-repeat:  no-repeat;
    background-size: cover;
    overflow-x: hidden;
} */

/* 下面两个样式用于消除router link下划线 */
a {
  text-decoration: none;
}
.router-link-active {
  text-decoration: none;
}
</style>
