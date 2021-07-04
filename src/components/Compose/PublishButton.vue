<template>
<div>
   <button class="btn-publish">发布文章</button>
</div>
 
</template>

<script>
export default {
    name:"PublishButton"
};
</script>

<style>
.btn-publish:hover{
    cursor: url(https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/cursor/ayuda.cur),auto;
}
.btn-publish {
  height: 40px;
      padding: 0 16px;
    font-size: 16px;
    color: #fff;
    border: none;
    border-radius: 18px;
  background: linear-gradient(
    92deg,
    #ffba40,
    #ff503e 37%,
    #ff2f50 81%,
    #ff1b40
  );
}
</style>
