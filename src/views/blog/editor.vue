<template>
  <div>
    <el-button
      class="update-pos"
      type="primary"
      style="float: left"
      @click="goBack"
      >返回</el-button
    >
    <el-button
      class="update-pos"
      type="primary"
      style="float: right"
      @click="
        update();
        show();
      "
      >提交修改</el-button
    >
    <h3 style="text-align: center">{{ title }}</h3>
    <div
      id="vditor"
      class="vditor readme md crispy"
      style="padding: 20px"
    ></div>
  </div>
</template>

<script>
import { showArticle } from "../../api/showArticle.js";
import { updateArticle } from "../../api/updateArticle.js";
import { ElMessage } from "element-plus";
import Vditor from "vditor";
import "vditor/dist/index.css";

export default {
  data() {
    return {
      contentEditor: "",
      title: "",
      content: "",
      ids: [],
      html: "",
      fromPath: "",
    };
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      // 通过 `vm` 访问组件实例,将值传入fromPath
      vm.fromPath = from.path;
    });
  },
  mounted() {
    this.show();
    //vditor 文档地址: https://ld246.com/article/1549638745630#options-toolbar
    //详细配置参考: https://github.com/Vanessa219/vditor/blob/master/src/ts/util/Options.ts?utm_source=ld246.com
    this.contentEditor = new Vditor("vditor", {
      height: 650,
      //width:'auto',
      toolbarConfig: {
        hide: false,
        pin: true,
      },
      // classes:{
      //     preview:"",
      // },
      outline: {
        enable: true,
      },
      //mode:"wysiwyg",
      preview: {
        actions: ["desktop", "tablet", "mobile", "mp-wechat", "zhihu"],
        delay: 0,
        mode: "dark",
      },
      theme: "classic",
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
      cache: {
        enable: false,
      },
      counter: {
        enable: true,
        type: "text",
      },
      after: () => {
        this.contentEditor.setValue("hello test");
        this.show();
        //this.init()
      },
    });
    console.log(this.contentEditor);
  },
  methods: {
    show() {
      showArticle(this.$route.params.id)
        .then((res) => {
          this.content = res.content;
          this.title = res.title;
          console.log(this.title);
          this.contentEditor.setValue(this.content);
          //console.log(res.data.id)
          //this.init()
        })
        .catch((err) => {
          console.log(err);
        });
    },
    open() {
      ElMessage.success({
        message: "文章修改成功",
        type: "success",
      });
    },
    update() {
      updateArticle(this.$route.params.id, this.contentEditor.getValue())
        .then((res) => {
          this.content = res.content;
          this.open();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    goBack() {
      this.$router.push({
        path: this.fromPath,
      });
    },
    init() {
      // this.ids = document.getElementsByClassName("vditor-tooltipped vditor-tooltipped__nw")
      Vditor.preview(document.getElementById("vditorPreview"), this.content, {
        className: "preview vditor-reset vditor-reset--anchor",
        hljs: {
          lineNumber: true,
          enable: true,
        },
        speech: {
          enable: true,
        },
        anchor: true,
        after() {
          const outlineElement = document.getElementById("vditorOutline");
          Vditor.outlineRender(
            document.getElementById("vditorPreview"),
            outlineElement
          );
          if (outlineElement.innerText.trim() !== "") {
            outlineElement.style.display = "block";
          }
        },
      });

      //console.log(this.content)
      //console.log(this.ids[1]).click
    },
  },
};
</script>

<style scoped src="../../assets/css/m-button.css"></style>
<style scoped src="../../assets/css/slide-animation.css"></style>

<style lang="less" scoped>
.vditor /deep/ .vditor-ir pre.vditor-reset {
  padding: 10px 300px !important;
}
.vditor {
  padding: 0px !important;
}
.vditor /deep/ .vditor-toolbar--pin {
  border-radius: 10px;
}

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
