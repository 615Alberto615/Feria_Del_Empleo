<script setup>
import { ref } from "vue";
import { useUserStore } from "../../store/user";
import { useRouter } from "vue-router"; // Importa useRouter de "vue-router"
import { defineExpose } from "vue";

const email = ref("");
const password = ref("");

const userStore = useUserStore();
const router = useRouter(); // Obtén la instancia de $router aquí

const register = async () => {
  try {
    const response = await userStore.register(email.value, password.value);
    if (response.error) {
      alert(response.error);
    } else {
      alert("Usuario registrado");
      router.push("/signIn"); // Redirige a la página de inicio de sesión aquí
    }
  } catch (error) {
    console.error("Error en el registro:", error);
  }
};

defineExpose({
  email,
  password,
  register,
});
</script>

<template>
  <div class="auth-layout-wrap flex justify-center min-h-screen flex-col bg-cover items-center" style="background-image: url(/fl.jpg)">
        <div class="container-session-v1 max-w-2xl">
            <BaseCard noPadding class="overflow-hidden">
                <div class="grid grid-cols-12">
                    <div class="col-span-12 bg-cover lg:col-span-6" style="background-image: url(../../images/photo-long-3.jpg)">
                        <div class="card" style="display: flex; justify-content: center; align-items: center; top: 50%; left: 50%; transform: translate(0.5%, 30%);">
                            
                            <img src="/Log-UCB400px.png" alt="Imagen pequeña" />
                        </div>
                        <!--
                        <div class="block justify-center items-center flex-scol h-full px-4 py-2 lg:flex">
                            
                            
                            <BaseBtn block rounded class="mb-3 border border-purple-500 bg-gray-100 text-purple-500 hover:bg-purple-500 hover:text-white">
                                <i class="i-Mail-with-At-Sign align-middle mr-2"></i>Sign Up with Email
                            </BaseBtn>
                            <BaseBtn block rounded class=" mb-3 border border-red-500 bg-gray-100 text-red-500 hover:bg-red-500 hover:text-white">
                                <i class="i-Google-Plus align-middle mr-2"></i>Sign Up with Google
                            </BaseBtn>
                            <BaseBtn block rounded class="border border-indigo-500 bg-gray-100 text-indigo-500 hover:bg-indigo-500 hover:text-white">
                                <i class="i-Facebook-2 align-middle mr-2"></i>Sign Up with facebook
                            </BaseBtn>
                           
                        </div> -->  
                        
                    </div>
                    <div class="col-span-12 lg:col-span-6">
                        <div class="p-5">
                            <h1 class="mb-3 text-lg">Sign Up </h1>
                            <form @submit.prevent="register">
                                <!--
                                <div class="mb-3">
                                    <label class="text-base text-gray-600" for="">Your Name</label>
                                    <input class="w-full px-4 py-1 border border-gray focus:outline-none rounded-full" type="text" placeholder="">
                                </div>-->
                                <div class="mb-3">
                                    <label class="text-base text-gray-600" for="">Email Address</label>
                                    <input class="w-full px-4 py-1 border border-gray focus:outline-none rounded-full" type="email" placeholder="" required v-model="email">
                                </div>
                                <div class="mb-3">
                                    <label class="text-base text-gray-600" for="">Password</label>
                                    <input class="w-full px-4 py-1 border border-gray focus:outline-none rounded-full" type="password" placeholder="" required v-model="password">
                                </div><!--
                                <div class="mb-3">
                                    <label class="text-base text-gray-600" for="">Retype Password</label>
                                    <input class="w-full px-4 py-1 border border-gray focus:outline-none rounded-full" type="password" placeholder="">
                                </div>-->
                                <BaseBtn rounded block class="bg-blue-500 text-white"  type="submit">Sign Up</BaseBtn>
                            </form>
                            
                        </div>
                    </div>
                </div>
            </BaseCard>
            
            
        </div>
    </div>
</template>
