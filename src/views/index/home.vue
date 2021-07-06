<template>
  <div class="headertop filter-dot">
    <figure id="centerbg" class="centerbg" style="height: calc(100vh)">
      <div class="focusinfo">
        <h1
          class="center-text glitch is-glitching Ubuntu-font"
          data-text="Hi, xxy2000s!"
          @click="jump('content-margin')"
        >
          Hi, xxy2000s!
        </h1>
        <div class="header-info">
          <p>
            <i class="fa fa-quote-left"></i> 我加速超越, 却甩不掉紧紧跟随的伤悲
            <i class="fa fa-quote-right"></i>
          </p>
          <div class="top-social_v2">
            <li id="bg-pre">
              <img
                class="flipx"
                src="https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/images/next-b.svg"
              />
            </li>
            <li>
              <a
                class="social-logo"
                href="https://tophub.today/"
                rel="nofollow"
                target="_blank"
                title = "tophub"
                ><img
                  src="https://file.ipadown.com/tophub/assets/images/logo.png"
              /></a>
            </li>
            <li>
              <a
                href="http://github.com/xxy2000s"
                target="_blank"
                class="social-logo"
                title="github"
                ><img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ407CCEtdj8z38DaUG_VQE-33X0NZFxVXKV_iRd_9w5JW6M_vyUrtohsvk_YQygRiIeY8&usqp=CAU"
              /></a>
            </li>
            <li>
              <a
                href="https://gitmind.cn/app/my"
                target="_blank"
                class="social-logo"
                title="git mind"
                ><img
                  src="https://qncdn.aoscdn.com/local/gitmind.cn/img/logo.svg?ca89f90eced75ceb6767405107511150"
              /></a>
            </li>
            <li>
              <a
                class="bilibili social-logo"
                href="https://space.bilibili.com/"
                rel="nofollow"
                target="_blank"
                title="bilibili space"
                ><img
                  src="https://pic.qqtn.com/up/2018-9/15363723161011365.png"
                />
              </a>
            </li>
            <li>
              <a
                href="https://app.gitbook.com/"
                target="_blank"
                class="social-logo"
                title="git book"
                ><img
                  src="https://www.markdown.xyz/assets/images/tool-icons/gitbook.png"
              /></a>
            </li>
            <li>
              <a
                rel="me"
                href="https://app.yinxiang.com/Home.action"
                target="_blank"
                class="social-logo"
                title="YinXiang"
                ><img
                  src="https://appcenter.yinxiang.com/images/apps/evernote/logo_175.png"
              /></a>
            </li>
            <li>
              <a
                href="https://leetcode-cn.com/problemset/all/"
                target="_blank"
                class="social-logo"
                title="leetcode"
                ><img
                  src="https://user-images.githubusercontent.com/32040901/79929570-197c2480-8414-11ea-9358-c92a53916a7f.png"
              /></a>
            </li>
            <li>
              <a
                class="zhihu social-logo"
                href="https://www.zhihu.com/collections/mine"
                rel="nofollow"
                target="_blank"
                title="zhihu"
                ><img
                  src="https://file.ipadown.com/tophub/assets/images/media/zhihu.com.png_160x160.png"
              /></a>
            </li>

            <li>
              <a
                href="https://www.nowcoder.com/discuss/tag/2656"
                target="_blank"
                class="social-logo"
                title="NowCoder"
                ><img
                  src="https://pic2.zhimg.com/v2-ed8af671743eb31a79a601477e0804f5_l.jpg"
              /></a>
            </li>
            <li id="bg-next">
              <img
                src="https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/images/next-b.svg"
              />
            </li>
          </div>
        </div>
      </div>
    </figure>
  </div>

  <div id="background">
    <div id="content-margin" style="padding-top: 10px;opacity:0"></div>
    <div id="content" class="site-content">
      <div class="info-wrapper">
        <div class="sidebar-banner">
          <div
            class="site-author motion-element"
            itemprop="author"
            itemscope=""
            itemtype="http://schema.org/Person"
          >
            <img
              class="site-author-image"
              itemprop="image"
              alt="xxy2000s"
              src="/src/assets/imgs/profile.jpg"
            />
            <p class="site-author-name" itemprop="name">xxy2000s</p>
            <div class="site-description" itemprop="description">
              来自BUPT的Rookie Coder
            </div>
          </div>

          <div class="site-state-wrap motion-element">
            <nav class="site-state">
              <div class="site-state-item site-state-posts">
                <a href="/timeline/">
                  <span class="site-state-item-count">{{ article_num }}</span>
                  <span class="site-state-item-name"> 文章</span>
                </a>
              </div>
              <div class="site-state-item site-state-categories">
                <a href="/blogs/categories/0">
                  <span class="site-state-item-count">
                    {{ categories_id.length }}</span
                  >
                  <span class="site-state-item-name"> 分类</span></a
                >
              </div>
              <div class="site-state-item site-state-tags">
                <a href="/blogs/tag/0">
                  <span class="site-state-item-count">
                    {{ tags_id.length }}</span
                  >
                  <span class="site-state-item-name"> 标签</span></a
                >
              </div>
            </nav>
          </div>
        </div>

        <h3><i class="el-icon-menu"></i>Categories</h3>
        <ul class="category-wrapper">
          <li
            class="category-item"
            v-for="(value, index) in categories_name"
            :key="value"
          >
            <a :href="'/blogs/categories/' + categories_id[index]" class=""
              ><span class="category-name">{{ categories_name[index] }}</span>
              <span class="post-num" style="background-color: #1cbbb4">{{
                categories_count[index]
              }}</span></a
            >
          </li>
        </ul>
        <hr />
        <h3><i class="el-icon-price-tag"></i>Tags</h3>
        <div data-v-125939b4="" class="tags">
          <span
            data-v-125939b4=""
            class=""
            style="background-color: #0081ff"
            v-for="(value, index) in tags_id"
            :key="value"
            ><a :href="'/blogs/tag/' + tags_id[index]">{{
              tags_name[index]
            }}</a></span
          >
        </div>

        <!-- <h2 style="text-align: center">GithubCard</h2>

        <div>
          <a href="https://github.com/xxy2000s/wiki-blog"
            ><img
              class="github-card"
              style="margin-bottom: 30px; margin-top: 10px"
              src="https://gh-card.dev/repos/xxy2000s/wiki-blog.svg"
          /></a>
        </div> -->
      </div>

      <div class="top-feature-row">
        <h1 class="fes-title" style="font-family: 'Ubuntu', sans-serif">
          <i class="fa fa-anchor" aria-hidden="true"></i> START:DASH!!
        </h1>
        <div class="top-feature-v2">
          <div class="the-feature square from_left_and_right">
            <a
              href="https://pintia.cn/problem-sets/994805342720868352/problems/type/7?page=0"
              target="_blank"
            >
              <div class="img">
                <img src="/src/assets/imgs/pta.jpg" />
              </div>
              <div class="info">
                <h3>PTA</h3>
                <p>155道 PAT甲级真题</p>
              </div>
            </a>
          </div>
        </div>
        <div class="top-feature-v2">
          <div
            class="the-feature square from_left_and_right"
            style="margin: 0 12px"
          >
            <a href="https://www.acwing.com/problem" target="_blank">
              <div class="img">
                <img
                  src="https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.6/img/other/th%20(3).jpg"
                />
              </div>
              <div class="info">
                <h3>ACWing</h3>
                <p>一个很好的练习算法题的平台</p>
              </div>
            </a>
          </div>
        </div>
        <div class="top-feature-v2">
          <div class="the-feature square from_left_and_right">
            <a href="https://app.diagrams.net/?src=about" target="_blank">
              <div class="img">
                <img
                  src="https://view.moezx.cc/images/2019/06/11/74751807_angel.jpg"
                />
              </div>
              <div class="info">
                <h3>diagram</h3>
                <p>思维导图</p>
              </div>
            </a>
          </div>
        </div>


<div style="padding-top: 50px"></div>
        <h1 class="fes-title" style="font-family: 'Ubuntu', sans-serif">
          <i class="fa fa-anchor" aria-hidden="true"></i> IWHISPER:SO POOR!!
        </h1>
        <!-- <div class="entry-content">
          <div class="poem-wrap">
            <div class="poem-border poem-left"></div>
            <div class="poem-border poem-right"></div>
            <h1>念两句诗</h1>
            <p id="poem">天若有情天亦老, 人间正道是沧桑。</p>
            <p id="info">毛泽东《七律·人民解放军占领南京》</p>
          </div>
        </div> -->

        <submissionChart></submissionChart>
        <div style="padding-top: 50px"></div>
        <h1 class="fes-title" style="font-family: 'Ubuntu', sans-serif">
          <i class="fa fa-anchor" aria-hidden="true"></i> SKILL:I'M SO
          VEGETABLE!!
        </h1>
        <h2 style="text-align: center">技能树</h2>

        <div>
          <div class="progress-item">
            <div class="progress-desc">Javascript</div>
            <el-progress
              :text-inside="true"
              :stroke-width="30"
              :percentage="javascript"
              class="progress"
            >
              <span class="pos-left"></span>
              <span>{{ javascript }}%</span>
            </el-progress>
          </div>
          <div class="progress-item">
            <div class="progress-desc">HTML</div>
            <el-progress
              :text-inside="true"
              :stroke-width="30"
              :percentage="html"
              status="success"
              class="progress"
            >
              <span class="pos-left"></span>
              <span>{{ html }}%</span>
            </el-progress>
          </div>
          <div class="progress-item">
            <div class="progress-desc">CSS</div>
            <el-progress
              :text-inside="true"
              :stroke-width="30"
              :percentage="css"
              status="warning"
              class="progress"
            >
              <span class="pos-left"></span>
              <span>{{ css }}%</span>
            </el-progress>
          </div>
          <div class="progress-item">
            <div class="progress-desc">Go</div>
            <el-progress
              :text-inside="true"
              :stroke-width="30"
              :percentage="go"
              class="progress"
            >
              <span class="pos-left"></span>
              <span>{{ go }}%</span>
            </el-progress>
          </div>
          <div class="progress-item">
            <div class="progress-desc">Python</div>
            <el-progress
              :text-inside="true"
              :stroke-width="30"
              :percentage="python"
              class="progress"
            >
              <span class="pos-left"></span>
              <span>{{ python }}%</span>
            </el-progress>
          </div>
          <div class="progress-item">
            <div class="progress-desc">Vue</div>
            <el-progress
              :text-inside="true"
              :stroke-width="30"
              :percentage="vue"
              class="progress"
            >
              <span class="pos-left"></span>
              <span>{{ vue }}%</span>
            </el-progress>
          </div>
        </div>

        
      </div>
    </div>

    <!-- <div class="footer-wrapper" style="margin-top: 10px">
      <span
        ><a href="https://github.com/xxy2000s" target="_blank"
          >github address</a
        ></span
      >
      <span
        ><a
          href="http://www.topgoer.com/go%E5%9F%BA%E7%A1%80/Go%E8%AF%AD%E8%A8%80%E7%9A%84%E4%B8%BB%E8%A6%81%E7%89%B9%E5%BE%81.html"
          target="_blank"
          >Go</a
        ></span
      >
      <span
        ><a
          href="https://v3.cn.vuejs.org/guide/introduction.html"
          target="_blank"
          >Vue</a
        ></span
      >
      <span
        ><a
          href="https://element-plus.gitee.io/#/zh-CN/component/installation"
          target="_blank"
          >Element UI</a
        ></span
      >
    </div> -->
  </div>
  <!-- <div id="banner_wave_1"></div>
<div id="banner_wave_2" ></div> -->
</template>

<script>
import { getTags } from "../../api/Tag.js";
import { getCategories } from "../../api/Category.js";
import { getArticleList } from "../../api/getArticleList.js";
import html2canvas from "html2canvas";
import submissionChart from "../navi/menu3/menu3-3.vue";

export default {
  components: {
    submissionChart,
  },
  data() {
    return {
      article_num: 0,
      tags_name: [],
      tags_id: [],
      tags_num: [],
      categories_name: [],
      categories_count: [],
      categories_parent: [],
      categories_id: [],
      percentage: 10,
      colors: [
        { color: "#f56c6c", percentage: 20 },
        { color: "#e6a23c", percentage: 40 },
        { color: "#5cb87a", percentage: 60 },
        { color: "#1989fa", percentage: 80 },
        { color: "#6f7ad3", percentage: 100 },
      ],
      javascript: 70,
      html: 100,
      css: 80,
      go: 60,
      python: 60,
      vue: 70,
    };
  },
  mounted() {
    this.showTag();
    this.showCategory();
    this.getArticleNum();

    //         html2canvas(document.getElementById('capture'), {
    //   onrendered: function(canvas) {
    //     var url = canvas.toDataURL("https://baidu.com");//图片地址
    //     document.body.appendChild(canvas);
    //   },
    //   width: 300,
    //   height: 300
    // });
  },
  methods: {
    showTag() {
      getTags()
        .then((res) => {
          for (let i = 0; i < res.length; i++) {
            this.tags_name.push(res[i].name);
            this.tags_id.push(res[i].id);
            this.tags_num.push(res[i].count);
          }
        })
        .catch((err) => {
          console.log("get tags error");
        });
    },
    showCategory() {
      getCategories()
        .then((res) => {
          for (let i = 0; i < res.length; i++) {
            this.categories_name.push(res[i].name);
            this.categories_count.push(res[i].count);
            this.categories_parent.push(res[i].parent);
            this.categories_id.push(res[i].id);
          }
        })
        .catch((err) => {
          console.log("get categories error");
        });
    },
    getArticleNum() {
      getArticleList(1)
        .then((res) => {
          this.article_num = res.length;
        })
        .catch((err) => {
          console.log("get article num error");
        });
    },
    jump(params) {
      document.getElementById(params).scrollIntoView({
        behavior: "smooth", // 平滑过渡
      });
    },
  },
};
</script>

<style scoped src="../../assets/css/feature-card.css"></style>
<style scoped src="../../assets/css/poem.css"></style>
<style scoped>
#background {
  background-image: url("/src/assets/imgs/home.jpg")

}
.sidebar-banner {
  background: #fff;
  padding: 15px;
  margin-bottom: 15px;
}
.footer-wrapper {
  padding: 1rem 2.5rem;
  /* border-top: 1px solid #edeaef; */
  text-align: center;
  color: #5b5b5b;
}
.footer-wrapper span {
  padding-left: 20px;
}
a {
  color: rgb(23, 148, 71);
}

.progress-desc {
  font-family: "Microsoft Yahei";
  margin-right: 12px;
  text-align: center;
  width: 130px;
  float: left;
}
.progress-item {
  width: 100%;
  clear: both;
  margin-right: auto;
  margin-left: auto;
  height: 35px;
}

.site-state {
  display: flex;
  justify-content: center;
  line-height: 1.4;
  margin-top: 10px;
  overflow: hidden;
  text-align: center;
  white-space: nowrap;
}
.site-state-item {
  padding: 0 10px;
}
.site-state-item-count {
  display: block;
  font-size: 1em;
  font-weight: 600;
  text-align: center;
  color: #555;
}
.site-state-item-name {
  color: #999;
  font-size: 0.8125em;
}
.sidebar-inner {
  border-radius: initial;
  box-shadow: initial;
  box-sizing: border-box;
  color: #555;
  width: 360px;
  padding: 0;
}
.site-author-image:hover {
  transform: rotate(360deg);
}
.site-author-image {
  border: 1px solid #eee;
  display: block;
  margin: 0 auto;
  max-width: 120px;
  padding: 2px;
  border-radius: 50%;
  transform: rotate(0deg);
  transition: all ease 1s;
}
.site-author-name {
  color: #555;
  font-weight: 600;
  text-align: center;
}
.site-description {
  color: #999;
  font-size: 1em;
  margin-top: 0;
  text-align: center;
}
.site-state-item:not(:first-child) {
  border-left: 1px solid #eee;
}
.social-logo {
  display: inline-block;
  vertical-align: middle;
  padding: 0;
  width: 30px;
  height: 30px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
bilibili {
  background-image: url(https://qncdncss.aoscdn.com/local/gitmind.cn/img/gitmind/svg/bilibili.svg?_=125e6e7);
}
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
.tags span a {
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
  /* top: 70px; */
  margin-top: 70px;
  overflow: hidden;
  transition: all 0.3s;
  margin-left: 15px;
  margin-right: 15px;
  flex: 0 0 360px;
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
  background: url("https://cdn.jsdelivr.net/gh/moezx/cdn@3.5.1/img/Sakura/images/wave2.png")
    repeat-x;
  _filter: alpha(opacity=80);
  position: absolute;
  bottom: 0;
  width: 130%;
  left: -30%;
  z-index: 4;
  opacity: 1;
  transition-duration: 0.4s, 0.4s;
}
#banner_wave_1 {
  width: auto;
  height: 65px;
  background: url("https://cdn.jsdelivr.net/gh/moezx/cdn@3.5.1/img/Sakura/images/wave1.png")
    repeat-x;
  _filter: alpha(opacity=80);
  position: absolute;
  bottom: 0;
  width: 120%;
  left: -20%;
  z-index: 5;
  opacity: 1;
  transition-duration: 0.4s, 0.4s;
}
.centerbg {
  background-image: url("/src/assets/imgs/back2.jpg");
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
  font-family: "Ubuntu", sans-serif;
}
.headertop.filter-dot:before {
  background-image: url(https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/images/dot.gif);
}
.headertop:before {
  content: "";
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
  font-family: "Ubuntu", sans-serif;
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
  font-family: "Ubuntu", sans-serif;
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
