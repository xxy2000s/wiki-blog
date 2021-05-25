<template>
  <div>
    <!-- <h3 style="text-align: center">{{title}}</h3> -->
    <div id="vditor" class="vditor"></div>
    <!-- <el-button type="primary" @click="show()">查看</el-button> -->
  </div>
</template>
  
<script>
import {showArticle} from "../../api/showArticle.js"
import Vditor from "vditor"
import "vditor/dist/index.css"

export default {
    data(){
      return{
          contentEditor: "",
          title: "",
          content: "",
      }
    },
    mounted(){
        //vditor 文档地址: https://ld246.com/article/1549638745630#options-toolbar
        //详细配置参考: https://github.com/Vanessa219/vditor/blob/master/src/ts/util/Options.ts?utm_source=ld246.com
        this.contentEditor = new Vditor("vditor",{
            height:650,
            //width:'auto',
            toolbarConfig:{
                pin:true
            },
            outline:{
              enable:true
            },
            preview: {
              actions: ["desktop", "tablet", "mobile", "mp-wechat", "zhihu"],
              delay: 0,
            },
            theme:"classic",
            toolbar: ["fullscreen","preview","content-theme","outline" ],
            cache:{
                enable:false
            },
            counter: {
                enable: true,
                type: "text",
            },
            after:()=>{
                this.contentEditor.setValue("hello test")
                this.show()
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
    },

}
</script>

<style lang="less" scoped>


</style>