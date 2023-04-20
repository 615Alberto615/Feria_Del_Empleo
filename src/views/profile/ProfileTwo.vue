<script setup>
    import { 
        dashboardOne, 
        dashboardTwo, 
        splineAreaWidgetTwo, 
        splineAreaWidgetThree
    } from '@/data/dashboard.v1.js';
   
    
</script>

<template>
    <div class="container mx-auto">
        <Breadcrumbs parentTitle="Dashboard" subParentTitle="Dashboard v1" />
        <div class="grid grid-cols-12 gap-5">
            
            <div
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
                        src="/bnb.png"
                        alt=""
                    />
                    <p class="text-base mt-4">Empresa 1</p>
                    <p class="text-xs text-gray-400">Empresa de ...</p>
                    <p class="my-2 text-sm text-gray-500 mb-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Recusandae cumque.
                    </p>
                    <BaseBtn sm class="bg-primary text-white rounded-full">
                        Contacto Empresa
                    </BaseBtn>
                    <div class="mt-4">
                        <router-link to="" class="mr-2 hover:text-primary">
                            <i class="i-Linkedin-2 text-xs"></i>
                        </router-link>
                        <router-link to="" class="mr-2 hover:text-primary">
                            <i class="i-Facebook-2 text-xs"></i>
                        </router-link>
                        <router-link to="" class="mr-2 hover:text-primary">
                            <i class="i-Twitter text-xs"></i>
                        </router-link>
                        <router-link to="" class="mr-2 hover:text-primary">
                            <i class="i-Instagram text-xs"></i>
                        </router-link>

                    </div>
                </BaseCard>
                
            </div>
            <!-- end of col -->
            <div
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
                        src="/bcp.png"
                        alt=""
                    />
                    <p class="text-base mt-4">Empresa 2</p>
                    <p class="text-xs text-gray-400">Empresa de ...</p>
                    <p class="my-2 text-sm text-gray-500 mb-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Recusandae cumque.
                    </p>
                    <BaseBtn sm class="bg-primary text-white rounded-full">
                        Contacto Empresa
                    </BaseBtn>
                    <div class="mt-4">
                        <router-link to="" class="mr-2 hover:text-primary">
                            <i class="i-Linkedin-2 text-xs"></i>
                        </router-link>
                        <router-link to="" class="mr-2 hover:text-primary">
                            <i class="i-Facebook-2 text-xs"></i>
                        </router-link>
                        <router-link to="" class="mr-2 hover:text-primary">
                            <i class="i-Twitter text-xs"></i>
                        </router-link>
                        <router-link to="" class="mr-2 hover:text-primary">
                            <i class="i-Instagram text-xs"></i>
                        </router-link>

                    </div>
                </BaseCard>
                
            </div>
            <div
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
                        src="/mercan.jpg"
                        alt=""
                    />
                    <p class="text-base mt-4">Empresa 3</p>
                    <p class="text-xs text-gray-400">Empresa de ...</p>
                    <p class="my-2 text-sm text-gray-500 mb-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Recusandae cumque.
                    </p>
                    <BaseBtn sm class="bg-primary text-white rounded-full">
                        Contacto Empresa
                    </BaseBtn>
                    <div class="mt-4">
                        <router-link to="" class="mr-2 hover:text-primary">
                            <i class="i-Linkedin-2 text-xs"></i>
                        </router-link>
                        <router-link to="" class="mr-2 hover:text-primary">
                            <i class="i-Facebook-2 text-xs"></i>
                        </router-link>
                        <router-link to="" class="mr-2 hover:text-primary">
                            <i class="i-Twitter text-xs"></i>
                        </router-link>
                        <router-link to="" class="mr-2 hover:text-primary">
                            <i class="i-Instagram text-xs"></i>
                        </router-link>

                    </div>
                </BaseCard>
                
            </div>
            <div
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
                        src="/union.png"
                        alt=""
                    />
                    <p class="text-base mt-4">Empresa 1</p>
                    <p class="text-xs text-gray-400">Empresa de ...</p>
                    <p class="my-2 text-sm text-gray-500 mb-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Recusandae cumque.
                    </p>
                    <BaseBtn sm class="bg-primary text-white rounded-full">
                        Contacto Empresa
                    </BaseBtn>
                    <div class="mt-4">
                        <router-link to="" class="mr-2 hover:text-primary">
                            <i class="i-Linkedin-2 text-xs"></i>
                        </router-link>
                        <router-link to="" class="mr-2 hover:text-primary">
                            <i class="i-Facebook-2 text-xs"></i>
                        </router-link>
                        <router-link to="" class="mr-2 hover:text-primary">
                            <i class="i-Twitter text-xs"></i>
                        </router-link>
                        <router-link to="" class="mr-2 hover:text-primary">
                            <i class="i-Instagram text-xs"></i>
                        </router-link>

                    </div>
                </BaseCard>
                
            </div>
            
        </div>
    </div>
</template>
