<script setup>
import { ref } from "vue";
import { useUserStore } from "../../store/user";


const email = ref("");
const password = ref("");

const userStore = useUserStore();

const login = async () => {
  await userStore.login(email.value, password.value);
};

</script>
<template>
  <div class="auth-layout-wrap flex justify-center min-h-screen flex-col bg-cover items-center" style="background-image: url(/fl.jpg)">
        <div class="container-session-v1 max-w-2xl">
            <BaseCard noPadding class="overflow-hidden">
              <div class="grid grid-cols-12">
                  <div class="col-span-12 lg:col-span-6">
                      <div class="p-5">
                        
                          <h1 class="mb-3 text-lg">Sign In </h1>
                          <form @submit.prevent="login">
                              <div class="mb-3">
                                  <label class="text-xs text-gray-600" for="">Email Address</label>
                                  <input class="w-full px-4 py-1 bg-gray-100 focus:outline-none border border-gray-400 rounded-full"  type="email" placeholder="example@ucb.edu.bo" required v-model="email">
                              </div>
                              <div class="mb-3">
                                  <label class="text-xs text-gray-600" for="">Password</label>
                                  <input class="w-full px-4 py-1 bg-gray-100 focus:outline-none border border-gray-400 rounded-full"  type="password" placeholder="Password" required v-model="password">
                              </div>
                              <div class="mb-4">
      
                                  <BaseBtn block class="bg-blue-500 mb-2 text-white  rounded-full" type="submit">Sign In</BaseBtn>
                                  
                              </div>
                              <BaseBtn block rounded class=" mb-3 border border-red-500 bg-gray-100 text-red-500 hover:bg-red-500 hover:text-white">
                                <i class="i-Google-Plus align-middle mr-2"></i>Sign Up with Google
                                </BaseBtn>
                                
                          </form>
                      </div>
                  </div>
                  <div class="col-span-12 bg-cover lg:col-span-6" style="background-image: url(../../images/photo-long-3.jpg)"><!--/ff2.png-->
                      <div class="flex justify-center items-center flex-col h-full px-4 py-2">
                          <div class="card" style="display: flex; justify-content: center; align-items: center; top: 50%; left: 50%; transform: translate(-2%, -10%);">
                            
                            <img src="/Log-UCB400px.png" alt="Imagen pequeña" />
                        </div>
                        <!--
                          <BaseBtn block rounded class=" mb-3 border border-red-500 bg-gray-100 text-red-500 hover:bg-red-500 hover:text-white">
                            <i class="i-Google-Plus align-middle mr-2"></i>Sign Up with Google
                          </BaseBtn>
                          -->
                          
                          
                          
                      </div>
                  </div>
              </div>
            </BaseCard>
            
        </div>
    </div>
</template>
