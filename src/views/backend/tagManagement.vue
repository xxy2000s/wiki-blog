<template>
<el-tag
  :key="tag"
  v-for="tag in dynamicTags"
  closable
  :disable-transitions="false"
  @close="handleClose(tag)">
  {{tag}}
</el-tag>
<el-input
  class="input-new-tag"
  v-if="inputVisible"
  v-model="inputValue"
  ref="saveTagInput"
  size="small"
  @keyup.enter="handleInputConfirm"
  @blur="handleInputConfirm"
>
</el-input>
<el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
</template>

<script>
import {createTag, getTags} from "../../api/Tag.js"
  export default {
    data() {
      return {
        dynamicTags: [],
        inputVisible: false,
        inputValue: ''
      };
    },
    mounted(){
        this.showTags()
    },
    methods: {

      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },

      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.dynamicTags.push(inputValue);
          createTag(inputValue)
        }
        this.inputVisible = false;
        this.inputValue = '';
      },
      showTags(){
          getTags()
          .then((res)=>{
              for(let i=0;i<res.length;i++){
                    this.dynamicTags.push(res[i].name)
              }
          })
          .catch((err)=>{
              console.log("get tags error")
          })
      }
    }
  }
</script>

<style>
.el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px; 
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
</style>