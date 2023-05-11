<script setup>
import { ref, computed, onMounted, provide } from "vue";
import AddCompany from "./AddCompany.vue";
import CompanyModal from "./CompanyModal.vue";
import { db } from "@/firebase";
import { collection, onSnapshot, deleteDoc, doc } from "firebase/firestore";

const companies = ref([]);

onMounted(() => {
  const unsubscribe = onSnapshot(collection(db, "companies"), (snapshot) => {
    const loadedCompanies = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    console.log("Loaded companies:", loadedCompanies);

    companies.value = loadedCompanies;
  });

  return () => {
    unsubscribe();
  };
});

provide("companies", companies);

const searchText = ref("");

const filteredCompanies = computed(() => {
  return companies.value.filter((company) => {
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

const deleteCompany = async (companyId) => {
  console.log("Deleting company with id:", companyId); // Añade esta línea
  try {
    await deleteDoc(doc(db, "companies", companyId));
  } catch (error) {
    console.error("Error al eliminar la empresa:", error);
  }
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
      <AddCompany />
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
            <BaseBtn
              sm
              class="bg-red-500 text-white rounded-full ml-2"
              @click="deleteCompany(company.id)"
            >
              Eliminar
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
  