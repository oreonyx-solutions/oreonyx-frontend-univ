<template>
  <div class="w-4/5 2xl:w-10/12 px-6 py-6 h-full absolute right-0 top-0">
    <FullCalendar :options="state.calendarOptions" />
  </div>
</template>

<script>
import "@fullcalendar/core/vdom"; // solves problem with Vite
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import store from "@/store";
import { onMounted, ref } from "@vue/runtime-core";

export default {
  components: {
    FullCalendar, // make the <FullCalendar> tag available
  },
  setup() {
    const handleDateClick = (info) => {
    
      const teachingUnitCode = info.event.groupId;
     const session = info.event.start;
      console.log( teachingUnitCode, session);
      store.state.workspace.display = true;

    };

    const state = ref({
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin],
        initialView: "dayGridMonth",
        eventClick: handleDateClick,
        events: store.state.events,
        headerToolbar: {
          left: "prev,next, today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,listWeek",
        },
      },
    });

    onMounted(() => {
      // getGroups();
    });

    const getGroups = () => {
      store.apiCallMethods.get("auth/group").then((res) => {
        // console.log(res);
        formDataEvents(res.data);
      });
    };
    const colors = ["red", "blue", "green", "yellow"];
    const formDataEvents = (groups) => {
      groups.forEach((item, i) => {
        const roleName = item.roleName;
        const group = item.group;
        // item.group.days.forEach((day) => {
        //   events.push({
        //     title: group.teachingUnit.code,
        //     date: day.date,
        //   });
        // });
        console.log(group);
        const program = group.programs[0];
        const days = program.days;
        const color = colors[i];
        days.forEach((day) => {
          // console.log(day),
          state.value.calendarOptions.events.push({
            daysOfWeek: [day.dayIndex],
            startTime: day.endTime,
            endTime: day.time,
            startRecur: program.startDate,
            endRecur: program.endDate,
            groupId: group.teachingUnit.code,
            title: group.teachingUnit.code,
            color,
          });
        });
        // const dateArray = getDateArray(new Date(program.startDate), new Date(program.endDate));
        // console.log(dateArray[0].getDay())
        // dateArray.forEach( date => {
        //   const matchDays = days.filter( day => day.dayIndex=== date.getDay())
        //   // console.log(matchDays.length)
        //   matchDays.forEach( day => state.value.calendarOptions.events.push({
        //     title: group.teachingUnit.code,
        //     date: concatTimeToDate(date, day.startTime),
        //     // end: concatTimeToDate(date, day.endTime)
        //   }))
        // })
      });
    };

    const concatTimeToDate = (date, time) => {
      // get date part
      const datePart = date.toLocaleDateString();
      // concat with time
      return new Date(datePart + " " + time);
      // return new datime
    };

    const getDateArray = function (start, end) {
      console.log(start, end);
      const arr = new Array(),
        dt = new Date(start);

      while (dt <= end) {
        arr.push(new Date(dt));
        dt.setDate(dt.getDate() + 1);
      }

      return arr;
    };

    return {
      state,
      handleDateClick,
    };
  },
};
</script>