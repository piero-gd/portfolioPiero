<template>
    <v-col cols="12">
            <div class="infobox bgColor1">
                <v-icon color="#26532B" x-large class="ml-3">
                  mdi-palette-swatch
                </v-icon>
                <h3 class="white--text ml-3 mt-4">Sobre Mí</h3>
                <p class="grey--text ml-3 mt-6">
                  Me encanta crear aplicaciones que brinden una experiencia satisfactoria para las personas. Puedes ver 
                  mis proyectos en la sección de 
                  <a text @click="scroll('projects')"><strong ><em class="white--text">proyectos</em></strong> </a>
                  . 
                  <br/><br/>

                  Soy una persona comprometida, responsable y proactiva en mis labores asignadas. Dispongo de 
                  conocimientos en desarrollo web, móvil, diseño UX/UI y de muchas ganas de aprender más, 
                  desarrollando habilidades y destrezas aplicables en mi vida profesional y personal. Mas abajo puedes
                  ver las tecnologías que utilizo.
                  <br/><br/>
                  Este portafolio fue realizado utilizando VueJS!

                </p>
              </div>
            </v-col>
</template>

<script>
export default {
    methods: {
        scroll(refName) {
            const element = document.getElementById(refName);
            element.scrollIntoView({behavior: 'smooth'});
        }
    }
}
</script>


<style scoped>

.infobox{
  display: inline-block;
  padding: 2rem 1rem;
  vertical-align: middle;
  text-align: left;
  margin-right: 8px;
  width:60%;
}

.bgColor1 {
  background-color: #1e1e1e;
}
.bgColor2 {
  background-color: #26693C;
}
</style>