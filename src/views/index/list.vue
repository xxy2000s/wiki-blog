<template>
<el-container style="height: 740px; border: 1px solid #eee">
    <el-aside :class="[isCollapse?'width-hide':'width-show']"
              style="overflow-x:hidden;background-color: rgb(238, 241, 246)">
      <el-menu :collapse="isCollapse">
        <el-menu-item @click="clp()"
                      :label="!isCollapse">
          <el-radio-group v-model="isCollapse">
            <div><i :class="[isCollapse?'el-icon-s-unfold':'el-icon-s-fold']"></i></div>
          </el-radio-group>
        </el-menu-item>
        <a href="#frontend">
          <el-menu-item index="1">

            <i v-if="isCollapse"
               class="el-icon-notebook-2"></i>
            <template #title><i class="el-icon-notebook-2"></i><span>前端技术</span></template>
          </el-menu-item>
        </a>

        <a href="#backend">
          <el-menu-item index="2">
            <div v-if="isCollapse"><i class="el-icon-c-scale-to-original"></i></div>
            <template #title><i class="el-icon-c-scale-to-original"></i><span>后端技术</span></template>
          </el-menu-item>
        </a>
        <a href="#algorithm">
          <el-menu-item index="3">
            <div v-if="isCollapse"><i class="el-icon-price-tag"></i></div>
            <template #title><i class="el-icon-price-tag"></i><span>算法</span></template>
          </el-menu-item>
        </a>

      </el-menu>
    </el-aside>


<el-main>
    <div id="content" class="site-content">

      <header class="page-header">
        <h1 class="cat-title" id="frontend">前端技术</h1>
        <span class="cat-des"><p>js /vue /react /html /css</p> </span>
      </header>

      <div class="row">
        <div
          class="col s12 m6"
          id="bangumi-274646" :style="{clear:((index%4)!=0?'none':'left')}"
          v-for="(value, index) in siteurl"
          :key="value"
        >
          <a :href="siteurl[index]" target="_blank">
            <div class="card hoverable">
              <div class="card-image waves-effect waves-block waves-light">
                <div
                  class="activator itempic lazyload"
                  :style="{ backgroundImage: 'url(' + imgurl[index] + ')' }"
                  :data-src="imgurl[index]"
                ></div>
              </div>
              <div class="card-content">
                <div
                  class="card-title should-ellipsis activator grey-text text-darken-4"
                >
                  {{ title[index] }}
                </div>
                <p class="should-ellipsis-full" style="color: #2c3e50">
                  {{ desc[index] }}
                </p>
                <ul class="skill-list">
                  <li class="skill">
                    <div>追番进度：{{ process[index] }}/10</div>
                    <progress
                      class="skill-1"
                      max="100"
                      :value="process[index] * 10"
                    ></progress>
                  </li>
                </ul>
              </div>
              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4"
                  >公主连结 Re:Dive<i class="material-icons right"
                    >close</i
                  ></span
                >
                <span>プリンセスコネクト！Re:Dive<br /></span>
                <span
                  >放送时间: 2020-04-06 MON.<span>
                    <p>
                      和风吹拂的美丽大地·阿斯特雷亚大陆。<br />在大陆的一角，失去记忆的少年·佑树醒了过来。<br />照顾他的小小向导·可可萝。<br />总是肚子空空的美少女剑士·佩可莉露。<br />略显高冷的猫耳魔法少女·凯露。<br />他们就这么在命运引导下，建立起名为「美食殿」的公会。<br />现在，佑树与她们的冒险即将开幕——
                    </p>
                    <ul class="skill-list">
                      <li class="skill">
                        <div>追番进度：3/13</div>
                        <progress
                          class="skill-1"
                          max="100"
                          value="23.076923076923"
                        ></progress>
                      </li>
                    </ul> </span
                ></span>
              </div>
            </div>
          </a>
        </div>
      </div>

      <header class="page-header" v-for="(value, idx) in category" :key=value>
        <h1 class="cat-title" id="backend">{{value}}{{idx}}</h1>
        <span class="cat-des"><p>Go /Java /C++ /node.js /FastApi</p> </span>
      </header>
      <header class="page-header">
        <h1 class="cat-title" id="algorithm">算法</h1>
        <span class="cat-des"><p>leetcode /poj /pat /DS </p> </span>
      </header>
    </div>

          
</el-main>
</el-container>
</template>

<script>
import  {useRoute } from "vue-router";
export default {
  setup(){
      const route = useRoute();
  },
  data() {
    return {
      siteurl: [
        "https://v3.cn.vuejs.org/guide/introduction.html",
        "https://www.runoob.com/",
        "https://waptv.2345.com/xl/1131.html",
        "https://element-plus.gitee.io/#/zh-CN/component/layout",
        "http://www.topgoer.com/go%E5%9F%BA%E7%A1%80/",
        "https://c.runoob.com/",
        "https://wdxtub.com/work/"


      ],
      imgurl: [
        "https://vue3js.cn/docs/logo.png",
        "http://iqu.oss-cn-beijing.aliyuncs.com/setting/1/setting_1570889800.jpg",
        "https://lain.bgm.tv/pic/cover/l/b0/09/274646_yTEYw.jpg",
        "/src/assets/imgs/element.jpg",
        "https://img1.baidu.com/it/u=2494391880,4205279468&fm=26&fmt=auto&gp=0.jpg",
        "https://img1.baidu.com/it/u=2494391880,4205279468&fm=26&fmt=auto&gp=0.jpg",
        "https://raw.githubusercontent.com/vonzhou/CSAPP/master/csapp.jpg",

      ],
      title: ["Vue官方文档", "菜鸟教程", "鬼吹灯系列", "Element", "Go教程", "菜鸟工具","CSAPP"],
      desc: ["官方教程", "全栈", "鬼吹灯", "Element UI", "Go", "工具","不周山CSAPP"],
      process: [3, 1, 3, 10, 1, 0, 0],
      isCollapse: true,
      category:["前端","后端","算法"],
    };
  },
  methods:{
       clp(){
          this.isCollapse = !this.isCollapse
      }
  }
};
</script>

<style src="../../assets/css/progress-card.css"></style>

<style scoped>


.el-main {
  overflow-x: hidden;
}
.width-hide {
  width: auto !important;
}
.width-show {
  width: 200px !important;
}
.el-menu--collapse {
  width: 70px;
}
.el-container {
  overflow: hidden;
}
/*去掉超链接下划线*/
a {
  text-decoration: none;
  color: #409eff;
}
.el-row {
  margin-bottom: 20px;
  /* &:last-child {
      margin-bottom: 0;
    } */
  overflow-x: hidden;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
