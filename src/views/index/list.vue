<template>
  <el-container style="height: 740px; border: 1px solid #eee">
    <el-aside
      :class="[isCollapse ? 'width-hide' : 'width-show']"
      style="overflow-x: hidden; background-color: rgb(238, 241, 246)"
    >
      <el-menu :collapse="isCollapse">
        <el-menu-item @click="clp()" :label="!isCollapse">
          <el-radio-group v-model="isCollapse">
            <div>
              <i
                :class="[isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold']"
              ></i>
            </div>
          </el-radio-group>
        </el-menu-item>
        <div v-for="(value, idx) in category" :key=value>
          <a :href="'#'+value">
          <el-menu-item :index="idx">
            <i v-if="isCollapse" :class="iconArray[idx]"></i>
            <template #title
              ><i :class="iconArray[idx]"></i><span>{{titleMap.get(value)}}</span></template
            >
          </el-menu-item>
        </a>
        </div>
      </el-menu>
    </el-aside>

    <el-main>
      <div id="content" class="site-content">
        <div v-for="val in category" :key="val">
          <header class="page-header">
            <h1 class="cat-title" :id="val">{{ titleMap.get(val) }}</h1>
            <span class="cat-des"><p>{{descMap.get(val)}}</p> </span>
          </header>

          <div class="row" >
            <div
              class="col s12 m6"
              id="bangumi-274646"
              :style="{ clear: index % 4 != 0 ? 'none' : 'left' }"
              v-for="(value, index) in sortMap.get(val)" :key="value"
            >
              <a :href="value.url" target="_blank">
                <div class="card hoverable">
                  <div class="card-image waves-effect waves-block waves-light">
                    <div
                      class="activator itempic lazyload"
                      :style="{ backgroundImage: 'url(' + value.img + ')' }"
                      :data-src="value.img"
                    ></div>
                  </div>
                  <div class="card-content">
                    <div
                      class="card-title should-ellipsis activator grey-text text-darken-4"
                    >
                      {{ value.title }}
                    </div>
                    <p class="should-ellipsis-full" style="color: #2c3e50">
                      {{ value.desc }}
                    </p>
                    <ul class="skill-list">
                      <li class="skill">
                        <div>追番进度：{{ value.process/10 }}/10</div>
                        <progress
                          class="skill-1"
                          max="100"
                          :value="value.process "
                        ></progress>
                      </li>
                    </ul>
                  </div>
                  <!-- <div class="card-reveal">
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
                  </div> -->
                </div>
              </a>
            </div>
          </div>
        </div>
        <!-- <header class="page-header" v-for="(value, idx) in category" :key=value>
        <h1 class="cat-title" id="backend">{{value}}{{idx}}</h1>
        <span class="cat-des"><p>Go /Java /C++ /node.js /FastApi</p> </span>
      </header>
      <header class="page-header">
        <h1 class="cat-title" id="algorithm">算法</h1>
        <span class="cat-des"><p>leetcode /poj /pat /DS </p> </span>
      </header> -->
      </div>
    </el-main>
  </el-container>
</template>

<script>
import { useRoute } from "vue-router";
import { getAllLinks, getAllLinksBySort } from "../../api/Link.js";
export default {
  setup() {
    const route = useRoute();
  },
  data() {
    return {
      titleMap:new Map(),
      descMap:new Map(),
      iconArray:[],
      isCollapse: true,
      category: [],
      sortMap: new Map()
    };
  },
  mounted() {
    this.descMap.set('frontend', "js /vue /react /html /css")
    this.descMap.set('backend', "Go /Java /C++ /node.js /FastApi")
    this.descMap.set('os', "leetcode /poj /pat /DS")
    this.titleMap.set('frontend', "前端技术")
    this.titleMap.set('backend', "后端技术")
    this.titleMap.set('os', "计算机基础")
    this.iconArray.push('el-icon-notebook-2')
    this.iconArray.push('el-icon-c-scale-to-original')
    this.iconArray.push('el-icon-price-tag')

    this.showAllSorts();
    

  },
  methods: {
    clp() {
      this.isCollapse = !this.isCollapse;
    },
    showAllSorts() {
      getAllLinks()
        .then((res) => {
          let mp = new Map();
          for (let i = 0; i < res.length; i++) {
            if (!mp.has(res[i].sort)) {
              this.category.push(res[i].sort);
            }
            mp.set(res[i].sort, 1);
            if (i == res.length - 1) {
              this.showAllLinksBySort();
            }
          }
        })
        .catch((err) => {
          console.log("get all links error");
        });
    },
    showAllLinksBySort() {
      for (let i = 0; i < this.category.length; i++) {
        getAllLinksBySort(this.category[i])
          .then((res) => {
            this.sortMap.set(this.category[i], res);
          })
          .catch((err) => {
            console.log(err);
            console.log("get links by sort error");
          });
      }
    },
  },
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
