<template>
    <div class="w-4/5 2xl:w-10/12 px-6 py-6 h-full absolute right-0 top-0 ">
        <FullCalendar :options="calendarOptions" />
    </div>
</template>

<script>
import '@fullcalendar/core/vdom' // solves problem with Vite
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'

export default {
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  data() {
    return {
      calendarOptions: {
        plugins: [ dayGridPlugin, interactionPlugin, timeGridPlugin  ],
        initialView: 'dayGridMonth',
        //dateClick: this.handleDateClick,
        events: [
          { title: 'event 1', date: '2022-05-02' },
          { title: 'event 2', date: '2022-05-03' }
        ],
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,listWeek'
        }
      },
      methods: {
        handleDateClick: function(arg) {
          alert('date click! ' + arg.dateStr)
        }
      }
    }
  }
}
</script>