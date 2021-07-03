<template>

  <div>

    <div id="content-down" class="pattern-center ">
      <div class="pattern-attachment-img"> <img src="https://2heng.xin/wp-content/uploads//2018/05/sakura2.jpeg"
             data-src="https://2heng.xin/wp-content/uploads//2018/05/sakura2.jpeg"
             class="lazyload"
             onerror="imgError(this,3)"
             style="width: 100%; height: 100%; object-fit: cover; pointer-events: none;"></div>
      <header class="pattern-header ">
        <h1 class="entry-title">{{title}}</h1>
        <router-link :to="'/editor/'+aid">
          <h1 class="m-button">编辑文章</h1>
        </router-link>
      </header>
    </div>

    <!-- <el-button class="update-pos" type="primary" @click="update();show();">提交修改</el-button> -->
    <!-- <h3 style="text-align: center">{{title}}</h3> -->
    <!-- <div id="vditor" class="vditor"></div> -->
    <h1 style="text-align: center"
        class="title">&nbsp;</h1>
    <div id="content" class="container-sm">
      <div class="split-layout">
        <div class="content-details">
          <div id="vditorPreview"
               class="readme md crispy"></div>
        </div>
        <div class="repo-details">
          <!-- <el-button class="update-pos" type="primary" @click="update();show();">提交修改</el-button> -->

          <!-- <div class="title-desc-box"><h1>{{title}}</h1></div> -->
          <div class="related-links">
            <div id="vditorOutline"
                 class="crispy outline"></div>
          </div>
        </div>

        <!-- <div id="vditorOutline" class="outline crispy"></div> -->
      </div>
    </div>

  </div>

</template>
  
<script>
import {showArticle} from "../../api/showArticle.js"
import {updateArticle} from "../../api/updateArticle.js"
import { ElMessage } from 'element-plus'
import Vditor from "vditor"
import "vditor/dist/index.css"

export default {
    data(){
      return{
          contentEditor: "",
          title: "",
          content: "",
          ids:[],
          html:"",
          aid:'',
      }
    },
    mounted(){
        this.show()
       
    },
    methods:{
        show(){
            showArticle(this.$route.params.id)
            .then((res)=>{
                this.content = (res.content)
                this.title = res.title
                console.log(this.title)
                this.aid = res.id
                //this.contentEditor.setValue(this.content)
                //console.log(res.data.id)
                this.init()
            })
            .catch((err)=>{
                console.log(err)
            })
        },
        open() {
          ElMessage.success({
            message: '文章修改成功',
            type: 'success'
          });
        },
        update(){
            updateArticle(this.$route.params.id, this.contentEditor.getValue())
            .then((res)=>{
                this.content = res.content
                this.open()
            })
            .catch((err)=>{
                console.log(err)
            })
        },
        init(){
            // this.ids = document.getElementsByClassName("vditor-tooltipped vditor-tooltipped__nw")
          Vditor.preview(document.getElementById('vditorPreview'),this.content,{
                       className: 'preview vditor-reset vditor-reset--anchor',
           hljs: {
           lineNumber: true,
                    enable: true,
                    style:"xcode", //参考https://xyproto.github.io/splash/docs/longer/all.html?utm_source=ld246.com
           },
           speech: {
                enable: false,
           },
           markdown:{
                toc:true,
           },
           anchor: false,
           after(){
             const outlineElement = document.getElementById('vditorOutline')
              Vditor.outlineRender(document.getElementById('vditorPreview'), outlineElement)
              if (outlineElement.innerText.trim() !== '') {
                        outlineElement.style.display = 'block'
              }
           },
        })
        
            //console.log(this.content)
            //console.log(this.ids[1]).click
        }
        
        
    },

}
</script>

<style scoped src='../../assets/css/m-button.css'></style>
<style scoped src='../../assets/css/slide-animation.css'></style>

<style lang="less" scoped>

.pattern-center {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
}
.pattern-attachment-img {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-origin: border-box;
  width: 100%;
  height: 400px;
}
.lazyload {
  -webkit-filter: blur(0px);
  -moz-filter: blur(0px);
  -ms-filter: blur(0px);
  filter: blur(0px);
  -webkit-transition: 0.3s -webkit-filter linear;
  -moz-transition: 0.3s -moz-filter linear;
  -moz-transition: 0.3s filter linear;
  -ms-transition: 0.3s -ms-filter linear;
  -o-transition: 0.3s -o-filter linear;
  transition: 0.3s filter linear, 0.3s -webkit-filter linear;
}
.pattern-center header.pattern-header {
  position: absolute;
  top: 45%;
  left: 0;
  right: 0;
  text-align: center;
  color: #fff;
  text-shadow: 2px 2px 10px #000;
  z-index: 1;
}
.pattern-center h1.cat-title,
.pattern-center h1.entry-title {
  color: #fff;
  font-size: 40px;
  font-weight: 500;
  width: 80%;
  margin: auto;
  padding: 0;
  border: 0;
}

.related-links {
  max-width: 1000px;
  margin: 0 auto;
  position: -webkit-sticky;
  position: sticky;
  top: 80px;
  height: 720px;
}
.container-sm {
  max-width: 1250px;
  margin: 0 auto;
}
.repo-details {
  margin: 0 24px;
  width: 300px;
}
.split-layout {
  display: flex;
  justify-content: center;
  max-width: 1250px;
  margin: 0 auto;
}

.el-main {
  overflow: visible !important;
}
.update-pos {
  float: left;
}

.outline {
  // font: 400 16px/1.8 "Open Sans","Hiragino Sans GB","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
  top: 30px;
  //right: 120px;
  width: 280px;
  // height: 85%;
  max-height: 100%;
  padding: 0 5px;
  overflow-y: auto;
  border-radius: 24px;
  position: sticky;
}
.title {
  margin-left: 400px;
  margin-right: 400px;
}

.repo-details {
  margin: 0 24px;
  width: 300px;
}
.title-desc-box {
  width: 100%;
  margin: 0 auto 32px;
}
.title-desc-box h1 {
  margin-bottom: 12px;
}

h2 {
  margin-top: 4px;
  font-size: 16px;
  font-weight: 400;
}

.readme {
  max-width: 900px;
  width: 90%;
  padding: 24px 32px;
  border-radius: 24px;
  margin: 0 auto 48px;
}
.md {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  color: #24292e;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
    sans-serif, Apple Color Emoji, Segoe UI Emoji;
  font-size: 16px;
  line-height: 1.5;
  word-wrap: break-word;
}

.md img {
  max-width: 100%;
  box-sizing: content-box;
  box-sizing: initial;
  background-color: #fff;
}

.crispy {
  border: 1px solid rgba(0, 0, 80, 0.08);
  box-shadow: 0 2px 10px rgb(0 20 80 / 10%);
  background: #fff; //fff
}
.content-details {
  margin: 0 24px;
  width: 100%;
  position: sticky;
}
</style>