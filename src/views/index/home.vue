<template>
  <div class="headertop filter-dot">
    <figure id="centerbg"
            class="centerbg"
            style=" height: 817px">
      <div class="focusinfo">
        <h1 class="center-text glitch is-glitching Ubuntu-font"
            data-text="Hi, xxy2000s!">Hi, xxy2000s!</h1>
        <div class="header-info">
          <p><i class="fa fa-quote-left"></i> 我加速超越, 却甩不掉紧紧跟随的伤悲 <i class="fa fa-quote-right"></i></p>
          <div class="top-social_v2">
            <li id="bg-pre"><img class="flipx"
                   src="https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/images/next-b.svg"></li>
            <li><a href="http://github.com/mashirozx"
                 target="_blank"
                 class="social-github"
                 title="github"><img src="https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/images/sns/github.png"></a></li>
            <li><a href="http://weibo.com/mashirozx?is_all=1"
                 target="_blank"
                 class="social-sina"
                 title="sina"><img src="https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/images/sns/sina.png"></a></li>
            <li><a href="https://t.me/SakurasoNoMashiro"
                 target="_blank"
                 class="social-lofter"
                 title="telegram"><img src="https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/images/sns/telegram.svg"></a></li>
            <li><a rel="me"
                 href="https://hello.2heng.xin/@mashiro"
                 target="_blank"
                 class="social-lofter"
                 title="Mastodon"><img src="https://2heng.xin/wp-content/themes/Sakura/images/Mastodon_Logotype_Simple.svg"></a></li>
            <li><a href="https://music.163.com/m/user/home?id=2655217"
                 target="_blank"
                 class="social-wangyiyun"
                 title="CloudMusic"><img src="https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/images/sns/wangyiyun.png"></a></li>
            <li><a href="https://twitter.com/2hengxin"
                 target="_blank"
                 class="social-wangyiyun"
                 title="Twitter"><img src="https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/images/sns/twitter.png"></a></li>
            <li><a href="https://www.zhihu.com/people/young-dolphin"
                 target="_blank"
                 class="social-wangyiyun"
                 title="Zhihu"><img src="https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/images/sns/zhihu.png"></a></li>
            <li><a onclick="mail_me()"
                 class="social-wangyiyun"
                 title="E-mail"><img src="https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/images/sns/email.svg"></a></li>
            <li id="bg-next"><img src="https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/images/next-b.svg"></li>
          </div>
        </div>
      </div>
    </figure>
  </div>
<!-- <div id="banner_wave_1"></div>
<div id="banner_wave_2" ></div> -->
  <div id="content"
       class="site-content">
    <div class="top-feature-row">
      <h1 class="fes-title"
          style="font-family: 'Ubuntu', sans-serif;"><i class="fa fa-anchor"
           aria-hidden="true"></i> START:DASH!!</h1>
      <div class="top-feature-v2">
        <div class="the-feature square from_left_and_right"> <a href="/theme-sakura/"
             target="_blank">
            <div class="img"><img src="https://cdn.jsdelivr.net/gh/moezx/cdn@3.3.2/img/other/sakura.md.png"></div>
            <div class="info">
              <h3>Sakura</h3>
              <p>本站 WordPress 主题</p>
            </div>
          </a></div>
      </div>
      <div class="top-feature-v2">
        <div class="the-feature square from_left_and_right"
             style="margin: 0 4.5px"> <a href="/2017/09/19/pixiv/"
             target="_blank">
            <div class="img"><img src="https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.6/img/other/th%20(3).jpg"></div>
            <div class="info">
              <h3>Pixiv</h3>
              <p>P 站的正确打开方式</p>
            </div>
          </a></div>
      </div>
      <div class="top-feature-v2">
        <div class="the-feature square from_left_and_right"> <a href="https://ak.2heng.xin/"
             target="_blank">
            <div class="img"><img src="https://view.moezx.cc/images/2019/06/11/74751807_angel.jpg"></div>
            <div class="info">
              <h3>明日方舟</h3>
              <p>游戏主界面 H5 复刻</p>
            </div>
          </a></div>
      </div>
    </div>

    <h1 class="fes-title"
        style="font-family: 'Ubuntu', sans-serif;padding-top: 40px"><i class="fa fa-anchor"
         aria-hidden="true"></i> START:CONTENTS!!</h1>

    <div class="info-wrapper">

      <h3><i class="el-icon-menu
"></i>Categories</h3>
      <ul class="category-wrapper">

        <li class="category-item" v-for="(value,index) in categories_name" :key=value><a :href="'/blogs/categories/' +categories_id[index]"
             class=""><span class="category-name">{{categories_name[index]}}</span> <span class="post-num"
                  style="background-color: #1cbbb4;">{{categories_count[index]}}</span></a></li>
      </ul>
      <hr>
      <h3><i class="el-icon-price-tag

"></i>Tags</h3>
      <div data-v-125939b4=""
           class="tags" >
           <span  data-v-125939b4=""
              class=""
              style="background-color: #0081ff;" v-for="(value, index) in tags_id" :key=value><a :href="'/blogs/tag/'+tags_id[index]">{{tags_name[index]}}</a></span>
              <!-- <span data-v-125939b4=""
              class=""
              style="background-color: rgb(242, 109, 109);">JavaScript</span><span data-v-125939b4=""
              class=""
              style="background-color: rgb(132, 155, 135);">ES6</span><span data-v-125939b4=""
              class=""
              style="background-color: rgb(132, 155, 135);">Vue</span><span data-v-125939b4=""
              class=""
              style="background-color: rgb(225, 91, 100);">VuePress</span><span data-v-125939b4=""
              class=""
              style="background-color: rgb(248, 178, 106);">VueProject</span> -->
              </div>
    </div>

    <div class="entry-content">
      <div class="poem-wrap">
        <div class="poem-border poem-left"></div>
        <div class="poem-border poem-right"></div>
        <h1>念两句诗</h1>
        <p id="poem">我们自古以来，就有埋头苦干的人，有拼命硬干的人，有为民请命的人，有舍身求法的人。</p>
        <p id="info">【宋代】晏殊《破阵子》</p>
      </div>
    </div>

    <h2 style="text-align:center">编程语言</h2>
    <div style="width: 500px;margin: auto; margin-bottom: 50px;">
      <el-progress :text-inside="true"
                   :stroke-width="30"
                   :percentage="javascript"
                   class="progress">
        <span class="pos-left">javascript</span>
        <span>{{javascript}}%</span>
      </el-progress>
      <el-progress :text-inside="true"
                   :stroke-width="30"
                   :percentage="html"
                   status="success"
                   class="progress">
        <span class="pos-left">html</span>
        <span>{{html}}%</span>
      </el-progress>
      <el-progress :text-inside="true"
                   :stroke-width="30"
                   :percentage="css"
                   status="warning"
                   class="progress">
        <span class="pos-left">css</span>
        <span>{{css}}%</span>
      </el-progress>
      <el-progress :text-inside="true"
                   :stroke-width="30"
                   :percentage="go"
                   class="progress">
        <span class="pos-left">go</span>
        <span>{{go}}%</span>
      </el-progress>
      <el-progress :text-inside="true"
                   :stroke-width="30"
                   :percentage="python"
                   class="progress">
        <span class="pos-left">python</span>
        <span>{{python}}%</span>
      </el-progress>
      <el-progress :text-inside="true"
                   :stroke-width="30"
                   :percentage="vue"
                   class="progress">
        <span class="pos-left">vue</span>
        <span>{{vue}}%</span>
      </el-progress>
    </div>
    <h2 style="text-align:center">GithubCard</h2>

    <a href="https://github.com/xxy2000s/wiki-blog"><img class="github-card"
           style="margin-bottom:30px;margin-top:10px"
           src="https://gh-card.dev/repos/xxy2000s/wiki-blog.svg"></a>


  </div>

</template>

<script>
import {getTags} from '../../api/Tag.js'
import {getCategories} from '../../api/Category.js'
import html2canvas from 'html2canvas';

export default {
  data() {
      return {
        tags_name:[],
        tags_id:[],
        tags_num:[],
        categories_name:[],
        categories_count:[],
        categories_parent:[],
        categories_id:[],
        percentage: 10,
        colors: [
          {color: '#f56c6c', percentage: 20},
          {color: '#e6a23c', percentage: 40},
          {color: '#5cb87a', percentage: 60},
          {color: '#1989fa', percentage: 80},
          {color: '#6f7ad3', percentage: 100}
        ],
        javascript: 70,
        html: 100,
        css: 80,
        go: 60,
        python: 60,
        vue: 70,
      };
    },
    mounted(){
        this.showTag();
        this.showCategory();
//         html2canvas(document.getElementById('capture'), {
//   onrendered: function(canvas) {
//     var url = canvas.toDataURL("https://baidu.com");//图片地址
//     document.body.appendChild(canvas);
//   },
//   width: 300,
//   height: 300
// });


    }
    ,
    methods:{
        showTag(){
            getTags()
            .then((res=>{
                for(let i=0;i<res.length;i++){
                    this.tags_name.push(res[i].name)
                    this.tags_id.push(res[i].id)
                    this.tags_num.push(res[i].count)
                }
            }))
            .catch((err)=>{
                console.log("get tags error")
            })
        },
        showCategory(){
            getCategories()
            .then((res)=>{
                for(let i=0;i<res.length;i++){
                    this.categories_name.push(res[i].name);
                    this.categories_count.push(res[i].count);
                    this.categories_parent.push(res[i].parent);
                    this.categories_id.push(res[i].id)
                }
            })
            .catch((err)=>{
                console.log("get categories error")
            })
        },
        
        
    }
}
</script>

<style scoped src="../../assets/css/feature-card.css">
</style>
<style scoped src="../../assets/css/poem.css">
</style>
<style scoped>
hr {
  border: 0;
  border-top: 1px solid #eaecef;
}
.tags span[data-v-125939b4] {
  vertical-align: middle;
  margin: 4px 4px 10px;
  padding: 4px 8px;
  display: inline-block;
  cursor: pointer;
  border-radius: 0.25rem;
  background: #fff;
  color: #fff;
  line-height: 13px;
  font-size: 13px;
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.1);
  transition: all 0.5s;
}
.tags span a{
    text-decoration: none;
    color: #fff;
}
.tags[data-v-125939b4] {
  margin: 30px 0;
}

.info-wrapper .category-wrapper .category-item a .post-num {
  width: 1.6rem;
  height: 1.6rem;
  text-align: center;
  line-height: 1.6rem;
  border-radius: 0.25rem;
  background: #eee;
  font-size: 13px;
  color: #fff;
}
ul {
  line-height: 2.2;
}
.info-wrapper .category-wrapper {
  list-style: none;
  padding-left: 0;
}
.info-wrapper .category-wrapper .category-item a {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #242424;
}
.info-wrapper .category-wrapper .category-item:hover {
  transform: scale(1.04);
}
.info-wrapper .category-wrapper .category-item {
  margin-bottom: 0.4rem;
  padding: 0.4rem 0.8rem;
  transition: all 0.5s;
  border-radius: 0.25rem;
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

.info-wrapper {
  /* position: sticky; */
  top: 70px;
  overflow: hidden;
  transition: all 0.3s;
  margin-left: 15px;
  flex: 0 0 300px;
  height: auto;
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.1);
  border-radius: 0.25rem;
  box-sizing: border-box;
  padding: 0 15px;
  background: #fff;
}

.el-progress {
  margin: 10px;
}
.github-card {
  display: flex;
  justify-content: center;
  margin: auto;
}
.is-homepage {
  opacity: 0 !important;
}

#centerbg {
  width: 100%;
  height: 550px;
  margin: 0;
  padding: 0;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  z-index: -1;
}
#banner_wave_2 {
    width: auto;
    height: 80px;
    background: url("https://cdn.jsdelivr.net/gh/moezx/cdn@3.5.1/img/Sakura/images/wave2.png") repeat-x;
    _filter: alpha(opacity=80);
    position: absolute;
    bottom: 0;
    width: 130%;
    left: -30%;
    z-index: 4;
    opacity: 1;
    transition-duration: .4s,.4s;
}
#banner_wave_1 {
    width: auto;
    height: 65px;
    background: url("https://cdn.jsdelivr.net/gh/moezx/cdn@3.5.1/img/Sakura/images/wave1.png") repeat-x;
    _filter: alpha(opacity=80);
    position: absolute;
    bottom: 0;
    width: 120%;
    left: -20%;
    z-index: 5;
    opacity: 1;
    transition-duration: .4s,.4s;
}
.centerbg {
  background-image: url('src/assets/imgs/back3.jpg');
  background-position: center center;
  background-attachment: inherit;
}

.flipx {
  -moz-transform: scaleX(-1);
  -webkit-transform: scaleX(-1);
  -o-transform: scaleX(-1);
  transform: scaleX(-1);
  filter: FlipH;
}
.Ubuntu-font {
  font-family: 'Ubuntu', sans-serif;
}
.headertop.filter-dot:before {
  background-image: url(https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/images/dot.gif);
}
.headertop:before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 3;
  background-attachment: fixed;
}
.headertop,
.pattern-center {
  animation: header 1s;
}
@keyframes header {
  0% {
    opacity: 0;
    transform: translateY(-50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@-webkit-keyframes glitch-loop-1 {
  0% {
    clip: rect(36px, 9999px, 9px, 0);
  }
  25% {
    clip: rect(25px, 9999px, 99px, 0);
  }
  50% {
    clip: rect(50px, 9999px, 102px, 0);
  }
  75% {
    clip: rect(30px, 9999px, 92px, 0);
  }
  100% {
    clip: rect(91px, 9999px, 98px, 0);
  }
}
@keyframes glitch-loop-1 {
  0% {
    clip: rect(36px, 9999px, 9px, 0);
  }
  25% {
    clip: rect(25px, 9999px, 99px, 0);
  }
  50% {
    clip: rect(50px, 9999px, 102px, 0);
  }
  75% {
    clip: rect(30px, 9999px, 92px, 0);
  }
  100% {
    clip: rect(91px, 9999px, 98px, 0);
  }
}

@-webkit-keyframes glitch-loop-2 {
  0% {
    top: -1px;
    left: 1px;
    clip: rect(65px, 9999px, 119px, 0);
  }
  25% {
    top: -6px;
    left: 4px;
    clip: rect(79px, 9999px, 19px, 0);
  }
  50% {
    top: -3px;
    left: 2px;
    clip: rect(68px, 9999px, 11px, 0);
  }
  75% {
    top: 0;
    left: -4px;
    clip: rect(95px, 9999px, 53px, 0);
  }
  100% {
    top: -1px;
    left: -1px;
    clip: rect(31px, 9999px, 149px, 0);
  }
}
@keyframes glitch-loop-2 {
  0% {
    top: -1px;
    left: 1px;
    clip: rect(65px, 9999px, 119px, 0);
  }
  25% {
    top: -6px;
    left: 4px;
    clip: rect(79px, 9999px, 19px, 0);
  }
  50% {
    top: -3px;
    left: 2px;
    clip: rect(68px, 9999px, 11px, 0);
  }
  75% {
    top: 0;
    left: -4px;
    clip: rect(95px, 9999px, 53px, 0);
  }
  100% {
    top: -1px;
    left: -1px;
    clip: rect(31px, 9999px, 149px, 0);
  }
}

.glitch {
  position: relative;
  color: #fff;
  mix-blend-mode: lighten;
}

.glitch:hover:before {
  text-shadow: 4px 0 #ff3f1a;
  animation: glitch-loop-1 0.8s infinite ease-in-out alternate-reverse;
}

.glitch:before {
  left: -1px;
  text-shadow: 1px 0 #ff3f1a;
}
.glitch:before,
.glitch:after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0);
  clip: rect(0, 0, 0, 0);
}

.glitch:hover:after {
  text-shadow: -5px 0 #00a7e0;
  animation: glitch-loop-2 0.8s infinite ease-in-out alternate-reverse;
}

.glitch:after {
  left: 1px;
  text-shadow: -1px 0 #00a7e0;
}
.center-text {
  margin: auto;
  font-family: 'Ubuntu', sans-serif;
  font-size: 80px;
  text-transform: uppercase;
}
.focusinfo {
  position: relative;
  max-width: 800px;
  padding: 0 10px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  text-align: center;
  z-index: 99;
  -webkit-transition: 0.4s ease all;
  -moz-transition: 0.4s ease all;
  -o-transition: 0.4s ease all;
  transition: 0.4s ease all;
}
.top-social_v2 img {
  height: 23px;
  width: 23px;
  padding: 6px;
  background: 0 0;
  border-radius: 10px;
}
.header-info p {
  margin: 0;
  font-family: 'Ubuntu', sans-serif;
  font-weight: 700;
}
.header-info {
  width: 63%;
  margin: auto;
  font-size: 16px;
  color: #eaeadf;
  background: rgba(0, 0, 0, 0.5);
  padding: 15px;
  margin-top: 22px;
  letter-spacing: 0;
  line-height: 30px;
  border-radius: 10px;
  box-sizing: initial;
  white-space: nowrap;
}

.fa {
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.top-social_v2 {
  height: 32px;
  margin-bottom: -15px;
  margin-left: 10px;
  list-style: none;
  display: inline-block;
}
.top-social_v2 li {
  float: left;
  margin-right: 13px;
}

a {
  text-decoration: none;
}
</style>
