<template>
<el-main>
      <!-- <div id="menu">
      <span id="menu-navi">
        <button type="button" class="btn btn-default btn-sm move-today" data-action="move-today">Today</button>
        <button type="button" class="btn btn-default btn-sm move-day" data-action="move-prev">
          <i class="calendar-icon ic-arrow-line-left" data-action="move-prev"></i>
        </button>
        <button type="button" class="btn btn-default btn-sm move-day" data-action="move-next">
          <i class="calendar-icon ic-arrow-line-right" data-action="move-next"></i>
        </button>
      </span>
      <span id="renderRange" class="render-range"></span>
    </div> -->

  <div id="calendar"
       style="height: 800px;"></div>

</el-main>

</template>

<script>
import Calendar from 'tui-calendar'; /* ES6 */

export default {
  data(){
      return{
          calendar:'',
      }
  },
    mounted () {
      this.calendar = new Calendar('#calendar', {
      defaultView: 'month',
});

    }
}
</script>

<style>
</style>