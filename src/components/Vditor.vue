<template>
<div data-v-dc4b8ea2="" class="header">
  <div data-v-dc4b8ea2="" class="title-input">
    <input data-v-f291f354="" data-v-dc4b8ea2="" placeholder="请输入文章标题" class="input-size__normal" v-model="form.title">
  </div>
  <div data-v-dc4b8ea2="" class="push-article">
    <div data-v-eaa3c7a0="" data-v-dc4b8ea2="" class="button-main button__bounce button-type__primary button-size__normal">
      <el-button type="primary" @click="dialogFormVisible = true" round>发布文章</el-button>
    </div>
  </div>
</div>

<el-dialog v-model="dialogFormVisible">
  <el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="分类">
    <el-select v-model="form.type" placeholder="请选择类别">
      <el-option label="力扣" value="leetcode" @click="show(form.type)"></el-option>
      <el-option label="后端" value="backend"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="标签">
    <el-checkbox-group v-model="form.label">
      <el-checkbox label="后端" name="label"></el-checkbox>
      <el-checkbox label="前端" name="label"></el-checkbox>
      <el-checkbox label="算法" name="label"></el-checkbox>
      <el-checkbox label="Go" name="label"></el-checkbox>
      <el-checkbox label="Vue" name="label"></el-checkbox>
      <el-checkbox label="计算机基础" name="label"></el-checkbox>
      <el-checkbox label="工具" name="label"></el-checkbox>
      <el-checkbox label="实习" name="label"></el-checkbox>

    </el-checkbox-group>
  </el-form-item>
  <el-form-item>
    <router-link to="/blogs">
    <el-button type="primary" @click="onSubmit(1, form.title, 'test');dialogFormVisible=false;open()">立即创建</el-button>
    </router-link>
    <el-button @click="dialogFormVisible = false;test()">取消</el-button>
  </el-form-item>
  </el-form>
</el-dialog>

  <div id="vditor" class="vditor"></div>
</template>
<script>
import Vditor from "vditor"
import "vditor/dist/index.css"
import {createArticle} from "../api/createArticle.js"
import { ElMessage } from 'element-plus'
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
            form: {
              title: '',
              type: '',
              label: [],
              content: "",
          },
          formLabelWidth: '120px'
        }
    }, 
    mounted(){
        let self = this
        this.contentEditor = new Vditor("vditor",{
            height:650,
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
        })
    },
    methods:{
        onSubmit(category_id, title, head_img){
            createArticle(category_id, title, head_img, this.contentEditor.getValue())
            .then((res)=>{
                console.log(res)
            })
            .catch((err)=>{
                console.log("发布错误 ", err.data)
            })

            console.log("submit ",title)
        },
        test(params){
            console.log(this.contentEditor.getValue())
        },
        open() {
          ElMessage.success({
            message: '文章创建成功',
            type: 'success'
          });
        },

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
    }

    .title-input[data-v-dc4b8ea2] {
    margin-left: 20px;
    height: 36px;
    width: 90%;
    display: inline-block;
    }
    .input-size__normal[data-v-f291f354] {
    height: 30px;
    font-size: 14px;
    width: 95%;
}
</style>