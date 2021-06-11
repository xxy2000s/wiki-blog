<template>
<el-container>
  <div>
 <el-header class="header-wrap" style="opacity: 0.98;">
   <div class="site-branding">
   <span class="logolink moe-mashiro">
      <a href="https://2heng.xin" alt="樱花庄的白猫"> <ruby><span class="sakuraso">BUPT</span><span class="no">の</span><span class="shironeko">Coder</span><rp></rp><rt class="chinese-font">北大软微</rt><rp></rp></ruby> </a>
  </span>
   </div>
  <el-menu :default-active="activeIndex" class="el-menu-demo header-nav" mode="horizontal" @select="handleSelect">
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
</el-header>
  </div>
<el-main>
  <router-view />
</el-main>

</el-container>

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
.moe-mashiro {
    font-family: 'Moe-Mashiro','Merriweather Sans',Helvetica,Tahoma,Arial,'PingFang SC','Hiragino Sans GB','Microsoft Yahei','WenQuanYi Micro Hei',sans-serif;
}

.serif {
    font-family: 'Noto Serif SC','Source Han Serif SC','Source Han Serif','source-han-serif-sc','PT Serif','SongTi SC','MicroSoft Yahei',Georgia,serif;
}
.chinese-font {
    font-family: 'Merriweather Sans',Helvetica,Tahoma,Arial,'PingFang SC','Hiragino Sans GB','Microsoft Yahei','WenQuanYi Micro Hei',sans-serif;
}
.site-branding {
    float: left;
    position: relative;
    height: 75px;
    line-height: 75px;
    margin-left: -6px;
    z-index: 9999;
}
.logolink.moe-mashiro .sakuraso, .logolink.moe-mashiro .no {
    /* display: relative; */
    font-size: 22px;
    border-radius: 9px;
    padding-bottom: 10  px;
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
    background-color: rgba(255,255,255,.5);
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
    transition-duration: .5s,.5s;
}

.logolink a:hover ruby rt {
    opacity: 1;
    transition-duration: .5s,.5s;
    color:#FE9600;
}

.logolink a:hover .sakuraso {
      transition-duration: .5s,.5s;

    background-color: orange;
    color: #fff;
}

.logolink a:hover ruby {
    transition-duration: .5s,.5s;
    color:#FE9600;
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
    font-family: 'Moe-Mashiro','Merriweather Sans',Helvetica,Tahoma,Arial,'PingFang SC','Hiragino Sans GB','Microsoft Yahei','WenQuanYi Micro Hei',sans-serif;
}

    a{
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
.el-main{
    padding-top: 65px !important;
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
    justify-content: center;  /*水平居中*/
    position: fixed;
    top: 0px;
    z-index:9998;
    /* box-shadow:0 1px 40px -8px rgb(0 0 0 / 50%); */
}


.header-user-avatar {
    position: relative;
    float: right;
    margin-left: 19px;
    margin-right: 20px;
    margin-top: 5px;
    margin-bottom: 15px;
}


.el-header{
    padding: 0px !important;
}
.header-wrap{
    width: 100%;
    /* height: 7%; */
    /* display: flex;
    align-items: center;
    justify-content: center;  */
    position: fixed;
    top: 0px;
    z-index:9998;
    background: rgba(255,255,255,.95);
    box-shadow: 0 1px 40px -8px rgb(0 0 0 / 50%);
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