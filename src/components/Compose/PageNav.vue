<template>
  <div
    class="counted-share-vertical"
    data-share=""
    :style="{ display: showNav, opacity: opa, width: navWidth }"
    @mouseover="showOpa()"
    @mouseleave="hideOpa()"
  >
    <ul>
      <li
        v-for="(value, idx) in 11"
        :key="value"
        @click="jumpTo('/blogs/categories/' + (idx + 1))"
      >
        <template v-if="idx < 11">
          {{ categories_name[idx] }} {{ categories_count[idx] }}
        </template>
      </li>
      <!-- <li
        class="share-vertical-weixin"
        data-share-title="GitMind - Free Online Mind Mapping"
      ></li>
      <li
        class="share-vertical-douban"
        data-share-title="GitMind - Free Online Mind Mapping"
      ></li>
      <li
        class="share-vertical-weibo"
        data-share-title="GitMind - Free Online Mind Mapping"
      ></li>
      <li
        class="share-vertical-youdao"
        data-share-title="GitMind - Free Online Mind Mapping"
      ></li> -->
    </ul>
    <div class="share-vertical-hidebar" @click="hideNav()"></div>
  </div>
</template>

<script>
import { getCategories } from "../../api/Category.js";

export default {
  name: "PageNav",
  data() {
    return {
      showNav: "none",
      opa: "0",
      navWidth: "80px",
      categories_name: [],
      categories_count: [],
      categories_parent: [],
      categories_id: [],
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.showCategory();
  },
  methods: {
    //监听scroll 下滑到一定程度使得侧边栏出现
    handleScroll() {
      if (window.pageYOffset > 350) {
        this.showNav = "block";
      } else {
        this.showNav = "none";
      }
    },
    // 隐藏侧边栏方法 点击之后 透明的为0 看不见 但是还是存在的， 宽度设置为2px
    hideNav() {
      this.opa = "0";
      this.navWidth = "2px";
    },
    //再次重新显示侧边栏方法 往侧边栏一靠 又都显示出来
    showOpa() {
      this.opa = "1";
      this.navWidth = "80px";
    },
    hideOpa() {
      this.opa = "0";
      this.navWidth = "2px";
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
  top: 14%;
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
