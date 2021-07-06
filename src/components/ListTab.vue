<template>
  <ul class="list-tab">
    <li class="MindMap">思维导图</li>
    <li class="Flowchart">流程图</li>
    <li class="Organization">组织结构图</li>
    <li class="UML">UML图</li>
    <li class="Lane">泳道图</li>
    <li class="Analysls active">分析图</li>
  </ul>
</template>

<script>
export default {
  name:"ListTab"
};
</script>

<style scoped>
.list-tab {
  margin: 0 auto;
  font-size: 19px;
  text-align: center;
}
.list-tab li {
  margin-right: 16px;
  margin-left: 16px;
  padding: 0 9px;
}
.list-tab li {
  display: inline-block;
  width: 150px;
  height: 42px;
  line-height: 42px;
  background: #ffeee5;
  margin-bottom: 15px;
  color: #333;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.list-tab li:hover {
  color: #fff;
  background: linear-gradient(90deg, #dc5c3b, #e8a454);
}
</style>
>
