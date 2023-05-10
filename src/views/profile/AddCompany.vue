<template>
    <div class="container mx-auto">
      <h1 class="text-xl mb-5">Agregar empresa</h1>
      <form @submit.prevent="addCompany">
        <div>
          <label for="name" class="block mb-1">Nombre:</label>
          <input type="text" id="name" v-model="newCompany.name" required />
        </div>
        <div>
            <label for="category" class="block mb-1">Categoría:</label>
            <input type="text" id="category" v-model="newCompany.category" required />
        </div>
        <div>
            <label for="description" class="block mb-1">Descripción:</label>
            <textarea id="description" v-model="newCompany.description" required></textarea>
        </div>
        <div>
            <label for="logo" class="block mb-1">Logo:</label>
            <input type="text" id="logo" v-model="newCompany.logo" required />
        </div>
        <div>
            <label for="videoUrl" class="block mb-1">Video:</label>
            <input type="text" id="videoUrl" v-model="newCompany.videoUrl" required />
        </div>
        <div>
            <label for="summary" class="block mb-1">Resumen:</label>
            <textarea id="summary" v-model="newCompany.summary" required></textarea>
        </div>
        <div>
            <label for="contactName" class="block mb-1">Nombre de contacto:</label>
            <input type="text" id="contactName" v-model="newCompany.contactName" required />
        </div>
        <div>
            <label for="contactEmail" class="block mb-1">Correo electrónico de contacto:</label>
            <input type="text" id="contactEmail" v-model="newCompany.contactEmail" required />
        </div>
        <div>
            <label for="contactPhone" class="block mb-1">Teléfono de contacto:</label>
            <input type="text" id="contactPhone" v-model="newCompany.contactPhone" required />
        </div>
        <div>
            <label for="socialMedia.linkedin" class="block mb-1">LinkedIn:</label>
            <input type="text" id="socialMedia.linkedin" v-model="newCompany.socialMedia.linkedin" required />
        </div>
        <div>
            <label for="socialMedia.facebook" class="block mb-1">Facebook:</label>
            <input type="text" id="socialMedia.facebook" v-model="newCompany.socialMedia.facebook" required />
        </div>
        <div>
            <label for="socialMedia.twitter" class="block mb-1">Twitter:</label>
            <input type="text" id="socialMedia.twitter" v-model="newCompany.socialMedia.twitter" required />
        </div>
        <div>
            <label for="socialMedia.instagram" class="block mb-1">Instagram:</label>
            <input type="text" id="socialMedia.instagram" v-model="newCompany.socialMedia.instagram" required />
        </div>
        <div>
            <label for="jobOffers.name" class="block mb-1">Nombre Puesto:</label>
            <input type="text" id="jobOffers.name" v-model="newCompany.jobOffers.name" required />
        </div>
        <div>
            <label for="jobOffers.requirements" class="block mb-1">Requerimientos:</label>
            <input type="text" id="jobOffers.requirements" v-model="newCompany.jobOffers.requirements" required />
        </div>
        <div>
            <label for="jobOffers.functions" class="block mb-1">Funciones:</label>
            <input type="text" id="jobOffers.functions" v-model="newCompany.jobOffers.functions" required />
        </div>

        <button type="submit" class="bg-primary text-white mt-4">
          Agregar empresa
        </button>
      </form>
    </div>
  </template>
  
  <script>
 import { ref, inject } from 'vue';

export default {
  setup() {
    const companies = inject('companies');

    const newCompany = ref({
      id: null,
      name: '',
      category: '',
      logo: '',
        description: '',
        videoUrl: '',
        summary: '',
        contactName: '',
        contactEmail: '',
        contactPhone: '',
        googleFormUrl: '',
        socialMedia: {
          linkedin: '',
          facebook: '',
          twitter: '',
          instagram: '',
        },
        jobOffers: {
          name: '',
          requirements: '',
          functions: '',
        },
      
      // ... Otras propiedades de la empresa
    });

    const addCompany = () => {
      newCompany.value.id = companies.value.length + 1;
      companies.value.push({ ...newCompany.value });
      newCompany.value = {
        id: null,
        name: '',
        category: '',
        logo: '',
        description: '',
        videoUrl: '',
        summary: '',
        contactName: '',
        contactEmail: '',
        contactPhone: '',
        googleFormUrl: '',
        socialMedia: {
          linkedin: '',
          facebook: '',
          twitter: '',
          instagram: '',
        },
        jobOffers: {
          name: '',
          requirements: '',
          functions: '',
        },
        // ... Otras propiedades de la empresa
      };
    };

    return {
      newCompany,
      addCompany,
    };
  },
};
</script>

<style scoped>
/* Aquí puedes agregar estilos para el componente AddCompany.vue si lo deseas */
</style>
