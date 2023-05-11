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

import { ref, inject } from 'vue';
import { db } from "@/firebase";
import { collection, addDoc } from 'firebase/firestore';
import { onSnapshot } from 'firebase/firestore';

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
  const calendarApi = this.$refs.fullCalendarRef.getApi()

  // Escuchar cambios en la colección de eventos
  const eventsRef = collection(db, 'events');
  onSnapshot(eventsRef, (snapshot) => {
    const newEvents = []
    snapshot.forEach((doc) => {
      newEvents.push({ id: doc.id, ...doc.data() })
    })
    // Actualizar el array de eventos con los nuevos eventos
    this.events = newEvents

    // Actualizar la fuente de eventos con el nuevo array de eventos
    calendarApi.removeAllEvents()
    calendarApi.addEventSource(this.events)
  });

  const savedEvents = JSON.parse(localStorage.getItem('events')) || []
  calendarApi.addEventSource(savedEvents)
},

  methods: {
    async handleDateClick(dateInfo) {
      // Pedir al usuario que ingrese el título y la descripción del evento
      const title = prompt('Ingrese un título para el evento:')
      if (title === null) {
        // Si el usuario ha hecho clic en "Cancelar"
        return
      }
      const description = prompt('Ingrese una descripción para el evento:')
      if (description === null) {
        // Si el usuario ha hecho clic en "Cancelar"
        return
      }

      // Crear un nuevo objeto de evento
      const newEvent = {
        title: title,
        start: dateInfo.dateStr,
        description: description
      }

      try {
        // Agregar el nuevo evento a Firebase Firestore
        await addDoc(collection(db, 'events'), { ...newEvent })

        // Agregar el nuevo evento al array de eventos
        this.events.push(newEvent)

        // Obtener la instancia del objeto Calendar de FullCalendar
        const calendarApi = this.$refs.fullCalendarRef.getApi()

        // Actualizar la fuente de eventos con el nuevo array de eventos
        calendarApi.removeAllEvents()
        calendarApi.addEventSource(this.events)
      } catch (error) {
        console.error('Error al agregar el evento:', error)
      }
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
  },

  setup() {
    const newEvent = ref({
      id: null,
      title: '',
      description: '',
      eventStart: '',
      eventEnd: '',
    });
    const addEvent = async () => {
      try {
        // Guarda el nuevo evento en Firestore
        await addDoc(collection(db, 'events'), { ...newEvent.value });

        // Restablece el objeto del nuevo evento
        newEvent.value = {
          id: null,
          title: '',
          description: '',
          eventStart: '',
          eventEnd: '',
        };
      } catch (error) {
        console.error('Error al agregar el evento:', error);
      }
};


    return {
      newEvent,
      addEvent,
    };
  },

  
}
</script>


