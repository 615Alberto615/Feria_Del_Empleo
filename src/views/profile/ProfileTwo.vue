<script setup>
import { ref, computed } from 'vue';
import CompanyModal from './CompanyModal.vue';
const companies = [
    {
        id: 1,
        name: 'BNB',
        category: 'Banco',
        logo: '/bnb.png',
        description: 'Descripcion general de lo que es la empresa...',
        socialMedia: {
            linkedin: 'https://bo.linkedin.com/',
            facebook: 'https://es-la.facebook.com/',
            twitter: 'https://twitter.com/',
            instagram: 'https://www.instagram.com/',
        },
        videoUrl: 'https://www.youtube.com/embed/_i0w6AOO4mY',
        summary: 'Banco Nacional de Bolivia S.A. (BNB) es una entidad financiera...',
        contactName: 'Nombre de contacto',
        contactEmail: 'email@email.com',
        contactPhone: '12345678',
        jobOffers: [
            {
                name: 'Puesto 1',
                requirements: 'requerimientos',
                functions: 'funciones',
            },
            {
                name: 'Puesto 2',
                requirements: 'R',
                functions: 'F',
            },
        ],
    },
    {
        id: 2,
        name: 'Empresa 2',
        category: 'Agencia de ...',
        logo: '/bcp.png',
        description: 'Descripcion general de lo que es la empresa...',
        socialMedia: {
            linkedin: 'https://bo.linkedin.com/',
            facebook: 'https://es-la.facebook.com/',
            twitter: 'https://twitter.com/',
            instagram: 'https://www.instagram.com/',
        },

        
    },
    {
        id: 3,
        name: 'Empresa 3',
        category: 'Empresa de ...',
        logo: '/mercan.jpg',
        description: 'Descripcion general de lo que es la empresa...',
        socialMedia: {
            linkedin: 'https://bo.linkedin.com/',
            facebook: 'https://es-la.facebook.com/',
            twitter: 'https://twitter.com/',
            instagram: 'https://www.instagram.com/',
        },
        
    },
    {
        id: 4,
        name: 'Empresa 4',
        category: 'Empresa de ...',
        logo: '/union.png',
        description: 'Descripcion general de lo que es la empresa...',
        socialMedia: {
            linkedin: 'https://bo.linkedin.com/',
            facebook: 'https://es-la.facebook.com/',
            twitter: 'https://twitter.com/',
            instagram: 'https://www.instagram.com/',
        },
        
    },
    
    
    // ... más objetos de empresas
];
const searchText = ref('');

const filteredCompanies = computed(() => {
    return companies.filter((company) => {
        const searchValue = searchText.value.toLowerCase();
        return (
            company.name.toLowerCase().includes(searchValue) ||
            company.category.toLowerCase().includes(searchValue)
        );
    });
});

const showModal = ref(false);
const selectedCompany = ref(null);

const showCompanyModal = (company) => {
  selectedCompany.value = company;
  showModal.value = true;
};

const closeCompanyModal = () => {
  showModal.value = false;
};
</script>

<template>
    <div class="container mx-auto">
      <Breadcrumbs parentTitle="Dashboard" subParentTitle="Dashboard v1" />
      <div class="mb-5">
        <input
          type="text"
          v-model="searchText"
          placeholder="Buscar empresa..."
          class="border border-gray-300 rounded-full p-2 w-full"
        />
      </div>
      <div class="grid grid-cols-12 gap-5">
        <div
          v-for="company in filteredCompanies"
          :key="company.id"
          class="
            col-span-12
            xl:col-span-3
            lg:col-span-3
            md:col-span-6
            sm:col-span-6
          "
        >
          <BaseCard class="text-center">
            <img
              class="
                w-20
                h-20
                m-auto
                shadow-lg
                avatar-md
                rounded-full
              "
              :src="company.logo"
              :alt="company.name"
            />
            <p class="text-base mt-4">{{ company.name }}</p>
            <p class="text-xs text-gray-400">{{ company.category }}</p>
            <p class="my-2 text-sm text-gray-500 mb-3">
              {{ company.description }}
            </p>
            <BaseBtn
              sm
              class="bg-primary text-white rounded-full"
              @click="showCompanyModal(company)"
            >
              Más información
            </BaseBtn>
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
      <CompanyModal
        :isOpen="showModal"
        :company="selectedCompany"
        @close="closeCompanyModal"
      />
    </div>
  </template>
  