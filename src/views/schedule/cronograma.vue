<template>
  <div>
    <center>
      <p class="text-2xl font-bold">CRONOGRAMA - FERIA DEL EMPLEO UCB</p><br>
    </center>

    <FullCalendar
      ref="fullCalendarRef"
      locale="es"
      :options="calendarOptions"
      @dateClick="handleDateClick"
      @eventClick="handleEventClick"
    />
  </div>
</template>

<script>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

export default {
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  data() {
    return {
      calendarOptions: {
        plugins: [ dayGridPlugin, interactionPlugin ],
        dateClick: this.handleDateClick,
        eventClick: this.handleEventClick,
        locale: 'es'
      },
      events: [

      ]
    }
  },
  mounted() {
    const savedEvents = JSON.parse(localStorage.getItem('events')) || []
    const calendarApi = this.$refs.fullCalendarRef.getApi()
    calendarApi.addEventSource(savedEvents)
    calendarApi.addEventSource(this.events)
  },
  methods: {
    handleDateClick(dateInfo) {
     // Pedir al usuario que ingrese el título y la descripción del evento
      const title = prompt('Ingrese un título para el evento:')
      if (title === null) {// Si el usuario ha hecho clic en "Cancelar"
        return
      }
      const description = prompt('Ingrese una descripción para el evento:')
      if (description === null) {// Si el usuario ha hecho clic en "Cancelar"
        return
      }

    // Crear un nuevo objeto de evento
      const newEvent = {
        title: title,
        start: dateInfo.dateStr,
        description: description
      }

    // Agregar el nuevo evento al array de eventos
      this.events.push(newEvent)
      
      // Obtener la instancia del objeto Calendar de FullCalendar
      const calendarApi = this.$refs.fullCalendarRef.getApi()

      // Actualizar la fuente de eventos con el nuevo array de eventos
      calendarApi.removeAllEvents()
      calendarApi.addEventSource(this.events)
    },
    handleEventClick(clickInfo) {
      const eventDescription = clickInfo.event.extendedProps.description
      const eventTitle = clickInfo.event.title
      const eventStart = clickInfo.event.start ? clickInfo.event.start.toLocaleString() : ''
      const eventEnd = clickInfo.event.end ? clickInfo.event.end.toLocaleString() : ''

      const alertMessage = `Descripción: ${eventDescription}\nInicio: ${eventStart}\nFin: ${eventEnd}`
      alert(alertMessage)
    }  
  },
  watch: {
    // Observar cambios en la matriz de eventos y actualizar el componente FullCalendar
    events(newEvents) {
      this.$refs.fullCalendarRef.getApi().removeAllEvents()
      this.$refs.fullCalendarRef.getApi().addEventSource(newEvents)
      this.$refs.fullCalendarRef.getApi().rerenderEvents();
    }
  }
}
</script>
