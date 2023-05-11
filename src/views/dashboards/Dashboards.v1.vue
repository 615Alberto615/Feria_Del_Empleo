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
            
        <div>
            <img class="imgRedonda" src="../../assets/img1.jpg" alt="">
        </div>

            <div class="slide">
            <div class="slide-inner">
                <input class="slide-open" type="radio" id="slide-1" 
                      name="slide" aria-hidden="true" hidden="" checked="checked">
                <div class="slide-item">
                    <img src="https://www.unotv.com/uploads/2022/08/mas-de-80-mil-vacantes-en-feria-nacional-ve-requisitos-y-sueldos-132405.jpg" alt="">
                </div>
                <input class="slide-open" type="radio" id="slide-2" 
                      name="slide" aria-hidden="true" hidden="">
                <div class="slide-item">
                    <img src="../../assets/img2.jpg" alt="">
                </div>
                <input class="slide-open" type="radio" id="slide-3" 
                      name="slide" aria-hidden="true" hidden="">
                <div class="slide-item">
                    <img src="https://www.ucb.edu.bo/wp-content/uploads/2021/04/174709592_1908653275952429_1407107362001717072_n-1024x770.jpg" alt="">
                </div>
                <label for="slide-3" class="slide-control prev control-1">‹</label>
                <label for="slide-2" class="slide-control next control-1">› </label>
                <label for="slide-1" class="slide-control prev control-2">‹</label>
                <label for="slide-3" class="slide-control next control-2">›</label>
                <label for="slide-2" class="slide-control prev control-3">‹</label>
                <label for="slide-1" class="slide-control next control-3">›</label>
                <ol class="slide-indicador">
                    <li>
                        <label for="slide-1" class="slide-circulo">•</label>
                    </li>
                    <li>
                        <label for="slide-2" class="slide-circulo">•</label>
                    </li>
                    <li>
                        <label for="slide-3" class="slide-circulo">•</label>
                    </li>
                </ol>
            </div>            
        </div>
        <br><br><br><br><br><br><br><br>    

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
    background: #621f81ac;
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
    background: #126e85b4;
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
    border-color: transparent #126e85b4 transparent transparent;
    }
    .timeline ul li:nth-child(even) div {
    left: -439px;
    }
    .timeline ul li:nth-child(even) div::before {
    right: -15px;
    border-width: 8px 0 8px 16px;
    border-color: transparent transparent transparent #126e85b4;
    }

    .slide {
        position: relative;
        box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.64);
        margin-top: 100px;
        margin-right: 600px;
        margin-left:5px ;
    }

    .slide-inner {
        position: relative;
        overflow: hidden;
        width: 100%;
        height: calc( 300px + 3em);
    }

    .slide-open:checked + .slide-item {
        position: static;
        opacity: 100;
    }

    .slide-item {
        position: absolute;
        opacity: 0;
        -webkit-transition: opacity 0.6s ease-out;
        transition: opacity 0.6s ease-out;
    }

    .slide-item img {
        display: block;
        height: auto;
        max-width: 100%;
    }

    .slide-control {
        background: rgba(0, 0, 0, 0.28);
        border-radius: 100%;
        color: #fff;
        cursor: pointer;
        display: none;
        font-size: 40px;
        height: 40px;
        line-height: 35px;
        position: absolute;
        top: 50%;
        -webkit-transform: translate(0, -50%);
        cursor: pointer;
        -ms-transform: translate(0, -50%);
        transform: translate(0, -50%);
        text-align: center;
        width: 40px;
        z-index: 10;
    }

    .slide-control.prev {
        left: 2%;
    }

    .slide-control.next {
        right: 2%;
    }

    .slide-control:hover {
        background: rgba(38, 5, 71, 0.8);
        color: #aaaaaa;
    }

    #slide-1:checked ~ .control-1,
    #slide-2:checked ~ .control-2,
    #slide-3:checked ~ .control-3 {
        display: block;
    }

    .slide-indicador {
        list-style: none;
        margin: 0;
        padding: 0;
        position: absolute;
        bottom: 2%;
        left: 0;
        right: 0;
        text-align: center;
        z-index: 10;
    }

    .slide-indicador li {
        display: inline-block;
        margin: 0 5px;
    }

    .slide-circulo {
        color: #1d025dbe;
        cursor: pointer;
        display: block;
        font-size: 35px;
    }

    .slide-circulo:hover {
        color: #071c72;
    }

    #slide-1:checked ~ .control-1 ~ .slide-indicador 
            li:nth-child(1) .slide-circulo,
    #slide-2:checked ~ .control-2 ~ .slide-indicador 
            li:nth-child(2) .slide-circulo,
    #slide-3:checked ~ .control-3 ~ .slide-indicador 
            li:nth-child(3) .slide-circulo {
        color: #7946c5;
    }

    #titulo {
        width: 100%;
        position: absolute;
        padding: 0px;
        margin: 0px auto;
        text-align: center;
        font-size: 27px;
        color: rgba(255, 255, 255, 1);
        font-family: 'Open Sans', sans-serif;
        z-index: 9999;
        text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.33), 
                -1px 0px 2px rgba(255, 255, 255, 0);
    }
    .imgRedonda {
        position:absolute;
        width:750px;
        height:700px;
        border-radius:180%;
        border:3px solid #0b3c53;
        box-shadow: 0 2px 10px #0b3c53 ;
        top: 40px;
        right: 10px;
        left: 600px;
        
    }
</style>