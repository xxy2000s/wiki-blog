<template>
  <!-- <div class="m-hero__picture">
  <img  sizes="(max-width: 600px) 600px, (max-width: 1000px) 1000px, 2000px" :src="logo" alt="">
</div> -->

  <!-- <section class="m-hero with-picture"> -->

  <!-- <div class="m-hero__picture ">
    <img :src="'src/assets/imgs/back3.jpg'">
  </div> -->
  <figure id="centerbg"
          class="centerbg"
          style=" height: 817px;background-image: url('src/assets/imgs/back3.jpg');">
    <div class="focusinfo">
      <h1 class="center-text glitch is-glitching Ubuntu-font"
          data-text="Hi, xxy2000s!">Hi, xxy2000s!</h1>
      <div class="header-info">
        <p><i class="fa fa-quote-left"></i> 缓缓飘落的枫叶像思念, 我点燃烛火温暖岁末的秋天 <i class="fa fa-quote-right"></i></p>
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

  <!-- <div class="m-hero__content">
    <h1 class="m-hero-title bigger">xxy2000s</h1>
    <p class="m-hero-description bigger">我加速超越, 却甩不掉紧紧跟随的伤悲</p>
    <a href="https://github.com/xxy2000s" class="m-button filled ">Github</a>
  </div> -->

  <!-- </section> -->

  <div class="l-content">
    <div class="l-wrapper">
      <div class="l-grid">
        <article class="m-article-card">
          <div class="m-article-card__picture">
            <a href="https://www.baidu.com"
               class="m-article-card__picture-link"></a>
            <img class="m-article-card__picture-background"
                 :src="'src/assets/imgs/back1.jpg'"
                 loading="lazy">
          </div>

          <div class="m-article-card__info">
            <a href="https://quickapp.lovejade.cn/tag/tools/"
               class="m-article-card__tag">工具利器</a>
            <a href="/list-of-top-20-ai-product-tools/"
               class="m-article-card__info-link"
               aria-label="十佳 AI 产品工具，为生活添彩">
              <div>
                <h2 class="m-article-card__title js-article-card-title "
                    title="十佳 AI 产品工具，为生活添彩"
                    style="">
                  十佳 AI 产品工具，为生活添彩
                </h2>
              </div>
              <div class="m-article-card__timestamp">
                <span>9 months ago</span>
                <span>•</span>
                <span>18 min read</span>
              </div>
            </a>
          </div>
        </article>

        <article class="m-article-card">
          <div class="m-article-card__picture">
            <a href="https://www.baidu.com"
               class="m-article-card__picture-link"></a>
            <img class="m-article-card__picture-background"
                 :src="'src/assets/imgs/back2.jpg'"
                 loading="lazy">
          </div>

          <div class="m-article-card__info">
            <a href="https://quickapp.lovejade.cn/tag/tools/"
               class="m-article-card__tag">工具利器</a>
            <a href="/list-of-top-20-ai-product-tools/"
               class="m-article-card__info-link"
               aria-label="十佳 AI 产品工具，为生活添彩">
              <div>
                <h2 class="m-article-card__title js-article-card-title "
                    title="十佳 AI 产品工具，为生活添彩"
                    style="">
                  十佳 AI 产品工具，为生活添彩
                </h2>
              </div>
              <div class="m-article-card__timestamp">
                <span>9 months ago</span>
                <span>•</span>
                <span>18 min read</span>
              </div>
            </a>
          </div>
        </article>

        <article class="m-article-card">
          <div class="m-article-card__picture">
            <a href="https://www.baidu.com"
               class="m-article-card__picture-link"></a>
            <img class="m-article-card__picture-background"
                 :src="'src/assets/imgs/back0.jpg'"
                 loading="lazy">
          </div>

          <div class="m-article-card__info">
            <a href="https://quickapp.lovejade.cn/tag/tools/"
               class="m-article-card__tag">工具利器</a>
            <a href="/list-of-top-20-ai-product-tools/"
               class="m-article-card__info-link"
               aria-label="十佳 AI 产品工具，为生活添彩">
              <div>
                <h2 class="m-article-card__title js-article-card-title "
                    title="十佳 AI 产品工具，为生活添彩"
                    style="">
                  十佳 AI 产品工具，为生活添彩
                </h2>
              </div>
              <div class="m-article-card__timestamp">
                <span>9 months ago</span>
                <span>•</span>
                <span>18 min read</span>
              </div>
            </a>
          </div>
        </article>

        <article class="m-article-card">
          <div class="m-article-card__picture">
            <a href="https://www.baidu.com"
               class="m-article-card__picture-link"></a>
            <img class="m-article-card__picture-background"
                 :src="'src/assets/imgs/background.jpg'"
                 loading="lazy">
          </div>

          <div class="m-article-card__info">
            <a href="https://quickapp.lovejade.cn/tag/tools/"
               class="m-article-card__tag">工具利器</a>
            <a href="/list-of-top-20-ai-product-tools/"
               class="m-article-card__info-link"
               aria-label="十佳 AI 产品工具，为生活添彩">
              <div>
                <h2 class="m-article-card__title js-article-card-title "
                    title="十佳 AI 产品工具，为生活添彩"
                    style="">
                  十佳 AI 产品工具，为生活添彩
                </h2>
              </div>
              <div class="m-article-card__timestamp">
                <span>9 months ago</span>
                <span>•</span>
                <span>18 min read</span>
              </div>
            </a>
          </div>
        </article>
      </div>
    </div>

  </div>

  <!-- <el-carousel :interval="1600000" type="card" height="520px">
    <el-carousel-item v-for="(item, index) in links" :key="item" >
    <div class="block" >
      <a :href="links[index%5]">
        <el-image :src="src[index%5]"></el-image>
      </a>
    </div>        
    </el-carousel-item>
  </el-carousel> -->

</template>

<script>
import pic1 from "../../assets/imgs/stream.jpg"
import pic2 from "../../assets/imgs/bird.jpg"
import pic3 from "../../assets/imgs/deer.jpg"
import pic4 from "../../assets/imgs/dog.jpg"
import pic5 from "../../assets/imgs/wolf.jpg"
import pic6 from "../../assets/imgs/intro.png"
import article from '../blog/article.vue'

export default{
  components: { article },
    data(){
      return{
        links: [
          "https://code.xiaxuyang.com", 
          "https://www.yuque.com", 
          "https://interview.xiaxuyang.com",
          "https://docs.xiaxuyang.com", 
          "https://app.gitbook.com"
          ],
        //src: "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
        src: [pic1, pic2,pic3,pic4,pic5],
        cnt: 0,
        logo: pic6,
      }
    },
    methods:{
      func(){

      }
    }
}
    
</script>

<style scoped>
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

.centerbg {
  background-image: url(https://api.2heng.xin/cover/);
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
  top: 40%;
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

.m-article-card__tag {
  position: absolute;
  top: 20px;
  left: 20px;
  right: 20px;
  color: var(--link-color);
  letter-spacing: 0.2px;
  line-height: 1.3;
  font-size: 0.875rem;
  font-weight: 600;
}
.m-article-card__title {
  color: #333;
  letter-spacing: 0.4px;
  line-height: 1.3;
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
}
.m-article-card__author-stats,
.m-article-card__timestamp {
  display: flex;
  align-items: center;
  color: #333;
  letter-spacing: 0.2px;
  font-size: 0.875rem;
  margin-top: 80px;
  margin-left: 20px;
}

.m-article-card:hover {
  transform: translateY(-5px);
}

:after,
:before {
  text-decoration: inherit;
  vertical-align: inherit;
}

*,
:after,
:before {
  background-repeat: no-repeat;
  /* box-sizing: border-box; */
}
.m-article-card:before {
  content: '';
  position: absolute;
  top: 10px;
  right: 10px;
  bottom: 0;
  left: 10px;
  border-radius: 10px;
  box-shadow: var(--article-shadow-normal), 0 0 0 transparent;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
}

/** */
.m-article-card__picture-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  z-index: 0;
}

.m-article-card__picture-link {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

@media only screen and (min-width: 48rem) {
  .m-article-card__info {
    padding-top: 53px;
  }
}

.m-article-card__info {
  flex: 1;
  position: relative;
  padding-top: 48px;
  height: 100px;
  overflow: hidden;
  border-radius: 0 0 20px 20px;
  background-color: #fff;
  border: 0.1px solid #ebeef5;
  box-shadow: 0 10px 10px rgb(0 0 0 / 8%)
}

@media only screen and (min-width: 48rem) {
  .m-article-card__picture {
    height: 220px;
  }
}

.m-article-card__picture {
  position: relative;
  height: 200px;
  border-radius: 10px 10px 0 0;
  background-color: var(--secondary-subtle-color);
  overflow: hidden;
  transform: translateZ(0);
}

@media only screen and (min-width: 48rem) {
  .m-article-card {
    width: calc(33.33333% - 40px);
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 40px;
  }
}

@media only screen and (min-width: 120rem) {
  .m-article-card {
    width: calc(50% - 20px);
    height: 420px;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 20px;
  }
}

.m-article-card {
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 20px;
  height: 400px;
  opacity: 0.95;
  background-color: var(--background-color);
  border-radius: 20px;
  border: 1px solid var(--secondary-border-color);
  z-index: 1;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
}

@media only screen and (min-width: 48rem) {
  .l-grid {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -10px;
  }
}

.l-grid {
  padding-bottom: 20px;
}

@media only screen and (min-width: 48rem) {
  .l-wrapper {
    max-width: 1200px;
  }
}

.l-wrapper {
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
}
/*内容卡片容器 */
.l-content {
  padding: 40px 0 20px;
}
@media only screen and (min-width: 48rem) {
  .l-content {
    padding: 60px 0 40px;
  }
}

/*button 样式和hover设置 */
/* .m-button {
  display: inline-block;
  color: #333;
  text-align: center;
  letter-spacing: 0.2px;
  line-height: 1;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 25px;
  padding: 13px 25px;
  cursor: pointer;
  outline: 0;
  border: 0;
  position: relative;
  background-color: transparent;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
}
.m-button.filled {
  border-radius: 25px;
  background-color: #fff;
}

.m-button.filled:hover,
.m-button.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px var(--button-shadow-color-hover), 0 0 0 transparent;
}

/*描述样式 */
/* .m-hero-description {
  letter-spacing: 0.2px;
  line-height: 1.5;
  font-size: 0.938rem;
  margin-bottom: 20px;
}

.m-hero-description.bigger {
  line-height: 1.3;
  font-size: 1.125rem;
  margin-bottom: 25px;
}
@media only screen and (min-width: 48rem) {
  .m-hero-description.bigger {
    font-size: 1.375rem;
  }
} */

/*标题样式 */
/* .m-hero-title {
  color: var(--titles-color);
  letter-spacing: 0.4px;
  line-height: 1.3;
  font-size: 1.75rem;
  font-weight: 700;
  margin: 0 0 15px;
}
@media only screen and (min-width: 48rem) {
  .m-hero-title.bigger {
    letter-spacing: 0.8px;
    font-size: 3.25rem;
    margin-bottom: 10px;
  }
} */

/*内容样式 */
/* .m-hero__content {
  position: relative;
  text-align: center;
  padding: 0 20px;
  z-index: 2;
} */

/*图片适配样式 */

/* .m-hero {
  position: relative;
  flex-direction: column;
  min-height: 365px;
  overflow: hidden;
  padding: 100px 0 75px;
  background-color: var(--secondary-subtle-color);
}
.m-hero.with-picture {
  color: #fff;
  background-color: #000;
}
@media only screen and (min-width: 120rem) {
  .m-hero.with-picture {
    min-height: 565px;
  }
}

.m-hero__picture {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 90%;
  z-index: 1;
  opacity: 0.7;
}  */

a {
  text-decoration: none;
}

/*轮播样式 */
.header-margin {
  margin-top: 10px;
}
.el-image__inner {
  width: 880px;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
