<template>
    <transition name="modal">
        <div v-if="isOpen" class="modal fixed inset-0 z-50 flex items-center justify-center">
      <div class="modal-overlay absolute inset-0 bg-black opacity-50" @click="emitClose"></div>
      <div class="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50">
        <div class="modal-content p-6 overflow-y-auto">
            <button class="close-modal absolute top-0 right-0 cursor-pointer p-4" @click="emitClose" style="background-color: transparent; border: none; pointer-events: none;">
                <img src="/close-circle-outline.svg" alt="Close" class="w-5 h-5" style="pointer-events: auto;" />
            </button>
            <h3 class="text-2xl">{{ company.name }}</h3>
            <p>{{ company.category }}</p>
            <p>{{ company.description }}</p>
                  <!-- Agregar video -->
                  <div class="flex mt-6">
            <div class="w-1/2 mr-2">
                <BaseCard>
                    <div class="video-container">
                      <iframe :src="company.videoUrl" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </BaseCard>
            </div>
            <div class="w-1/2 ml-2">
              <BaseCard>
                <p class="text-lg font-semibold">¿De qué trata la empresa?</p>
                <p>{{ company.summary }}</p>
              </BaseCard>
            </div>
          </div>

      <!-- Agregar tabla de oferta laboral -->
      <p class="text-lg font-medium mt-6">OFERTA LABORAL</p>
      <table class="table-auto mt-2">
        <thead>
          <tr>
            <th class="py-3 px-4 border-b border-gray-400 bg-gray-100 font-semibold uppercase text-sm text-gray-600 text-left">Nombre del puesto</th>
                  <th class="py-3 px-4 border-b border-gray-400 bg-gray-100 font-semibold uppercase text-sm text-gray-600 text-left">Descripción de requisitos</th>
                  <th class="py-3 px-4 border-b border-gray-400 bg-gray-100 font-semibold uppercase text-sm text-gray-600 text-left">Descripción de funciones</th>
           </tr>
        </thead>
        <tbody>
          <tr v-for="(job, index) in company.jobOffers" :key="index">
            <td class="border px-4 py-2">{{ job.name }}</td>
            <td class="border px-4 py-2">{{ job.requirements }}</td>
            <td class="border px-4 py-2">{{ job.functions }}</td>
          </tr>
        </tbody>
      </table>

      <!-- Agregar información de contacto -->
      <div class="mt-6">
        <BaseCard>
            <p class="text-lg font-medium">Contacto</p>
            <div class="mt-2">
            <p class="text-sm font-medium">Nombre: {{ company.contactName }}</p>
            <p class="text-sm font-medium">Correo electrónico: {{ company.contactEmail }}</p>
            <p class="text-sm font-medium">Celular: {{ company.contactPhone }}</p>
            </div>
            <div class="mt-4">
              <a
                :href="company.socialMedia.linkedin"
                target="_blank"
                class="mr-2 hover:text-primary"
                rel="noopener noreferrer"
              >
                <i class="i-Linkedin-2 text-xs"></i>
              </a>
              <a
                :href="company.socialMedia.facebook"
                target="_blank"
                class="mr-2 hover:text-primary"
                rel="noopener noreferrer"
              >
                <i class="i-Facebook-2 text-xs"></i>
              </a>
              <a
                :href="company.socialMedia.twitter"
                target="_blank"
                class="mr-2 hover:text-primary"
                rel="noopener noreferrer"
              >
                <i class="i-Twitter text-xs"></i>
              </a>
              <a
                :href="company.socialMedia.instagram"
                target="_blank"
                class="mr-2 hover:text-primary"
                rel="noopener noreferrer"
              >
                <i class="i-Instagram text-xs"></i>
              </a>
            </div>
        </BaseCard>
        
      </div>

    </div>
  </div>
</div>
</transition>
</template>
  
  <script>
  export default {
    props: {
      isOpen: {
        type: Boolean,
        required: true,
      },
      company: {
        type: Object,
        required: true,
      },
    },
    methods: {
      emitClose() {
        this.$emit('close');
      },
    },
  };
  </script>
  
  <style scoped>
  .modal {
    transition: opacity 0.25s ease;
  }
  
  .modal-enter, .modal-leave-active {
    opacity: 0;
  }
  
  .modal-content {
    position: relative;
    max-height: calc(100vh - 200px); /* Altura máxima de la modal */
  }

  .close-modal {
    top: 0.5rem;
    right: 0.5rem;
  }

  .video-container {
    position: relative;
    padding-bottom: 56.25%; /* Establece un aspect ratio de 16:9 */
    height: 0;
  }

  .video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .modal-container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 40%;
}   
</style>