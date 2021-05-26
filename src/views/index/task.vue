<template>
  <div>
    <div id="calendar" style="height: 400px"></div>
  </div>
</template>

<script>
// var Calendar = require('tui-calendar'); /* CommonJS */
// require("tui-calendar/dist/tui-calendar.css");

// // If you use the default popups, use this.
// require("tui-date-picker/dist/tui-date-picker.css");
// require("tui-time-picker/dist/tui-time-picker.css");
import Calendar from "tui-calendar";
import "tui-calendar/dist/tui-calendar.css";
// If you use the default popups, use this.
import "tui-date-picker/dist/tui-date-picker.css";
import "tui-time-picker/dist/tui-time-picker.css";
export default {
  data() {
    return {};
  },
  mounted() {
    var calendar = new Calendar("#calendar", {
      defaultView: "day",
      taskView: true,
      template: {
        monthDayname: function (dayname) {
          return (
            '<span class="calendar-week-dayname-name">' +
            dayname.label +
            "</span>"
          );
        },
      },
    });
  },
};
</script>
<style>
</style>