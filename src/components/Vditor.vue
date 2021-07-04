<template>
  <div style="display: flex; justify-content: center">
    <div class="article-bar__input-box">
      <input
        v-model="form.title"
        maxlength="50"
        placeholder="请输入文章标题（50个字以内）"
        style="text-align: center"
        class="article-bar__title article-bar__title--input text-input"
      />
    </div>
    <div
      style="display: flex; justify-content: space-evenly; align-items: center"
    >
      <el-button
        type="success"
        style="float: left"
        @click="generateTemplate(articleTemplates[0])"
        >生成模板</el-button
      >
      <PublishButton @click="dialogFormVisible = true" round></PublishButton>
    </div>
  </div>
  <el-dialog v-model="dialogFormVisible">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="分类">
        <el-select v-model="form.category" placeholder="请选择类别">
          <el-option
            v-for="(value, index) in categories_id"
            :key="value"
            :label="categories_name[index]"
            :value="categories_id[index]"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="标签">
        <el-checkbox-group v-model="form.tags">
          <el-checkbox
            ref="tags_name"
            v-model="tags_name"
            v-for="val in tags_name"
            :key="val"
            :label="val"
          ></el-checkbox>
        </el-checkbox-group>

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
        <el-button v-else class="button-new-tag" size="small" @click="showInput"
          >+ New Tag</el-button
        >
      </el-form-item>
      <el-form-item>
        <router-link to="/blogs/categories/0">
          <el-button
            type="primary"
            @click="
              onSubmit(form.category, form.title, 'test', form.tags);
              dialogFormVisible = false;
              open();
            "
            >立即创建</el-button
          >
        </router-link>
        <el-button style="margin-left: 30px" @click="dialogFormVisible = false"
          >取消</el-button
        >
      </el-form-item>
    </el-form>
  </el-dialog>

  <div id="vditor" class="vditor readme md crispy" style="padding: 20px"></div>
</template>
<script>
import PublishButton from "@/components/Compose/PublishButton.vue";

import Vditor from "vditor";
import "vditor/dist/index.css";
import { createArticle } from "../api/createArticle.js";
import { showArticle } from "../api/showArticle.js";
import { ElMessage } from "element-plus";
import { getCategories } from "../api/Category.js";
import { getTags, getATag, createTag } from "../api/Tag.js";
import { createMeta } from "../api/Meta.js";
export default {
  components: {
    PublishButton,
    ArticleBar,
  },
  data() {
    return {
      inputVisible: false,
      inputValue: "",

      articleTemplates: ["82a296b2-6f42-4d61-ad3b-3b24d43806f9"],
      contentEditor: "",
      dialogFormVisible: false,
      categories_name: [],
      categories_id: [],
      tags_name: [],
      tags_id: [],
      tag_tmp: "",
      tag_map: new Map(),
      form: {
        title: "",
        tags: [],
        content: "",
        category: "",
      },
      formLabelWidth: "120px",
    };
  },
  mounted() {
    let self = this;
    this.contentEditor = new Vditor("vditor", {
      height: 630,
      //width:'auto',
      toolbarConfig: {
        pin: true,
      },
      cache: {
        enable: false,
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
      after: () => {
        //this.contentEditor.setValue("hello,Vditor+Vue!")
        //console.log(this.contentEditor.getValue())
        //content=this.contentEditor.getValue()
      },
    });
    this.ShowCategories();
    this.ShowTags();
  },
  methods: {
    showInput() {
      this.inputVisible = true;
      this.$nextTick((_) => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },
    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        createTag(inputValue)
          .then((res) => {
            console.log("successfully create tag " + inputValue);
            this.ShowTags();
            
          })
          .catch((err) => {
            console.log("create tag " + inputValue + " error");
          });
      }
      this.inputVisible = false;
      this.inputValue = "";
    },
    generateTemplate(aid) {
      showArticle(aid)
        .then((res) => {
          this.contentEditor.setValue(res.content);
        })
        .catch((err) => {
          console.log("get template error");
        });
    },
    metaSubmit(aid, tid) {
      createMeta(aid, tid)
        .then((res) => {
          console.log("successfully create meta " + tid);
        })
        .catch((err) => {
          console.log("create meta error");
        });
    },
    onSubmit(category_id, title, head_img, tags) {
      createArticle(category_id, title, head_img, this.contentEditor.getValue())
        .then((res) => {
          console.log(res);
          for (let i = 0; i < tags.length; i++) {
            this.metaSubmit(res.id, this.tag_map.get(tags[i]));
          }
        })
        .catch((err) => {
          console.log("发布错误 ", err.data);
        });
      console.log("submit ", title);
    },
    open() {
      ElMessage.success({
        message: "文章创建成功",
        type: "success",
      });
    },
    ShowCategories() {
      getCategories()
        .then((res) => {
          for (let i = 0; i < res.length; i++) {
            this.categories_name.push(res[i].name);
            this.categories_id.push(res[i].id);
          }
        })
        
        .catch((err) => {
          console.log("get categories error");
        });
    },
    ShowTags() {
      getTags()
        .then((res) => {
          this.tags_name = [];
          this.tags_id = [];
          this.tags_map = new Map();
          for (let i = 0; i < res.length; i++) {
            this.tags_name.push(res[i].name);
            this.tags_id.push(res[i].id);
            this.tag_map.set(res[i].name, res[i].id);
          }
        })
        .catch((err) => {
          console.log("get tags error");
        });
    },
  },
};
</script>

<style lang="less" scoped>
//深度选择器 div标签
.vditor /deep/ .vditor-ir pre.vditor-reset {
  padding: 10px 300px !important;
}
.vditor {
  padding: 0px !important;
}
.vditor /deep/ .vditor-toolbar--pin {
  border-radius: 10px;
}
.word {
  text-align: center;
}

//扒的样式 内容显示
.readme {
  max-width: 95%; //修改为95%
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
  background: #fff;
}

//article bar 样式
//因为要用v-model在input框中 所以暂时还是搬了过来 没用组件
.button,
.text-input {
  background-image: none;
  border: 0;
  border-radius: 4px;
}
.text-input {
  display: block;
  font-variant-ligatures: no-common-ligatures;
  width: 100%;
  height: 36px;
  padding: 3px 12px;
  font-size: inherit;
  line-height: 1.5;
  color: inherit;
  background-color: #fff;
}
input {
  outline: none;
}
button,
input,
optgroup,
select,
textarea {
  font-family: sans-serif;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}
.article-bar__input-box {
  display: flex;
  width: 60%;
  margin: 8px 16px 8px 8px;
  border: 1px solid #ccc;
  border-radius: 21px;
  background-color: #fff;
  position: relative;
}
.article-bar__input-box .article-bar__title--input {
  width: 100%;
  margin-left: 4px;
  border-radius: 18px;
  /* padding: 8px; */
  padding-right: 88px;
  font-size: 18px;
  line-height: 24px;
  background-color: #fff;
}
</style>
