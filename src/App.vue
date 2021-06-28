<template>
  <header
    class="site-header no-select gizle"
    v-bind:class="{
      sabit: !scrollFlag,
      yya: scrollFlag,
      'top-fixed-down':
        hideHeader &
        (route['path'].substr(0, 7) == '/detail' ||
          route['path'].substr(0, 6) == '/blogs'),
    }"
    @mouseover="hov"
    @mouseleave="hovl"
  >
    <div class="site-top">
      <div class="site-branding">
        <span class="logolink moe-mashiro">
          <a href="https://2heng.xin" alt="樱花庄的白猫">
            <ruby
              ><span class="sakuraso">BUPT</span><span class="no">の</span
              ><span class="shironeko">Coder</span>
              <rp></rp>
              <rt class="chinese-font">北大软微</rt>
              <rp></rp>
            </ruby>
          </a>
        </span>
      </div>

      <div
        class="lower-cantiner"
        v-bind:class="{
          'is-homepage': (route['path'] == '/') & (!scrollFlag & !hovFlag),
        }"
      >
        <div class="lower">
          <div id="show-nav" class="showNav mobile-fit">
            <div class="line line1"></div>
            <div class="line line2"></div>
            <div class="line line3"></div>
          </div>
          <nav class="mobile-fit-control hide">
            <ul id="menu-new" class="menu">
              <li>
                <a href="/"
                  ><span class="faa-parent animated-hover"
                    ><i
                      class="fa fa-fort-awesome faa-horizontal"
                      aria-hidden="true"
                    ></i>
                    首页</span
                  ></a
                >
              </li>
              <li>
                <a href="/navi"
                  ><span class="faa-parent animated-hover">
                    <i class="fa-solid fa-compass faa-horizontal"></i>
                    导航</span
                  ></a
                >
                <ul class="sub-menu">
                  <li>
                    <a href="https://2heng.xin/archives/hacking/"
                      ><i class="fa fa-terminal" aria-hidden="true"></i> 前端</a
                    >
                  </li>
                  <li>
                    <a href="https://2heng.xin/archives/article/"
                      ><i class="fa fa-file-text-o" aria-hidden="true"></i>
                      后端</a
                    >
                  </li>
                  <li>
                    <a href="https://www.kwgg2020.com/"
                      ><i class="fa fa-quote-right" aria-hidden="true"></i>
                      工具</a
                    >
                  </li>
                  <li>
                    <a href="https://2heng.xin/archives/thingking/"
                      ><i class="fa fa-commenting-o" aria-hidden="true"></i>
                      笔记</a
                    >
                  </li>
                  <li>
                    <a href="https://mashiro.top/"
                      ><i class="fa fa-book" aria-hidden="true"></i> 面经</a
                    >
                  </li>
                </ul>
              </li>

              <li>
                <a href="/todo"
                  ><span class="faa-parent animated-hover"
                    ><i class="fa-solid fa-calendar faa-horizontal"></i>
                    待办</span
                  ></a
                >
              </li>
              <li>
                <a href="/blogs/categories/0"
                  ><span class="faa-parent animated-hover"
                    ><i class="fa-solid fa-book faa-horizontal"></i> 文章</span
                  ></a
                >
              </li>

              <li>
                <a href="/timeline">
                <span class="faa-parent animated-hover">
                  <i class="fa-solid fa-briefcase"></i> 归档

                </span>
                </a>
              </li>
              <li>
                <a href="/management"
                  ><span class="faa-parent animated-hover"
                    ><i class="fa-solid fa-paperclip"></i> 后台</span
                  ></a
                >
              </li>
            </ul>
          </nav>
        </div>
        <el-avatar :src="pic" class="header-user-avatar"></el-avatar>
      </div>
    </div>
  </header>

  <!-- <div class="openNav no-select"
       style="height: 50px;">
    <div class="iconflat no-select"
         style="width: 50px; height: 50px;">
      <div class="icon"></div>
    </div>
  </div> -->
  <div
    v-if="route['path'] != '/'"
    class="blank"
    style="padding-top: 70px"
  ></div>

  <div id="page" class="wrapper">
    <a @click="scrollSmoothTo(0)" class="cd-top" :style="{ top: backTop }"> </a>
    <router-view />
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import { getArticleList } from "./api/getArticleList.js";
import profile from "./assets/imgs/profile.jpg";
import { useRoute } from "vue-router";
import { ref, watch } from "vue";
export default {
  name: "App",
  // components: {
  //   HelloWorld
  // }
  setup() {
    const route = useRoute();
    watch(route, (newpath, oldpath) => {
      console.log(route["path"]);
    });

    return {
      route,
    };
  },
  data() {
    return {
      pic: profile,
      scrollFlag: false,
      hoverFlag: false,
      hovFlag: false,
      backTop: "-900px",
      hideHeader: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    show() {
      getArticleList(1)
        .then((res) => {
          console.log(res[0].id);
        })
        .catch((err) => {
          console.log(err.data);
        });
    },
    handleScroll() {
      let _this = this;
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      // console.log(scrollTop)
      if (scrollTop) {
        _this.scrollFlag = true;
      } else {
        _this.scrollFlag = false;
      }
      if (window.pageYOffset > 150) {
        this.hideHeader = true;
        this.backTop = "-137px";
      } else {
        this.hideHeader = false;
        this.backTop = "-900px";
      }
    },
    hov() {
      this.hovFlag = true;
    },
    hovl() {
      this.hovFlag = false;
    },
    scrollSmoothTo(position) {
      if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function (callback, element) {
          return setTimeout(callback, 17);
        };
      }
      // 当前滚动高度
      var scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      // 滚动step方法
      var step = function () {
        // 距离目标滚动距离
        var distance = position - scrollTop;
        // 目标滚动位置
        scrollTop = scrollTop + distance / 5;
        if (Math.abs(distance) < 1) {
          window.scrollTo(0, position);
        } else {
          window.scrollTo(0, scrollTop);
          requestAnimationFrame(step);
        }
      };
      step();
    },
  },
};
</script>

<style scoped>
.top-fixed-down {
  margin-top: -70px;
}

.cd-top {
  position: fixed;
  right: 25px;
  top: -900px;
  z-index: 99;
  width: 70px;
  height: 900px;
  background: url("https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/images/scroll.png")
    no-repeat center;
  background-size: contain;
  -webkit-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  cursor: url("https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/cursor/No_Disponible.cur"),
    auto;
  opacity: 1;
}
a {
  transition-delay: 5ms;
}
.is-homepage {
  display: none;
}
.is-homepage:hover {
  display: block;
}

@media (max-width: 860px) {
  .openNav {
    transition-duration: 0.5s;
    width: 100%;
    height: 50px;
    position: absolute;
    top: 0;
    z-index: 99999;
    display: block;
    background: 0 0;
  }
}

@media (max-width: 860px) {
  .iconflat {
    background: 0 0;
    width: 50px;
    height: 50px;
    float: left;
  }
}

@media (max-width: 860px) {
  .openNav .icon {
    transition-duration: 0.2s;
    position: absolute;
    width: 30px;
    height: 3px;
    background-color: #333;
    top: 24px;
    left: 10px;
  }
}
@media (max-width: 860px) {
  .openNav .icon:before {
    top: -8px;
  }
}
@media (max-width: 860px) {
  .openNav .icon:after {
    top: 8px;
  }
}

@media (max-width: 860px) {
  .openNav .icon:before,
  .openNav .icon:after {
    transition-duration: 0.5s;
    background-color: #333;
    position: absolute;
    content: "";
    width: 30px;
    height: 3px;
    left: 0;
  }
}

.fa-solid {
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.faa-horizontal.animated,
.faa-horizontal.animated-hover:hover,
.faa-parent.animated-hover:hover > .faa-horizontal {
  -webkit-animation: horizontal 2s ease infinite;
  animation: horizontal 2s ease infinite;
}

.faa-horizontal.animated,
.faa-horizontal.animated-hover:hover,
.faa-parent.animated-hover:hover > .faa-horizontal {
  -webkit-animation: horizontal 2s ease infinite;
  animation: horizontal 2s ease infinite;
}
@keyframes horizontal {
  0% {
    -webkit-transform: translate(0, 0);
    -ms-transform: translate(0, 0);
    transform: translate(0, 0);
  }
  6% {
    -webkit-transform: translate(5px, 0);
    -ms-transform: translate(5px, 0);
    transform: translate(5px, 0);
  }
  12% {
    -webkit-transform: translate(0, 0);
    -ms-transform: translate(0, 0);
    transform: translate(0, 0);
  }
  18% {
    -webkit-transform: translate(5px, 0);
    -ms-transform: translate(5px, 0);
    transform: translate(5px, 0);
  }
  24% {
    -webkit-transform: translate(0, 0);
    -ms-transform: translate(0, 0);
    transform: translate(0, 0);
  }
  30% {
    -webkit-transform: translate(5px, 0);
    -ms-transform: translate(5px, 0);
    transform: translate(5px, 0);
  }
  100%,
  36% {
    -webkit-transform: translate(0, 0);
    -ms-transform: translate(0, 0);
    transform: translate(0, 0);
  }
}
.fa-paperclip:before{
    content:"\1f4ce"
}
.fa-briefcase:before {
  content: "\1f4bc";
}
.fa-book:before {
  content: "\1f4d4";
}
.fa-calendar:before {
  content: "\1f4c5";
}
.fa-fort-awesome:before {
  content: "\1f3e0";
}
.fa-compass:before {
  content: "\1f9ed";
}
.site-top ul li a:hover:after {
  max-width: 100%;
}
.site-top ul li a:after {
  content: "";
  display: block;
  position: absolute;
  bottom: -14px;
  height: 6px;
  background-color: #fe9600;
  width: 100%;
  max-width: 0;
  transition: max-width 0.25s ease-in-out;
}
.lower li ul li {
  width: 100%;
  margin: 0;
}
.lower li ul {
  display: none;
  opacity: 1;
  position: absolute;
  background: #fff;
  padding: 10px;
  top: 46px;
  right: -13px;
  width: 60px;
  text-align: center;
  z-index: 9999;
  border-radius: 5px;
  box-shadow: 0 1px 40px -8px rgb(0 0 0 / 50%);
  -webkit-animation: fadeInUp 0.3s 0.1s ease both;
  animation: fadeInUp 0.3s 0.1s ease both;
}
.lower li:hover ul {
  display: inline-block;
  -webkit-transition: all 0.4s;
  transition: all 0.4s;
}
.site-top {
  width: 100%;
  display: block;
  margin: 0 auto;
  padding: 0 20px;
}
.site-top .lower-cantiner {
  position: absolute;
  left: 55%;
  min-width: 758.4px;
  pointer-events: none;
}
.site-top .lower {
  display: inline-block;
  margin: 15px 0 0 10px;
  font-size: 16px;
  position: relative;
  left: -50%;
  pointer-events: auto !important;
}
.site-top .lower nav {
  position: relative;
  float: right;
  display: block !important;
  animation: searchbox 0.2s;
}
.site-top ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: inline-block;
}
.site-top ul li {
  float: left;
  margin: 0 13px;
  position: relative;
  transition: all 1s ease;
}
.site-top ul li a {
  padding: 10px 0;
  display: inline-block;
  color: #666;
}
.fa {
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.site-top ul li a:hover {
  color: orange;
}

.site-header:hover {
  opacity: 0.95;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 1px 40px -8px rgb(0 0 0 / 50%);
}
.no-select {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.gizle {
  top: -100px;
  top: 0;
  z-index: 9999;
}
.yya {
  position: fixed;
  left: 0;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 1px 40px -8px rgb(0 0 0 / 50%);
}
.sabit {
  top: 0;
  z-index: 9999;
}
.site-header {
  width: 100%;
  height: 70px;
  background: 0 0;
  -webkit-transition: all 0.4s ease;
  transition: all 0.4s ease;
  position: fixed;
  z-index: 9999;
  top: 0;
}

.wrapper {
  animation: fade-in;
  animation-duration: 0.5s;
  -webkit-animation: fade-in 0.5s;
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  40% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@-webkit-keyframes fade-in {
  0% {
    opacity: 0;
  }
  40% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.lower {
  display: inline-block;
  margin: 15px 0 0 10px;
  font-size: 16px;
  position: relative;
  left: -50%;
  pointer-events: auto !important;
}

.moe-mashiro {
  font-family: "Moe-Mashiro", "Merriweather Sans", Helvetica, Tahoma, Arial,
    "PingFang SC", "Hiragino Sans GB", "Microsoft Yahei", "WenQuanYi Micro Hei",
    sans-serif;
}

.serif {
  font-family: "Noto Serif SC", "Source Han Serif SC", "Source Han Serif",
    "source-han-serif-sc", "PT Serif", "SongTi SC", "MicroSoft Yahei", Georgia,
    serif;
}
.chinese-font {
  font-family: "Merriweather Sans", Helvetica, Tahoma, Arial, "PingFang SC",
    "Hiragino Sans GB", "Microsoft Yahei", "WenQuanYi Micro Hei", sans-serif;
}
.site-branding {
  float: left;
  position: relative;
  height: 75px;
  line-height: 75px;
  margin-left: -6px;
  z-index: 9999;
}
.logolink.moe-mashiro .sakuraso,
.logolink.moe-mashiro .no {
  /* display: relative; */
  font-size: 22px;
  border-radius: 9px;
  padding-bottom: 10 px;
  padding-top: 5px;
}

.logolink a {
  color: #464646;
  float: left;
  font-size: 20px;
  font-weight: 800;
  height: 56px;
  /* line-height: 56px; */
  padding-left: 35px;
  padding-right: 15px;
  padding-top: 11px;
  text-decoration-line: none;
}
.logolink .sakuraso {
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  color: #464646;
  height: auto;
  line-height: 25px;
  margin-right: 0;
  padding-bottom: 0;
  padding-top: 1px;
  text-size-adjust: 100%;
  width: auto;
}
.logolink.moe-mashiro .no {
  display: inline-block;
  margin-left: 5px;
  margin-right: 5px;
}

.logolink ruby rt {
  font-size: 10px;
  transform: translateY(+45px);
  opacity: 0;
  transition-duration: 0.5s, 0.5s;
}

.logolink a:hover ruby rt {
  opacity: 1;
  transition-duration: 0.5s, 0.5s;
  color: #fe9600;
}

.logolink a:hover .sakuraso {
  transition-duration: 0.5s, 0.5s;

  background-color: orange;
  color: #fff;
}

.logolink a:hover ruby {
  transition-duration: 0.5s, 0.5s;
  color: #fe9600;
}

@-webkit-keyframes spin {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.logolink a:hover .no {
  -webkit-animation: spin 1.5s linear infinite;
  animation: spin 1.5s linear infinite;
}

.logolink.moe-mashiro a {
  color: #464646;
  float: left;
  font-size: 25px;
  font-weight: 800;
  height: 56px;
  line-height: 6px;
  padding-left: 46px;
  padding-right: 15px;
  padding-top: 25px;
  text-decoration-line: none;
  z-index: 9999;
}
.moe-mashiro {
  font-family: "Moe-Mashiro", "Merriweather Sans", Helvetica, Tahoma, Arial,
    "PingFang SC", "Hiragino Sans GB", "Microsoft Yahei", "WenQuanYi Micro Hei",
    sans-serif;
}

a {
  margin: 0 0rem;
}

/* #content {
    animation: main 1s;
}
.sabit {
    top: 0;
    z-index: 9999;
}
.gizle {
    top: -100px;
    top: 0;
    z-index: 9999;
}
.site-header {
    width: 100%;
    height: 75px;
    background: 0 0;
    -webkit-transition: all .4s ease;
    transition: all .4s ease;
    position: fixed;
    z-index: 9999;
    top: 0;
}
.site-content {
    max-width: 800px;
    padding: 0 10px;
    margin-left: auto;
    margin-right: auto;
    background-color: rgba(255,255,255,.8);
}
.wrapper {
    animation: fade-in;
    animation-duration: .5s;
    -webkit-animation: fade-in .5s;
}

.nav-bottom{
    display: flex;
        position: fixed;
        top: 30px;
    width: 100%;
    height: 5%;
} */
.el-main {
  padding-bottom: 0px !important;

  padding: 0px;
  /* padding-left: -5px;
    padding-right: 0px;
    padding-bottom: 0px; */
  /* overflow-x: hidden;
    overflow-y: hidden; */
  overflow: visible;
}

.el-menu-demo.header-nav {
  width: 100%;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: center; /*水平居中*/
  position: fixed;
  top: 0px;
  z-index: 9998;
  /* box-shadow:0 1px 40px -8px rgb(0 0 0 / 50%); */
}

.header-user-avatar {
  position: relative;
  float: right;
  margin-left: 19px;
  margin-right: 20px;
  margin-top: 15px;
  margin-bottom: 15px;
}
.site-top .lower,
.header-user-avatar {
  animation: searchbox 1s;
}
.site-branding {
  animation: sitetop 1s;
}
@media (max-width: 860px) {
  .site-branding {
    display: none;
  }
}
@keyframes searchbox {
  0% {
    opacity: 0;
    transform: translateX(30px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes sitetop {
  0% {
    opacity: 0;
    transform: translateX(-30px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
.el-header {
  padding: 0px !important;
}
.header-wrap {
  width: 100%;
  /* height: 7%; */
  /* display: flex;
    align-items: center;
    justify-content: center;  */
  position: fixed;
  top: 0px;
  z-index: 9998;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 1px 40px -8px rgb(0 0 0 / 50%);
  opacity: 0.98;
}
.yya {
  position: fixed;
  left: 0;
  top: 0px;
  z-index: 9998;
  background: rgba(255, 255, 255, 0.95);
  opacity: 0.95;
}
.header-wrap:hover {
  background-color: #fff;
}

/* 

.container[data-v-344d2c7f] {
    background-color: #fff;
    width: 100%;
    height: 47px;
    border-bottom: 1px solid #ccc;
    -webkit-box-shadow: 1px 1px 2px #cbcbcb;
    box-shadow: 1px 1px 2px #cbcbcb;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
}
.menu-wrap[data-v-344d2c7f] {
    height: 100%;
    width: 1220px;
    position: relative;
}
.menu-item[data-v-344d2c7f] {
    display: inline-block;
}
.menu-item-wrap[data-v-b6465d22] {
    height: 100%;
    width: 80px;
}
.top[data-v-b6465d22] {
    height: 90%;
    text-align: center;
    line-height: 42px;
    color: #66757f;
    font-weight: 700;
}
.bottom[data-v-b6465d22] {
    height: 10%;
    position: relative;
}
.blue[data-v-b6465d22] {
    background-color: #1da1f2;
    height: 0;
    width: 80px;
    -webkit-transition: height .1s;
    transition: height .1s;
    bottom: 0;
    position: absolute;
}
.right[data-v-344d2c7f] {
    position: absolute;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    width: 200px;
    height: 47px;
    right: 0;
    top: 0;
}
.container .menu-wrap .right .login-area-wrap[data-v-344d2c7f] {
    width: 40px;
} */
</style>
