<template class="contenedor">
    <div class="contactanos">
      <div class="header">
        <br />
        <img
          src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWM5NTllNTkzMzE5YzZhZWJmYTY3Zjk3MGZkMDQ4ZTBmOWM0NWNlOSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/rWUrg5Fd6earug44YX/giphy.gif"
          alt="Logo de la empresa"
        />
        <h2>Contáctanos</h2>
      </div>
  
      <div class="contenido">
        <p>
          Si tienes alguna pregunta sobre la Feria del Empleo, por favor
          contáctanos:
        </p>
  
        <div class="datos">
          <p><strong>Empresa:</strong> {{ empresa }}</p>
          <p><strong>Dirección:</strong> {{ direccion }}</p>
          <p><strong>Teléfono:</strong> {{ telefono }}</p>
          <p><strong>Directo:</strong> {{ directo }}</p>
          <p><strong>Celular:</strong> {{ celular }}</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.068280228347!2d-68.11457149001885!3d-16.522650184158667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f20ee187a3103%3A0x2f2bb2b7df32a24d!2sUniversidad%20Cat%C3%B3lica%20Boliviana%20%22San%20Pablo%22!5e0!3m2!1ses-419!2sbo!4v1681926597144!5m2!1ses-419!2sbo"
            width="400"
            height="300"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
  
      <div class="footer">
        <p>{{ fecha }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        empresa: 'Feria del Empleo',
        direccion: 'BLOQUE D, PISO 5, AULA D29',
        telefono: '2782222 Interno 2723',
        directo: '2692723',
        celular: '76521445',
        fecha: '',
      };
    },
  
    mounted() {
      let d = new Date();
      this.fecha = d.toLocaleString();
    },
  };
  </script>
  
  <style>
  .contactanos {
    background-image: url('https://us.123rf.com/450wm/malija/malija1802/malija180200080/94927924-transici%C3%B3n-del-color-del-rosa-al-azul-gradiente-de-color-pastel-mate-brillante.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
  }
  
  .header {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
  }
  
  .header img {
    width: 100px;
    margin-bottom: 10px;
  }
  
  .header h2 {
    margin: 0;
  }
  
  .contenido {
    margin-bottom: 30px;
  }
  
  .datos {
    display: inline-block;
    text-align: left;
  }
  
  .footer {
    background-color: grey;
    color: white;
    padding: 10px;
    font-size: 125x;
  }
  </style>
  