
<template>
<div class="blank"
       style="padding-top: 75px;"></div>
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

  <div id="content-down" class="pattern-center ">
    <div class="pattern-attachment-img"> <img src="../../assets/imgs/list-background.jpg"
           class="lazyload"
           onerror="imgError(this,3)"
           style="width: 100%; height: 100%; object-fit: cover; pointer-events: none;"></div>
    <header class="pattern-header ">
      <h1 class="entry-title">文章随笔</h1>
      <router-link to="/article">
        <h3 class="m-button">写文章</h3>
      </router-link>
      <router-link to="/timeline"
                   style="padding-left:30px;">
        <h3 class="m-button">时间戳</h3>
      </router-link>
      <router-link to="/management"
                   style="padding-left:30px;">
        <h3 class="m-button">后台管理</h3>
      </router-link>
    </header>
  </div>
  <div id="content" class="l-content">
    <div class="l-wrapper">
      <div class="l-grid">
        <article class="m-article-card"
                 v-for="ID in article.length"
                 :key=ID>
          <router-link :to="{path: '/detail/' + article[ID-1]}">
            <div class="m-article-card__picture">
              <img class="m-article-card__picture-background"
                   :src="'src/assets/imgs/url'+(ID%10)+'.jpg'"
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
<style scoped src='../../assets/css/img-header-background.css'></style>
<style scoped src='../../assets/css/m-button.css'></style>
<style scoped src='../../assets/css/slide-animation.css'></style>


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
