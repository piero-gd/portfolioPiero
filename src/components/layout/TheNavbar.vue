<template>
  <v-app-bar app color="#111111" dark flat class="px-8">
    <v-btn icon>
      <v-icon color="#26532B">fas fa-dragon</v-icon>
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn text @click="scrollToElement('home')">Home</v-btn>
    <v-btn text @click="scrollToElement('about')">Sobre mí</v-btn>
    <v-btn text @click="scrollToElement('projects')">Proyectos</v-btn>
    <v-btn text @click="scrollToElement('contact')">Contacto</v-btn>
  </v-app-bar>
</template>

<script>
import useScroll from '@/composables/useScroll';

export default {
  name: 'TheNavbar',
  setup() {
    const { scrollToElement } = useScroll();
    
    return {
      scrollToElement
    };
  }
}
</script>

<style scoped>
/* Estilos específicos del navbar si los hay */
</style>
