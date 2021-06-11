<template>
  <div>
      <el-backtop target="" :bottom="100">
        <div style="
        height: 100%;
        width: 100%;
        background-color: #f2f5f6;
        box-shadow: 0 0 6px rgba(0,0,0, .12);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
      ">
          UP
        </div>
      </el-backtop>

    <!-- <el-button class="update-pos" type="primary" @click="update();show();">提交修改</el-button> -->
    <!-- <h3 style="text-align: center">{{title}}</h3> -->
    <!-- <div id="vditor" class="vditor"></div> -->
            <h1 style="text-align: center" class="title">{{title}}</h1>
    <div class="container-sm">
      <div class="split-layout">    
      <div class="content-details">
      <div id="vditorPreview" class="readme md crispy"></div>
      </div>
      <div class="repo-details">
            <!-- <el-button class="update-pos" type="primary" @click="update();show();">提交修改</el-button> -->

          <!-- <div class="title-desc-box"><h1>{{title}}</h1></div> -->
          <div class="related-links">        
            <div id="vditorOutline" class="crispy outline"></div>
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
      }
    },
    mounted(){
        this.show()
        //vditor 文档地址: https://ld246.com/article/1549638745630#options-toolbar
        //详细配置参考: https://github.com/Vanessa219/vditor/blob/master/src/ts/util/Options.ts?utm_source=ld246.com
        // this.contentEditor = new Vditor("vditor",{
        //     height:650,
        //     //width:'auto',
        //     toolbarConfig:{
        //         hide:false,
        //         pin:true
        //     },
        //     // classes:{
        //     //     preview:"",
        //     // },
        //     outline:{
        //       enable:true
        //     },
        //     //mode:"wysiwyg",
        //     preview: {
        //       actions: ["desktop", "tablet", "mobile", "mp-wechat", "zhihu"],
        //       delay: 0,
        //       mode:"dark",
        //     },
        //     theme:"classic",
        //     toolbar: [
        //         "fullscreen",
        //         "preview",
        //         "content-theme",
        //         "outline",
        //         "headings",
        //         "bold",
        //         "italic",
        //         "strike",
        //         "link",
        //         "|",
        //         "list",
        //         "ordered-list",
        //         "check",
        //         "outdent",
        //         "indent",
        //         "|",
        //         "quote",
        //         "line",
        //         "code",
        //         "inline-code",
        //         "insert-before",
        //         "insert-after",
        //         "|",
        //         "table",
        //     ],
        //     cache:{
        //         enable:false
        //     },
        //     counter: {
        //         enable: true,
        //         type: "text",
        //     },
        //     after:()=>{
        //         //this.contentEditor.setValue("hello test")
        //         this.show()
        //         this.init()
        //     }
        // })
    },
    methods:{
        show(){
            showArticle(this.$route.params.id)
            .then((res)=>{
                this.content = (res.content)
                this.title = res.title
                console.log(this.title)
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
                    enable: true
           },
           speech: {
                enable: true,
           },
           anchor: true,
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

<style lang="less" scoped>
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

.el-main{
    overflow: visible !important;
}
  .update-pos{
      float: left;
  }

.outline{
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
.title{
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
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
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
    border: 1px solid rgba(0,0,80,.08);
    box-shadow: 0 2px 10px rgb(0 20 80 / 10%);
    background: #fff;//fff
}
.content-details{
    margin: 0 24px;
    width: 100%;
    position: sticky;
}
</style>