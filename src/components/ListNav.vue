<template>
  <div
    class="counted-share-vertical"
    data-share=""
  >
    <ul>
      <li
        v-for="(value) in categories_name"
        :key="value"
        @click="jumpTo('#' + value)"
      >
        <h3>{{ value }}</h3>  
      </li>
    </ul>
  </div>
</template>

<script>
import { getAllLinks } from "@/api/Link.js";

export default {
  name: "ListNav",
  data() {
    return {
      categories_name: [],
      titleMap:new Map(),
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.showListCategory();
    this.titleMap.set('frontend', "前端技术")
    this.titleMap.set('backend', "后端技术")
    this.titleMap.set('os', "计算机基础")
    this.titleMap.set('面试一条龙', "面试一条龙")
  },
  methods: {
    showListCategory() {
      getAllLinks()
        .then((res) => {
          let mp = new Map();
          for (let i = 0; i < res.length; i++) {
            if (!mp.has(res[i].sort)) {
              this.categories_name.push(res[i].sort);
            }
            mp.set(res[i].sort, 1);
          }
        })
        .catch((err) => {
          console.log("get all links' categories error");
        });
    },
    jumpTo(addr) {
      window.location.href = addr;
    },
  },
};
</script>

<style lang="less" scoped>
a {
  color: #2c3e50;
  font-weight: 500;
}
.counted-share-vertical {
  position: fixed;
  top: 24%;
  left: 0px;
  width: 80px;
  font-size: 11px;
  margin: 0;
  list-style-type: none;
  text-align: center;
  white-space: nowrap;
  color: #333;
  z-index: 50;
}
.counted-share-vertical ul {
  box-shadow: 0 0 10px 0 rgb(0 0 0 / 25%);
  border-radius: 0 10px 10px 0;
  transition: transform 0.5s;
  -webkit-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  cursor: url("https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/cursor/No_Disponible.cur");
}
.counted-share-vertical li {
  position: relative;
  border-bottom: solid 1px #f5f5f5;
  border-right: solid 1px #ddd;
  height: 57px;
  padding: 0 8px;
  cursor: pointer;
  background-repeat: no-repeat;
  background-position: center 12px;
  background-color: #fff;
  padding-top: 26px;
}
.counted-share-vertical li:nth-child(1) {
  border-top: solid 1px #ddd;
  border-top-right-radius: 10px;
}
.counted-share-vertical li:lang(zh) {
  background-position: center center;
}
.counted-share-vertical li::before {
  content: "";
  position: absolute;
  top: 0;
  right: -10px;
  background-color: #257dd7;
  width: 20px;
  height: 57px;
  opacity: 0;
  transform: translateX(-10px);
  transition: transform 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);
}
.counted-share-vertical li::after {
  content: "";
  position: absolute;
  right: -10px;
  bottom: -10px;
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-left: 10px solid rgba(37, 125, 215, 0.5);
  border-bottom: 10px solid transparent;
  opacity: 0;
  transform: translateX(-10px);
  transition: transform 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);
}
.share-vertical-weixin {
  background-image: url(https://qncdncss.aoscdn.com/local/gitmind.cn/com/img/counted-share/weixin.svg?_=0b27519);
  background-size: 26px auto;
}
.share-vertical-douban {
  background-image: url(https://qncdncss.aoscdn.com/local/gitmind.cn/com/img/counted-share/douban.svg?_=29dfe04);
  background-size: 18px auto;
}
.share-vertical-weibo {
  background-image: url(https://qncdncss.aoscdn.com/local/gitmind.cn/com/img/counted-share/weibo.svg?_=18c37e0);
  background-size: 24px auto;
}
.share-vertical-youdao {
  background-image: url(https://qncdncss.aoscdn.com/local/gitmind.cn/com/img/counted-share/youdao.svg?_=2e72856);
  background-size: 20px auto;
}

// .counted-share-vertical
.share-vertical-hidebar {
  position: relative;
  opacity: 0;
  width: 100%;
  height: 30px;
  background-color: #aaaaaa;
  border-bottom-right-radius: 10px;
  border-right: none;
  box-shadow: 0px 0px 10px rgb(204 204 204 / 50%);
  transition: opacity 0.5s, width 0.5s, border-radius 0.5s;
  cursor: pointer;
}
// .counted-share-vertical
.share-vertical-hidebar::before {
  content: "";
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  margin: auto;
  width: 9px;
  height: 12px;
  background: url(https://qncdncss.aoscdn.com/local/gitmind.cn/com/img/counted-share/hide-sidebar.png?_=1b090cd)
    center center/9px auto no-repeat;
  transition: transform 0.5s linear;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.counted-share-vertical li:hover,
.counted-share-vertical li.active {
  color: #fff;
  background-color: #257dd7;
  border-bottom-color: transparent;
  border-right-color: #257dd7;
}
.counted-share-vertical li:hover::before,
.counted-share-vertical li.active::before {
  transform: none;
  opacity: 1;
}
.counted-share-vertical li:hover::after,
.counted-share-vertical li.active::after {
  transform: none;
  opacity: 1;
}
// .counted-share-vertical
.share-vertical-hidebar:hover {
  opacity: 1;
  background-color: #22b4ed;
}
</style>
