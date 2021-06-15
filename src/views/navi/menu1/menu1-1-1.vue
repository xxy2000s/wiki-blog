<template>
  <el-main>
    <div class="links">

      <h3 class="link-title"
          id="toc-head-1"><span class="fake-title">1. 视频教程</span></h3>
      <div class="link-description">优秀的计网视频课 &lt; (￣︶￣)&gt;</div>
      <ul class="link-items fontSmooth" >
        <li class="link-item" v-for="(value, index) in sites.length" :key=value>
          <a class="link-item-inner effect-apollo"
             :href="sites[index]"
             :title="titles[index][1]"
             target="_blank"
             rel="friend"><img class="lazyload"
                 onerror="imgError(this,1)"
                 :src="imgs[index]"><span class="sitename">{{titles[index][0]}}</span>
            <div class="linkdes">{{titles[index][1]}}</div>
          </a>
        </li>
      </ul>
      <h3 class="link-title"
          id="toc-head-2"><span class="fake-title">2. 私人服务</span></h3>
      <div class="link-description">稳定性？不存在的 ∠( ᐛ 」∠)＿</div>
      
    </div>
  </el-main>
</template>

<script>
export default {
    data(){
        return{
            sites:[
                    "https://www.bilibili.com/video/BV19E411D78Q?from=search&seid=1079669130153221273",
                    "https://www.bilibili.com/video/BV1yE411G7Ma?from=search&seid=1583032643694299647",
                  ],
            titles:[
                      ["王道计网课","海星"],
                      ["谢希仁计网","谢希仁计网视频课"],
                   ],
            imgs:[
                  "https://view.moezx.cc/images/2019/06/11/74751807_p0.jpg",
                  "https://view.moezx.cc/images/2018/04/06/Deemo43628805_by_T..jpg",
                  "https://s3-view.2heng.xin/aws_cached/2020/07/20/68a834b82882c526d0abd5d6e6b8a6cf.png",
                  "https://cloud.moezx.cc/Picture/svg/landscape/desert.svg",
                  "https://cloud.moezx.cc/Picture/svg/landscape/beach.svg",
                  "https://cloud.moezx.cc/Picture/svg/landscape2/reindeer.svg",
                ],
        }
    }
}
</script>

<style scoped>
.link-title {
  font-weight: 400;
  color: #6d6d6d;
  padding-left: 0;
  border-left: none;
  margin: 50px 0 20px;
}
.link-title span.fake-title {
  padding-left: 10px;
  border-left: 3px solid orange;
}

.links ul {
  margin: 0;
  list-style: none;
  padding: 0;
  width: 100%;
  display: inline-block;
}

.links ul li {
  width: 25%;
  float: left;
  border: 1px solid #ececec;
  padding: 10px 30px;
  margin: 4px;
  position: relative;
  overflow: hidden;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  border-radius: 10px;
}
a {
  color: #e67474;
  outline: none;
  -webkit-transition: color 0.2s ease-out, border 0.2s ease-out,
    opacity 0.2s ease-out;
  -moz-transition: color 0.2s ease-out, border 0.2s ease-out,
    opacity 0.2s ease-out;
  transition: color 0.2s ease-out, border 0.2s ease-out, opacity 0.2s ease-out;
}
a {
  background-color: transparent;
  text-decoration: none;
  cursor: url(https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/cursor/ayuda.cur),
    auto;
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
.links ul li img {
  float: right;
  box-shadow: inset 0 0 10px #000;
  padding: 5px;
  opacity: 1;
  transform: rotate(0deg);
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  -ms-transform: rotate(0deg);
  transition: all ease 1s;
  -webkit-transition: all ease 1s;
  -moz-transition: all ease 1s;
  -o-transition: all ease 1s;
  margin-top: 5px;
  width: 65px;
  height: 65px;
  padding: 2px;
  border-radius: 100%;
}
.links ul li:hover img {
  transform: rotate(360deg);
  -webkit-transform: rotate(360deg);
  -moz-transform: rotate(360deg);
  -o-transform: rotate(360deg);
  -ms-transform: rotate(360deg);
}
span.sitename {
  color: orange;
  padding-bottom: 10px;
  display: block;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  overflow: hidden;
  text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
  white-space: nowrap;
}
.linkdes {
  color: #949494;
  font-size: 13px;
  padding: 10px 0;
  border-top: 1px dashed #ddd;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  line-height: 25px;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
}
.links ul li:hover {
  color: #27323a;
  border: 1px solid orange;
}
.links ul li:hover:before {
  width: 180%;
}
.links ul li:before {
  content: '';
  background-color: rgb(255 165 0 / 20%);
  -webkit-transform: skew(45deg, 0);
  transform: skew(45deg, 0);
  width: 0;
  height: 100%;
  position: absolute;
  top: 0;
  left: -60px;
  z-index: -1;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
  transition-property: all;
  transition-duration: 0.5s;
  transition-timing-function: ease;
  transition-delay: 0s;
}
</style>