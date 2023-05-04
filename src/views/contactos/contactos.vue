
<script setup>
    import { 
        dashboardOne, 
        dashboardTwo, 
        splineAreaWidgetTwo, 
        splineAreaWidgetThree
    } from '@/data/dashboard.v1.js';
   
    
</script><template>
  <div class="container mx-auto">
    <center>
      <Breadcrumbs parentTitle="Dashboard" subParentTitle="Dashboard v1" />
      <img
          src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWM5NTllNTkzMzE5YzZhZWJmYTY3Zjk3MGZkMDQ4ZTBmOWM0NWNlOSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/rWUrg5Fd6earug44YX/giphy.gif"
          alt="Logo de la empresa" class="header_img "
        />
      <div class="container-fluid mx-auto" >
          <center>
              <BaseCard class="">
                  <div class=" justify-between items-center" >
                      <div>
                          <p class="text-2xl font-bold">BIENVENIDO A LA FERIA DEL EMPLEO</p><br>
                        
                          <p class="text-2xl font-bold">CONTACTANOS</p><br>
                          <p>
                            Si tienes alguna pregunta sobre la Feria del Empleo, por favor
                            contáctanos
                            
                          </p>

                      </div>
                      
                  </div>
              </BaseCard>
            </center>   
      </div>
      <br>
      <br>
      <div class="container-fluid mx-auto">
        <center>
                  <BaseCard class="">
                  <div class="justify-between items-center">
                      <div>
                        <p><strong>Empresa:</strong> {{ empresa }}</p>
                        <p><strong>Dirección:</strong> {{ direccion }}</p>
                        <p><strong>Teléfono:</strong> {{ telefono }}</p>
                        <p><strong>Directo:</strong> {{ directo }}</p>
                        <p><strong>Celular:</strong> {{ celular }}</p>

                        

                      </div>
                      
                  </div>
              </BaseCard>
            </center>    
      </div>
      <br><br>
      <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.068280228347!2d-68.11457149001885!3d-16.522650184158667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f20ee187a3103%3A0x2f2bb2b7df32a24d!2sUniversidad%20Cat%C3%B3lica%20Boliviana%20%22San%20Pablo%22!5e0!3m2!1ses-419!2sbo!4v1681926597144!5m2!1ses-419!2sbo"
            width="400"
            height="300"
            style="border: 0 !important;border-radius: 40px !important;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            
          ></iframe>
          <br><br>
          <div>
            <center>
              <BaseCard class="">
                <div class="justify-between items-center">
                  <div>
                    <p class="text-2xl font-bold">CONTACTANOS POR: </p>
                    <button href="#" type="button" class="btn btn-success d-flex gap-2 mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path>
                        </svg>
                          Contactanos por Whatsapp
                      </button>
                      <button href="#" type="button" class="btn btn-primary d-flex gap-2 mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                        </svg>
                          Visita nuestra pagina de facebook
                      </button>

                      <button href="#" type="button" class="btn btn-danger d-flex gap-2 mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                        </svg>
                          Visita nuestra pagina de instagram
                      </button>
                      <button href="#" type="button" class="btn btn-dark border-danger d-flex gap-2 mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tiktok" viewBox="0 0 16 16">
                          <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z"/>
                        </svg>
                          Visita nuestra pagina de tiktok
                      </button>
                  </div>
                </div>
              </BaseCard>
            </center>
          </div>
        </center> 
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
        celular: '76521445 ',
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
body {
            font-family: Arial, sans-serif;
        }

        .center {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            text-align: center;
        }

        .base-card {
            background-color: #ffffff;
            border-radius: 5px;
            padding: 20px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            width: 100%;
            max-width: 600px;
        }

        .contact-title {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 15px;
        }

        .contact-button {
            display: flex;
            align-items: center;
            gap: 10px;
            text-decoration: none;
            padding: 10px 15px;
            border-radius: 5px;
            margin-bottom: 10px;
            color: white;
            font-size: 16px;
            transition: background-color 0.3s;
        }

        .contact-button:hover {
            background-color: rgba(0, 0, 0, 0.1);
        }

        .whatsapp {
            background-color: #25D366;
        }

        .facebook {
            background-color: #1877F2;
        }

        .instagram {
            background-color: #E1306C;
        }

        .tiktok {
            background-color: #000000;
            border: 2px solid #FF0000;
        }
</style>
  