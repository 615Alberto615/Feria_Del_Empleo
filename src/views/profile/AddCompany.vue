<template>
  <div class="container mx-auto">
    <h1 class="text-3xl font-semibold mb-8">Agregar empresa</h1>
    <form @submit.prevent="addCompany">
        <div class="mb-8">
        <h2 class="text-2xl font-semibold mb-5">Datos básicos</h2>
        <div>
          <label for="name" class="block mb-1">Nombre:</label>
          <input placeholder="Nombre Empresa" type="text" id="name" v-model="newCompany.name" required />
        </div>
        <div>
            <label for="category" class="block mb-1">Categoría:</label>
            <input placeholder="Categoria a la que pertenece la Empresa" type="text" id="category" v-model="newCompany.category" required />
        </div>
        <div>
            <label for="description" class="block mb-1">Descripción:</label>
            <textarea placeholder="Descripcion breve de la Empresa..." id="description" v-model="newCompany.description" required></textarea>
        </div>
        <div>
            <label for="logo" class="block mb-1">Logo:</label>
            <input placeholder="Logo en formato URL" type="text" id="logo" v-model="newCompany.logo" required />
        </div>
        <div>
            <label for="videoUrl" class="block mb-1">Video:</label>
            <input placeholder="Video en formato URL" type="text" id="videoUrl" v-model="newCompany.videoUrl" required />
        </div>
        <div>
            <label for="summary" class="block mb-1">Resumen:</label>
            <textarea placeholder="Informacion de lo que trata la Empresa..." id="summary" v-model="newCompany.summary" required></textarea>
        </div>
      </div>
      <div class="mb-8">
        <h2 class="text-2xl font-semibold mb-5">Información de contacto</h2>
        
        <div>
            <label for="contactName" class="block mb-1">Nombre de contacto:</label>
            <input placeholder="Nombre de persona de Contacto" type="text" id="contactName" v-model="newCompany.contactName" required />
        </div>
        <div>
            <label for="contactEmail" class="block mb-1">Correo electrónico de contacto:</label>
            <input placeholder="Email de persona de Contacto" type="text" id="contactEmail" v-model="newCompany.contactEmail" required />
        </div>
        <div>
            <label for="contactPhone" class="block mb-1">Teléfono de contacto:</label>
            <input placeholder="Celular-Telefono de persona de Contacto" type="text" id="contactPhone" v-model="newCompany.contactPhone" required />
        </div>
        <div>
            <label for="socialMedia.instagram" class="block mb-1">Google Form:</label>
            <input placeholder="Google Form de Registro para Sesion Informativa" type="text" id="googleFormUrl" v-model="newCompany.googleFormUrl" required />
        </div>
        <div>
            <label for="socialMedia.linkedin" class="block mb-1">LinkedIn:</label>
            <input placeholder="URL de Linkedin de la Empresa" type="text" id="socialMedia.linkedin" v-model="newCompany.socialMedia.linkedin" required />
        </div>
        <div>
            <label for="socialMedia.facebook" class="block mb-1">Facebook:</label>
            <input placeholder="URL de facebook de la Empresa" type="text" id="socialMedia.facebook" v-model="newCompany.socialMedia.facebook" required />
        </div>
        <div>
            <label for="socialMedia.twitter" class="block mb-1">Twitter:</label>
            <input placeholder="URL de twitter de la Empresa" type="text" id="socialMedia.twitter" v-model="newCompany.socialMedia.twitter" required />
        </div>
        <div>
            <label for="socialMedia.instagram" class="block mb-1">Instagram:</label>
            <input placeholder="URL de instagram de la Empresa" type="text" id="socialMedia.instagram" v-model="newCompany.socialMedia.instagram" required />
        </div>
      </div> 
      <div class="mb-8">
        <h2 class="text-2xl font-semibold mb-5">Información oferta laboral</h2>
        <!-- ... -->
        <div>
            <label for="jobOffers.name" class="block mb-1">Nombre Puesto:</label>
            <input placeholder="Puesto De Trabajo" type="text" id="jobOffers.name" v-model="newCompany.jobOffers.name" required />
        </div>
        <div>
            <label for="jobOffers.requirements" class="block mb-1">Requerimientos:</label>
            <input placeholder="Requerimientos para el Puesto De Trabajo" type="text" id="jobOffers.requirements" v-model="newCompany.jobOffers.requirements" required />
        </div>
        <div>
            <label for="jobOffers.functions" class="block mb-1">Funciones:</label>
            <input placeholder="Funciones del Puesto De Trabajo" type="text" id="jobOffers.functions" v-model="newCompany.jobOffers.functions" required />
        </div>
      </div>  
        

      <button
        type="submit"
        class="bg-primary hover:bg-green-700 text-white font-semibold py-2 px-4 rounded transition duration-200"
      >
        Agregar empresa
      </button>
      </form>
    </div>
  </template>
<script>
// Asegúrate de que esta línea esté presente y sea la ruta correcta al archivo de configuración de Firebase
import { ref, inject } from 'vue';
import { db } from "@/firebase";
import { collection, addDoc, updateDoc, doc } from 'firebase/firestore';

export default {
  setup() {
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
    });
    const addCompany = async () => {
      try {
        // Guarda la nueva empresa en Firestore y obtén la referencia al documento creado
        const docRef = await addDoc(collection(db, 'companies'), { ...newCompany.value });

        // Asigna el ID del documento creado en Firestore al objeto newCompany.value
        newCompany.value.id = docRef.id;

        // Actualiza el documento en Firestore con el ID asignado
        await updateDoc(doc(db, 'companies', docRef.id), { id: docRef.id });

        // Restablece el objeto de la nueva empresa
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
        };
      } catch (error) {
        console.error('Error al agregar la empresa:', error);
      }
    };

    return {
      newCompany,
      addCompany,
    };
  },
};
</script>



<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 1rem;
  box-sizing: border-box;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

input,
textarea {
  display: block;
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  box-sizing: border-box;
  border: 1px solid #cbd5e0;
  border-radius: 0.25rem;
  background-color: #f8fafc;
}

input::placeholder,
textarea::placeholder {
  color: #a0aec0;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3182ce;
  box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.1);
}

button[type="submit"] {
  display: block;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>