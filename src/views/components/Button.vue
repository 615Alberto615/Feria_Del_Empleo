<script setup>

import { 
        dashboardOne, 
        dashboardTwo, 
        splineAreaWidgetTwo, 
        splineAreaWidgetThree
  } from '@/data/dashboard.v1.js';

const colors = [
  {
    colorName: 'bg-primary text-white',
    theme: 'Evento - Dia Lunes 20 de Septiembre'
  },
  {
    colorName: 'bg-success text-white',
    theme: 'Evento - Dia Martes 21 de Septiembre'
  },
  {
    colorName: 'bg-danger text-white',
    theme: 'Evento - Dia Miercoles 23 de Septiembre'
  },
  {
    colorName: 'bg-warning text-white',
    theme: 'Evento - Dia Jueves 24 de Septiembre'
  },
  {
    colorName: 'bg-info text-white',
    theme: 'Evento - Dia Viernes 25 de Septiembre'
  },
  {
    colorName: 'bg-light text-white',
    theme: 'Evento - Dia Sabado 26 de Septiembre'
  },
  {
    colorName: 'bg-dark text-white',
    theme: 'Evento - Dia Domingo 27 de Septiembre'
  },
]
const colorsOutlined = [
  {
    colorName: 'border border-primary text-primary hover:bg-primary hover:text-white  ',
    theme: 'Evento - Dia Lunes 20 de Septiembre'
  },
  {
    colorName: 'border border-success text-success hover:bg-success hover:text-white',
    theme: 'Evento - Dia Martes 21 de Septiembre'
  },
  {
    colorName: 'border border-danger text-danger hover:bg-danger hover:text-white',
    theme: 'Evento - Dia Miercoles 23 de Septiembre'
  },
  {
    colorName: 'border border-warning text-warning hover:bg-warning hover:text-white',
    theme: 'Evento - Dia Jueves 24 de Septiembre'
  },
  {
    colorName: 'border border-info text-info hover:bg-info hover:text-white',
    theme: 'Evento - Dia Viernes 25 de Septiembre'
  },
  {
    colorName: 'border border-light text-light hover:bg-light hover:text-white',
    theme: 'Evento - Dia Sabado 26 de Septiembre'
  },
  {
    colorName: 'border border-dark text-dark hover:bg-dark hover:text-white',
    theme: 'Evento - Dia Domingo 27 de Septiembre'
  },
]
</script>

<template>
  <div class="container mx-auto">
        <Breadcrumbs parentTitle="Dashboard" subParentTitle="Dashboard v1" />
        <div class="container-fluid mx-auto">
            <center>
                <BaseCard class="">
                    <div class="flex justify-between items-center">
                        <div>
                            <p class="text-2xl font-bold">CRONOGRAMA -  FERIA DEL EMPLEO</p><br>
                            <p>
                                En este pagina se publicaran los eventos que se realizaran en la feria del empleo, y se iran subiendo
                                las fechas programadas para cada evento mediante un link que se proporcionara y se mostrara en la pagina.
                            </p>
                            

                        </div>
                        
                    </div>
                </BaseCard>
            </center>
        </div>
    </div>

  <div class="container mx-auto">
     <Breadcrumb parentTitle='Button' subParentTitle='Buttons' />


    <div class="mt-10">
      <div class="grid md:grid-cols-1 sm:grid-cols-1 gap-4">
        <div>
          <BaseCard>
            <div class="card-title mb-12">REUNIONES PROGRAMADAS</div>
            <BaseBtn 
              v-for="(color, index) in colors"
              :key="index"
              block
              :class="color.colorName" 
              class="mb-3 mr-3"
            >
              {{color.theme}}
            </BaseBtn>
          </BaseCard>
        </div>
        
        
        
      </div>
    </div>
  </div>
</template>
