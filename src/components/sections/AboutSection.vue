<template>
  <v-col cols="12" id="about">
    <div class="infobox bgColor1">
      <v-icon color="#26532B" x-large class="ml-3">mdi-palette-swatch</v-icon>
      <h3 class="white--text ml-3 mt-4">{{ $t('about.title') }}</h3>
      <p class="grey--text ml-3 mt-6">
        {{ $t('about.content') }}
        <a text @click="scrollToElement('projects')">
          <strong><em class="white--text">{{ $i18n.locale === 'es' ? 'proyectos' : 'projects' }}</em></strong>
        </a>.
        <br /><br />
        {{ $i18n.locale === 'es' ? 
          'Soy una persona comprometida, responsable y proactiva en mis labores asignadas. Dispongo de conocimientos en desarrollo web, móvil, diseño UX/UI y de muchas ganas de aprender más, desarrollando habilidades y destrezas aplicables en mi vida profesional y personal. Mas abajo puedes ver las tecnologías que utilizo.' 
          : 
          'I am a committed, responsible, and proactive person in my assigned tasks. I have knowledge in web development, mobile development, UX/UI design, and a great desire to learn more, developing skills applicable in my professional and personal life. Below you can see the technologies I use.'
        }}
        <br /><br />
        {{ $i18n.locale === 'es' ? 'Este portafolio fue realizado utilizando VueJS!' : 'This portfolio was made using VueJS!' }}
      </p>
    </div>
  </v-col>
</template>

<script>
import useScroll from '@/composables/useScroll';

export default {
  name: 'AboutSection',
  setup() {
    const { scrollToElement } = useScroll();
    
    return {
      scrollToElement
    };
  }
}
</script>

<style scoped>
.infobox {
  display: inline-block;
  padding: 2rem 1rem;
  vertical-align: middle;
  text-align: left;
  margin-right: 8px;
  width: 60%;
}

.bgColor1 {
  background-color: #1e1e1e;
}
</style>
