<template>

<div data-v-dc4b8ea2="" class="header">
  <div data-v-dc4b8ea2="" class="title-input">
    <input data-v-f291f354="" placeholder="请输入文章标题" class="input-size__normal" v-model="form.title">
  </div>
    <el-button type="success" style="float:left" @click="generateTemplate">生成模板</el-button>

  <div data-v-dc4b8ea2="" class="push-article">
    <div data-v-eaa3c7a0="" data-v-dc4b8ea2="" class="button-main button__bounce button-type__primary button-size__normal">
      <el-button type="primary" @click="dialogFormVisible = true" round>发布文章</el-button>
    </div>
  </div>
</div>

<el-dialog v-model="dialogFormVisible">
  <el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="分类">
    <el-select v-model="form.category" placeholder="请选择类别">
      <el-option v-for="(value, index) in categories_id" :key=value :label="categories_name[index]" :value="categories_id[index]"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="标签">
    <el-checkbox-group v-model="form.tags">
      <el-checkbox v-for="(value,index) in tags_id" :key=value :label="tags_name[index]" ></el-checkbox>
      <!-- <el-checkbox label="前端" name="label"></el-checkbox>
      <el-checkbox label="算法" name="label"></el-checkbox>
      <el-checkbox label="Go" name="label"></el-checkbox>
      <el-checkbox label="Vue" name="label"></el-checkbox>
      <el-checkbox label="计算机基础" name="label"></el-checkbox>
      <el-checkbox label="工具" name="label"></el-checkbox>
      <el-checkbox label="实习" name="label"></el-checkbox> -->

    </el-checkbox-group>
  </el-form-item>
  <el-form-item>
    <router-link to="/blogs/categories/0">
    <el-button type="primary" @click="onSubmit(form.category, form.title, 'test', form.tags);dialogFormVisible=false;open()">立即创建</el-button>
    </router-link>
    <el-button @click="dialogFormVisible = false;test(form.tags);">取消</el-button>
  </el-form-item>
  </el-form>
</el-dialog>



<div id="vditor" class="vditor readme md crispy" style="padding:20px"></div>
</template>
<script>
import Vditor from "vditor"
import "vditor/dist/index.css"
import {createArticle} from "../api/createArticle.js"
import { ElMessage } from 'element-plus'
import {getCategories} from '../api/Category.js'
import {getTags, getATag} from '../api/Tag.js'
import {createMeta} from "../api/Meta.js"
export default {
    // setup() {
    //   let category_id = ref("1")
    //   let title = ref("vue")
    //   let head_img = "headimg"
    //   let content = ref("vue test")
    //   function postArticle(){
    //       createArticle(2, "vue", "head_img", "vue test")
    //       .then((res)=>{
    //           console.log(res.data.msg)
    //       })
    //       .catch((err)=>{
    //           console.log(err.data)
    //       })
    //   }
    //   return {
    //       postArticle,
    //   };
    // },
    data(){
        return{
            contentEditor:"",
            //id: "",
            dialogFormVisible: false,
            categories_name:[],
            categories_id:[],
            tags_name:[],
            tags_id:[],
            tag_tmp:'',
            tag_map: new Map(),
            form: {
              title: '',
              tags: [],
              content: "",
              category: '',
          },
          formLabelWidth: '120px'
        }
    }, 
    mounted(){
        let self = this
        this.contentEditor = new Vditor("vditor",{
            height:630,
            //width:'auto',
            toolbarConfig:{
                pin:true
            },
            cache:{
                enable:false
            },
            counter: {
                enable: true,
                type: "text",
            },
            // upload: {
            //     accept: "image/*,.mp3, .wav, .rar, .md",
            //     token: "test",
            //     url: "https://pictures.xiaxuyang.com/img",
            //     linkToImgUrl: "https://pictures.xiaxuyang.com/img",
            //     filename(name) {
            //       return name
            //           .replace(/[^(a-zA-Z0-9\u4e00-\u9fa5\.)]/g, "")
            //           .replace(/[\?\\/:|<>\*\[\]\(\)\$%\{\}@~]/g, "")
            //           .replace("/\\s/g", "");
            //     },
            // },
            after:()=>{
                //this.contentEditor.setValue("hello,Vditor+Vue!")
                //console.log(this.contentEditor.getValue())
                //content=this.contentEditor.getValue()
            }
        });
        this.ShowCategories()
        this.ShowTags()
    },
    methods:{
        metaSubmit(aid, tid){
                createMeta(aid, tid)
                .then((res)=>{
                    console.log("successfully create meta "+ tid)
                })
                .catch((err)=>{
                    console.log("create meta error")
                })
        },
        onSubmit(category_id, title, head_img, tags){
            createArticle(category_id, title, head_img, this.contentEditor.getValue())
            .then((res)=>{
                console.log(res)
                for(let i=0;i<tags.length;i++){
                    this.metaSubmit(res.id, this.tag_map.get(tags[i]))
                }
            })
            .catch((err)=>{
                console.log("发布错误 ", err.data)
            })

            console.log("submit ",title)
        },
        test(params){
            console.log(this.contentEditor.getValue())
            console.log(params)
        },
        open() {
          ElMessage.success({
            message: '文章创建成功',
            type: 'success'
          });
        },
        ShowCategories(){
            getCategories()
            .then((res)=>{
              for(let i=0;i<res.length;i++){
                this.categories_name.push(res[i].name)
                this.categories_id.push(res[i].id)
              }
            })
            .catch((err)=>{
                console.log("get categories error")
            })
        },
        ShowTags(){
            getTags()
            .then((res)=>{
                for(let i=0;i<res.length;i++){
                    this.tags_name.push(res[i].name)
                    this.tags_id.push(res[i].id)
                    this.tag_map.set(res[i].name, res[i].id)
                }
            })
            .catch((err)=>{
                console.log("get tags error")
            })
        }
        ,
        show(params){
            console.log(params)
        }
        
    }
}
</script>

<style lang="less" scoped>
    //深度选择器 div标签
    .vditor /deep/ .vditor-ir pre.vditor-reset{
        padding: 10px 300px !important;      
    }
    .vditor{
        padding: 0px !important;
    }
    .vditor /deep/ .vditor-toolbar--pin{
    border-radius: 10px;
}
    .word{
        text-align: center;
    }

    .header[data-v-dc4b8ea2] {
    background-color: #fff;
    height: 10%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-top: 5px;
    margin-bottom: 10px;
    }

    .title-input[data-v-dc4b8ea2] {
    margin-left: 45px;
    height: 36px;
    width: 85%;
    display: inline-block;
    }
    .input-size__normal[data-v-f291f354] {
    height: 30px;
    font-size: 14px;
    width: 95%;
    text-align: center;
}


//扒的样式 内容显示
.readme {
    max-width: 95%;//修改为95%
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
    background: #fff;
}
</style>