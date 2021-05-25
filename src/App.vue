<template>
<!-- <div data-v-08a6127f="" class="header-wrap"><div data-v-344d2c7f="" data-v-08a6127f=""><div data-v-344d2c7f="" class="container"><div data-v-344d2c7f="" class="menu-wrap"><div data-v-344d2c7f="" class="logo"></div><div data-v-b6465d22="" data-v-344d2c7f="" class="menu-item-wrap menu-item"><div data-v-b6465d22="" class="top">文章</div><div data-v-b6465d22="" class="bottom"><div data-v-b6465d22="" class="blue"></div></div></div><div data-v-b6465d22="" data-v-344d2c7f="" class="menu-item-wrap menu-item"><div data-v-b6465d22="" class="top">关于我</div><div data-v-b6465d22="" class="bottom"><div data-v-b6465d22="" class="blue"></div></div></div><div data-v-b6465d22="" data-v-344d2c7f="" class="menu-item-wrap menu-item"><div data-v-b6465d22="" class="top">留言墙</div><div data-v-b6465d22="" class="bottom"><div data-v-b6465d22="" class="blue"></div></div></div><div data-v-344d2c7f="" class="right"><div data-v-344d2c7f="" class="login-area-wrap"><div data-v-344d2c7f="" class="login">登录</div><div data-v-344d2c7f="" class="arrow"></div></div></div></div></div></div></div> -->
<div class="header-nav">
<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1" >
    <router-link to="/"><el-button type="primary" icon="el-icon-s-home" plain round>主页</el-button></router-link>
  </el-menu-item>

  <el-menu-item index="2">
    <router-link to="/navi" ><el-button type="primary" icon="el-icon-odometer" plain round>导航</el-button></router-link>
  </el-menu-item>

  <el-menu-item index="3">
      <router-link to="/todo"><el-button type="primary" icon="el-icon-date" plain round>待办</el-button></router-link>
  </el-menu-item>

  <el-menu-item index="4">
      <router-link to="/blogs"><el-button type="primary" @click="show()" icon="el-icon-collection" plain round>文章</el-button></router-link>
  </el-menu-item>

  <el-avatar :src="pic" class="header-user-avatar"></el-avatar>

</el-menu>
</div>
  <div class="line"></div>
  <h3>test3</h3>
  <router-view></router-view>

</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import {getArticleList} from "./api/getArticleList.js"
import profile from "./assets/imgs/profile.jpg"
export default {
  name: 'App',
  // components: {
  //   HelloWorld
  // }
  data(){
      return {
          pic:profile
      }
  },
  methods:{
      show(){
          getArticleList(1)
          .then((res)=>{
              console.log(res[0].id)
          })
          .catch((err)=>{
              console.log(err.data)
          })
      }
      
  }
}
</script>
<style scoped="scoped">
    a{
      margin: 0 0rem;
    }

.header-nav {
    width: 100%;
    height: 5%;
    display: flex;
    align-items: center;
    justify-content: center;  /*水平居中*/
}

.header-user-avatar {
    position: relative;
    float: right;
    margin-left: 19px;
    margin-right: 20px;
    margin-top: 5px;
    margin-bottom: 15px;
}

/* .header-wrap[data-v-08a6127f] {
    top: 0;
    left: 0;
    z-index: 999;
    position: fixed;
    width: 100%;
}

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