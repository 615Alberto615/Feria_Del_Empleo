<template>
  <div class="container mx-auto">
    <Breadcrumbs parentTitle="Dashboard" subParentTitle="Dashboard v1" />
    <div class="container-fluid mx-auto">
      <div class="header-container">
        <h2 class="header-title">Cronograma Feria del Empleo</h2>
        <img class="header-image" src="../../assets/cronograma3.png" alt="" >
      </div>
      <FullCalendar
        ref="fullCalendarRef"
        locale="es"
        :options="calendarOptions"
        @dateClick="handleDateClick"
        @eventClick="handleEventClick"
      />
    </div>
  <a href="https://icons8.com/illustrations/author/mNCLibjicqSz">Julia K</a> from <a href="https://icons8.com/illustrations">Ouch!</a>
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

      // Actualizar la fuente de eventos con el nuevo array de eventos
      calendarApi.removeAllEvents()
      calendarApi.addEventSource(newEvents)
    });
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
      

      const alertMessage = `Descripción: ${eventDescription}\nInicio: ${eventStart}`
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

<style>
.container {
  padding: 1rem;
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.header-title {
  font-size: 2rem;
  font-weight: bold;
}

.header-image {
  max-width: 200px;
  height: auto;
}

</style>

