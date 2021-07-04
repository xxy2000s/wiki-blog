<template>
  <div class="article-bar__input-box">
    <input
      maxlength="50"
      placeholder="请输入文章标题（50个字以内）"
      style="text-align:center"
      class="article-bar__title article-bar__title--input text-input"
    />
  </div>
</template>

<script>
export default {
  name: "ArticleBar",
};
</script>

<style scoped>
.button,
.text-input {
  background-image: none;
  border: 0;
  border-radius: 4px;
}
.text-input {
  display: block;
  font-variant-ligatures: no-common-ligatures;
  width: 100%;
  height: 36px;
  padding: 3px 12px;
  font-size: inherit;
  line-height: 1.5;
  color: inherit;
  background-color: #fff;
}
input {
  outline: none;
}
button,
input,
optgroup,
select,
textarea {
  font-family: sans-serif;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}
.article-bar__input-box {
  display: flex;
  width: 60%;
  margin: 8px 16px 8px 8px;
  border: 1px solid #ccc;
  border-radius: 21px;
  background-color: #fff;
  position: relative;
}
.article-bar__input-box .article-bar__title--input {
  width: 100%;
  margin-left: 4px;
  border-radius: 18px;
  /* padding: 8px; */
  padding-right: 88px;
  font-size: 18px;
  line-height: 24px;
  background-color: #fff;
}
</style>
