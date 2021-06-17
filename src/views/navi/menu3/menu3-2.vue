
<template>

 <div>
    <div class="mask" v-if="showModal" @click="showModal=false"></div>
    <div class="pop" v-if="showModal">
        <button @click="showModal=false" class="btn">点击出现弹框</button>
    </div>
    <button @click="showModal=true" class="btn">点击出现弹框</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isCollapse: true,
        showModal: false
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }


  .mask {
     
  background-color: #000;
  opacity: 0.3;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1
}
.pop {
     
  background-color: #fff;
 
  position: fixed;
  top: 100px;
  left: 300px;
  width: calc(100% - 600px);
  height:calc(100% - 200px);
  z-index: 2
}
.btn {
     
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid blue;
  padding: 4px 12px;
}
</style>
