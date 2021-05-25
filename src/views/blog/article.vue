<template>
  <div>
    <el-button class="update-pos" type="primary" @click="update();show();">提交修改</el-button>
    <!-- <h3 style="text-align: center">{{title}}</h3> -->
    <div id="vditor" class="vditor"></div>
    <div id="vditorPreview">tets</div>
    <!-- <el-button type="primary" @click="show()">查看</el-button> -->
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
        this.contentEditor = new Vditor("vditor",{
            height:650,
            //width:'auto',
            toolbarConfig:{
                hide:false,
                pin:true
            },
            // classes:{
            //     preview:"",
            // },
            outline:{
              enable:true
            },
            preview: {
              actions: ["desktop", "tablet", "mobile", "mp-wechat", "zhihu"],
              delay: 0,
              mode:"dark",
            },
            theme:"classic",
            toolbar: [
                "fullscreen",
                "preview",
                "content-theme",
                "outline",
                "headings",
                "bold",
                "italic",
                "strike",
                "link",
                "|",
                "list",
                "ordered-list",
                "check",
                "outdent",
                "indent",
                "|",
                "quote",
                "line",
                "code",
                "inline-code",
                "insert-before",
                "insert-after",
                "|",
                "table",
            ],
            cache:{
                enable:false
            },
            counter: {
                enable: true,
                type: "text",
            },
            after:()=>{
                //this.contentEditor.setValue("hello test")
                this.show()
                this.init()
            }
        })
    },
    methods:{
        show(){
            showArticle(this.$route.params.id)
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
           anchor: true
        })
        console.log(this.content)
            //console.log(this.ids[1]).click
        }
        
        
    },

}
</script>

<style lang="less" scoped>
  .update-pos{
      float: left;
  }

</style>