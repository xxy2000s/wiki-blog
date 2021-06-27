
<template>

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

  <div id="content-down"
       class="pattern-center ">
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
  <div id="content"
       class="l-content">
    <div class="l-wrapper">
      <div class="l-grid">
        <article class="m-article-card"
                 v-for="ID in article.length"
                 :key=ID>
          <router-link :to="{path: '/detail/' + article[ID-1]}">
            <div class="m-article-card__picture">
              <img class="m-article-card__picture-background"
                   :src="'/src/assets/imgs/url'+(ID%10)+'.jpg'"
                   loading="lazy">
            </div>

            <div class="m-article-card__info">
                <template  v-if="loadFlag.value">
              <a class="m-article-card__tag"
                 v-for="value in tags[ID-1]"
                 :key=value>{{value}}</a>
                 </template>
              <a class="m-article-card__info-link"
                 aria-label="十佳 AI 产品工具，为生活添彩">
                <div>
                  <h2 class="m-article-card__title js-article-card-title "
                      title="{{title[ID-1]}}"
                      style="">
                    {{title[ID-1]}}
                  </h2>
                </div>
                <div class="item-category">
                  <span>
                    <div class="item-meta-cat"><a href="https://code.xiaxuyang.com">{{category_name[ID-1]}}</a></div>
                  </span>
                  <span>
                    <div class="item-meta-ico bg-ico-note"
                         style="background: url(https://me.ursb.me/usr/themes/pinghsu/images/bg-ico.png) no-repeat;background-size: 40px auto;"><a href="https://code.xiaxuyang.com"></a></div>
                  </span>
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
import {getArticleByCategory, getArticleByTag} from '../../api/Article.js'
import {getACategory} from '../../api/Category.js'
import {getMetas} from '../../api/Meta.js'
import {getTagName} from '../../api/Tag.js'
import {ref} from 'vue'
  export default {
    data() {
      return {
        activeIndex: '1',
        //activeIndex2: '1'
        article:[],
        title: [],
        createTime:[],
        content:[],
        category_id:[],
        category_name: [],
        tags_map: new Map(),
        tags:[],
        loadFlag:ref(false),
        
      };
    },
    mounted(){
        this.init()
    },
    watch:{
      loadFlag( newval, oldval){
          console.log(newval)
          console.log(oldval)
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      showArticleByTag(){
        getArticleByTag(this.$route.params.id)
        .then((res)=>{
          for(let i=0;i<res.length;i++){
              this.article.push(res[i].aid)
              showArticle(res[i].aid)
              .then((res2)=>{
                  this.title.push(res2.title)
                  this.createTime.push(res2.created_at)
                  this.category_name.push(res2.Category.name)

              })
              .catch((err2)=>{
                  console.log("get article info by tag error")
              })
              getMetas(res[i].aid)
              .then((res3)=>{
                  let tag_name_tmp = []
                  for(let j=0;j<res3.length;j++){
                      getTagName(res3[j])
                      .then((res4)=>{
                          tag_name_tmp.push(res4.name)
                      })
                      .catch((err)=>{
                          console.log("get tag name error")
                      })
                  }
                  this.tags_map.set(res[i].aid, tag_name_tmp)
                  this.tags.push(tag_name_tmp)
                  this.loadFlag=true;
                  
              })
              .catch((err3)=>{
                  console.log("get article tags error")
              })
          }
            
        })
        .catch((err)=>{
            console.log("get article by tag error")
        })
      }
      ,
      // showArticleByCategory(){
      //     getArticleByCategory(this.$route.params.id)
      //     .then((res)=>{
      //       for(var i=0;i<=res.length;i++){
      //             this.article.push(res[i].id)
      //             this.title.push(res[i].title)
      //             this.createTime.push(res[i].created_at)
      //             this.content.push(res[i].content)
      //             this.category_id.push(res[i].category_id)
      //             getACategory(res[i].category_id)
      //             .then((res2)=>{
      //                 this.category_name.push(res2.name)
      //             })
      //             .catch((err)=>{
      //                 console.log("get category by id error")
      //             })
      //         }
      //     })
      //     .catch((error)=>{
      //         console.log("get article by category error")
      //     })
      // },
      showArticleList(){
          getArticleList(1)
          .then((res)=>{
              for(var i=0;i<=res.length;i++){
                  this.article.push(res[i].id)
                  this.title.push(res[i].title)
                  this.createTime.push(res[i].created_at)
                  this.content.push(res[i].content)
                  getACategory(res[i].category_id)
                  .then((res2)=>{
                      this.category_name.push(res2.name)
                  })
                  .catch((err)=>{
                      console.log("get category by id error")
                  })

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
          if(this.$route.params.id==0){
              this.showArticleList()
          }
          else{
          this.showArticleByTag()
          }
      }
    },
  }
</script>


<style  src='../../assets/css/article.css'></style>
<style  src='../../assets/css/img-header-background.css'></style>
<style  src='../../assets/css/m-button.css'></style>
<style  src='../../assets/css/slide-animation.css'></style>


<style scoped>
.item-meta {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 100%;
  padding: 0 15px 25px;
  text-align: right;
}
.item-meta-cat {
  margin-right: 10px;
}
.item-category {
  display: flex;
  align-items: center;
  color: #333;
  letter-spacing: 0.2px;
  font-size: 1rem;
  margin-right: 20px;
  justify-content: flex-end;
}
.item-meta-ico {
  display: inline-block;
  width: 42px;
  height: 42px;
  border: 1px solid #eaeaea;
  border-radius: 50%;
}
.bg-ico-note {
  background-position: 3px -80px !important;
}

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
  color: #2c3e50;
}
.router-link-active {
  text-decoration: none;
}
</style>
