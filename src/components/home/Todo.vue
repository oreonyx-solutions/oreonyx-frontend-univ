<template>
  <div class="w-full my-2 pr-2 overflow-y-auto pb-1">
      <!-- <h1>To do</h1> -->
    <FullCalendar :options="state.calendarOptions" />
  </div>
</template>

<script>
import "@fullcalendar/core/vdom"; // solves problem with Vite
import FullCalendar from "@fullcalendar/vue3";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import store from "@/store";
import { ref } from "@vue/runtime-core";

export default {
  name: "Todo",
  components: {
    FullCalendar, // make the <FullCalendar> tag available
  },
  setup() {
    const handleDateClick = (info) => {
      const teachingUnitCode = info.event.groupId;
      const session = info.event.start;
      console.log(teachingUnitCode, session);
      store.state.workspace.display = true;
    };

    const state = ref({
      calendarOptions: {
        plugins: [timeGridPlugin, interactionPlugin, listPlugin, dayGridPlugin],
        initialView: "listWeek",
        eventClick: handleDateClick,
        events: store.state.events,
        headerToolbar: {
          left: "prev,next",
          center: "title",
          right: "today",
        },
      },
    });

    return {
      state,
      handleDateClick,
    };
  },
};
</script>

<style>
</style>