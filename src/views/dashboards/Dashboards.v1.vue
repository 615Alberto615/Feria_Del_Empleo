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
        <div class="container-fluid mx-auto">
            <center>
                <BaseCard class="">
                    <div class="flex justify-between items-center">
                        <div>
                            <p class="text-2xl font-bold">FERIA DEL EMPLEO UCB</p><br>
                            <p>
                                El sitio web de la Feria del Empleo está destinada a la interacción entre sus participantes: 
                                instituciones, estudiantes y/o graduados UCB, emprendimientos de graduados UCB, autoridades y 
                                administrativos
                            </p>
                            

                        </div>
                        
                    </div>
                </BaseCard>
            </center>
        </div>
    </div>
</template>
