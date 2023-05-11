<template>
  <Modal :isOpen="isOpen" @close="$emit('close')">
    <h2 class="text-lg font-bold mb-2">Editar Empresa</h2>

    <form @submit.prevent="$emit('save', editedCompany)">
      <label class="block mb-2">
        <span class="text-gray-700">Nombre</span>
        <input v-model="editedCompany.name" type="text" class="form-input mt-1 block w-full" placeholder="Nombre de la empresa">
      </label>

      <label class="block mb-2">
        <span class="text-gray-700">Categoría</span>
        <input v-model="editedCompany.category" type="text" class="form-input mt-1 block w-full" placeholder="Categoría de la empresa">
      </label>
      <label class="block mb-2">
        <span class="text-gray-700">Descripcion</span>
        <input v-model="editedCompany.description" type="text" class="form-input mt-1 block w-full" placeholder="Categoría de la empresa">
      </label>
      <label class="block mb-2">
        <span class="text-gray-700">Url Logo</span>
        <input v-model="editedCompany.logo" type="text" class="form-input mt-1 block w-full" placeholder="Categoría de la empresa">
      </label>
      <label class="block mb-2">
        <span class="text-gray-700">Url Video</span>
        <input v-model="editedCompany.videoUrl" type="text" class="form-input mt-1 block w-full" placeholder="Categoría de la empresa">
      </label>
      <label class="block mb-2">
        <span class="text-gray-700">Resumen</span>
        <input v-model="editedCompany.summary" type="text" class="form-input mt-1 block w-full" placeholder="Categoría de la empresa">
      </label>
      <label class="block mb-2">
        <span class="text-gray-700">Nombre de contacto:</span>
        <input v-model="editedCompany.contactName" type="text" class="form-input mt-1 block w-full" placeholder="Categoría de la empresa">
      </label>
      <label class="block mb-2">
        <span class="text-gray-700">Correo electrónico de contacto:</span>
        <input v-model="editedCompany.contactEmail" type="text" class="form-input mt-1 block w-full" placeholder="Categoría de la empresa">
      </label>
      <label class="block mb-2">
        <span class="text-gray-700">Teléfono de contacto:</span>
        <input v-model="editedCompany.contactPhone" type="text" class="form-input mt-1 block w-full" placeholder="Categoría de la empresa">
      </label>
      <label class="block mb-2">
        <span class="text-gray-700">Google Form:</span>
        <input v-model="editedCompany.googleFormUrl" type="text" class="form-input mt-1 block w-full" placeholder="Categoría de la empresa">
      </label>
      <label class="block mb-2">
        <span class="text-gray-700">LinkedIn</span>
        <input v-model="editedCompany.socialMedia.linkedin" type="text" class="form-input mt-1 block w-full" placeholder="Categoría de la empresa">
      </label>
      <label class="block mb-2">
        <span class="text-gray-700">Facebook:</span>
        <input v-model="editedCompany.socialMedia.facebook" type="text" class="form-input mt-1 block w-full" placeholder="Categoría de la empresa">
      </label>
      <label class="block mb-2">
        <span class="text-gray-700">Twitter:</span>
        <input v-model="editedCompany.socialMedia.twitter" type="text" class="form-input mt-1 block w-full" placeholder="Categoría de la empresa">
      </label>
      <label class="block mb-2">
        <span class="text-gray-700">Instagram:</span>
        <input v-model="editedCompany.socialMedia.instagram" type="text" class="form-input mt-1 block w-full" placeholder="Categoría de la empresa">
      </label>
      <label class="block mb-2">
        <span class="text-gray-700">Nombre Puesto:</span>
        <input v-model="editedCompany.jobOffers.name" type="text" class="form-input mt-1 block w-full" placeholder="Categoría de la empresa">
      </label>
      <label class="block mb-2">
        <span class="text-gray-700">Requerimientos</span>
        <input v-model="editedCompany.jobOffers.requirements" type="text" class="form-input mt-1 block w-full" placeholder="Categoría de la empresa">
      </label>
      <label class="block mb-2">
        <span class="text-gray-700">Funciones</span>
        <input v-model="editedCompany.jobOffers.functions" type="text" class="form-input mt-1 block w-full" placeholder="Categoría de la empresa">
      </label>
      



      <!-- Repite el patrón anterior para cada campo que deseas que se pueda editar -->

      <div class="mt-4">
        <button type="submit" class="btn btn-primary">Guardar Cambios</button>
        <button type="button" class="btn btn-secondary" @click="$emit('close')">Cancelar</button>
      </div>
    </form>
  </Modal>
</template>

<script>
import Modal from './CompanyModal.vue';


export default {
  components: {
    Modal,
  },
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
  setup(props) {
    // Creamos una copia de la empresa que se puede editar sin afectar al objeto original
    const editedCompany = Vue.ref(JSON.parse(JSON.stringify(props.company)));

    return {
      editedCompany,  // Ahora retornamos editedCompany en lugar de company
    };
  },
};
</script>
