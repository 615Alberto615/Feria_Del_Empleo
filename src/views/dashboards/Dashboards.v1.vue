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
            <main>
                <section class="contenedor sobre-nosotros">
                    <div class="contenedor-sobre-nosotros">
                        <!-- Insertando imagen.jpg desde la carpeta assets  -->
                        <img src="../../assets/feria_empleo.jpg" alt="" class="imagen-about-us">
                        <div class="contenido-textos">
                            <h3><span>1</span>¿Qué son las ferias del empleo?</h3>
                            <p>Las ferias de empleo son una excelente oportunidad para conocer a representantes de diferentes empleadores y establecer relaciones que pueden conducir a conseguir un trabajo.</p>
                            <h3><span>2</span>Historia de la Feria del Empleo U.C.B.</h3>
                            <p>En este apartado se detallará la historia de la Feria del Empleo U.C.B., desde su primera edición en 2019 hasta la más reciente en 2021. Se destacarán las instituciones participantes, el número de estudiantes y graduados asistentes y cómo ha evolucionado la feria con el paso de los años.</p>
                        </div>
                    </div>
                </section>
                <br>
                <section class="contenedor sobre-nosotros">
                    <div class="contenedor-sobre-nosotros">
                        <div class="contenido-textos">
                            <h3><span>3</span>Feria del Empleo U.C.B. 2022</h3>
                            <p>En esta sección se dará a conocer la información más relevante sobre la Feria del Empleo U.C.B. 2022, como las instituciones participantes y las asociaciones que la apoyan. También se explicará cómo será la feria en su versión virtual y cómo funcionará la plataforma para registrarse y recibir notificaciones.</p>
                            <h3><span>4</span>¿Por qué asistir a la Feria del Empleo U.C.B.?</h3>
                            <p>En esta parte se destacarán las razones por las que los estudiantes y graduados deberían asistir a la Feria del Empleo U.C.B., como la posibilidad de conocer a representantes de diferentes empresas, ampliar su red de contactos, informarse sobre oportunidades de empleo y adquirir nuevas habilidades y conocimientos sobre el mercado laboral.</p>
                        </div>
                        <img src="../../assets/feria_empleo_2.jpg" alt="" class="imagen-about-us" width="300px" height="300px">
                    </div>
                </section>
            
            </main>

            <div class="container mx-auto">
                <Breadcrumbs parentTitle="Dashboard" subParentTitle="Dashboard v1" />
                <div class="container-fluid mx-auto">
                    <center>
                        <BaseCard class="">
                            <p class="text-2xl font-bold">NUESTRAS OPCIONES</p><br>
                                        <!--img src="https://eu01.edcwb.com/educanews/interface/images/noticies/20841-7fb66aa6bf604f1dbda80af70f9f1489.jpg"  height="300" width="400" alt=""  /-->
                                        <br><br>
                            <section class="timeline">
                                <ul>
                                    <li>
                                    <div>
                                        <time> <b> VISITA NUESTRA PÁGINA PARA MANTENERTE INFORMADO</b></time>
                                        <p>Conoce los pasos para participar en la Feria del Empleo</p> 
                                        <img src="https://static.vecteezy.com/system/resources/previews/002/106/197/original/online-job-search-concept-vector.jpg"  height="80" width="150" alt=""  />
                                    </div>
                                    </li>
                                    <li>
                                    <div>
                                        <time> <b> CONOCE NUESTRO CRONOGRAMA DE REUNIONES</b></time>
                                        <p>En el cronograma sabras las fechas en las cuales habran conferencias donde puedes obtener mayor informacion y de manera más precisa</p> 
                                        <img src="https://static.vecteezy.com/system/resources/previews/003/872/122/non_2x/online-meeting-illustration-design-concept-man-and-woman-at-remote-work-conference-work-from-home-with-virtual-video-cartoon-people-discussion-vector.jpg"  height="80" width="150" alt=""  />
                                    </div>
                                    </li>
                                    <li>
                                    <div>
                                        <time> <b> CONTACTANOS Y VISITA NUESTRAS OFICINAS</b></time>
                                        <p>Si necesitas consultar o resolver dudas puedes comunicarte con nosotros y te atenderemos con gusta</p> 
                                        <img src="https://www.ucundinamarca.edu.co/unidadapoyoacademico/images/2017/07/19/contacto.png"  height="80" width="140" alt=""  />
                                    </div>
                                    </li>
                                    <li>
                                    <div>
                                        <time> <b> REGISTRATE Y SUBE TUS DATOS</b></time>
                                        <p>Si quieres estar al tanto de las propuestas de trabajo registrate y mantente al tanto </p> 
                                        <img src="https://static.vecteezy.com/system/resources/previews/011/345/227/non_2x/teenage-showing-how-to-sign-up-3d-cartoon-character-illustration-png.png"  height="80" width="140" alt=""  />
                                    </div>
                                    </li>
                                    <!-- more list items here -->
                                </ul>
                                </section>
                        </BaseCard>
                    </center>
                </div>
            </div>

        </div>
    </div>
</template>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'open sans';
}

.contenedor {
    padding: 60px 0;
    width: 90%;
    max-width: 1000px;
    margin: auto;
    overflow: hidden;
}

.titulo {
    color: #108680;
    font-size: 30px;
    text-align: center;
    margin-bottom: 60px;
}

header .textos-header{
    display: flex;
    height: 430px;
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
}

.textos-header h1{
    font-size: 50px;
    color:#fff;
}

.textos-header h2{
    font-size: 30px;
    font-weight: 300;
    color:#fff;
}

.wave{
    position: absolute;
    bottom: 0;
    width: 100%;
}

/* About us */

main .sobre-nosotros{
    padding: 30px 0 60px 0;
}
.contenedor-sobre-nosotros{
    display: flex;
    justify-content: space-evenly;
}

.imagen-about-us{
    width: 48%;
    border-radius: 8%;
}

.sobre-nosotros .contenido-textos{
    width: 48%;
}

.contenido-textos h3{
    margin-bottom: 15px;
}

.contenido-textos h3 span{
    background: #b132b1;
    color: #fff;
    border-radius: 50%;
    display: inline-block;
    text-align: center;
    width: 30px;
    height: 30px;
    padding: 2px;
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, .5);
    margin-right: 5px;
}

.contenido-textos p{
    padding: 0px 0px 30px 15px;
    font-weight: 200;
    text-align: justify;
}


@media screen and (max-width:900px){
    header{
        background-position: center;
    }

    .contenedor-sobre-nosotros{
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .sobre-nosotros .contenido-textos{
        width: 90%;
    }

    .imagen-about-us{
        width: 90%;
    }

    /* Galeria */

    .imagen-port{
        width: 44%;
    }

}

@media screen and (max-width:500px){

    /* ABOUT US */

    .imagen-about-us{
        margin-bottom: 60px;
        width: 90px;
    }

    .sobre-nosotros .contenido-textos{
        width: 95%;
    }

    /* Galeria */

    .imagen-port{
        width: 95%;
    }

}


.timeline ul li {
  list-style-type: none;
  position: relative;
  width: 6px;
  margin: 0 auto;
  padding-top: 50px;
  background: #7f419ced;
  color: aliceblue;
}
.timeline ul li::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: inherit;
}
.timeline ul li div {
  position: relative;
  bottom: 0;
  width: 400px;
  padding: 15px;
  background: #052057;
}
.timeline ul li div::before {
  content: '';
  position: absolute;
  bottom: 7px;
  width: 0;
  height: 0;
  border-style: solid;
}
.timeline ul li:nth-child(odd) div {
  left: 45px;
}
.timeline ul li:nth-child(odd) div::before {
  left: -15px;
  border-width: 8px 16px 8px 0;
  border-color: transparent #052057 transparent transparent;
}
.timeline ul li:nth-child(even) div {
  left: -439px;
}
.timeline ul li:nth-child(even) div::before {
  right: -15px;
  border-width: 8px 0 8px 16px;
  border-color: transparent transparent transparent #052057;
}
</style>
