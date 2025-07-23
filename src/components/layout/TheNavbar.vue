<template>
  <v-app-bar app color="#111111" dark flat class="px-8">
    <v-btn icon>
      <v-icon color="#26532B">fas fa-dragon</v-icon>
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn text @click="scrollToElement('home')">{{ $t('navbar.home') }}</v-btn>
    <v-btn text @click="scrollToElement('about')">{{ $t('navbar.about') }}</v-btn>
    <v-btn text @click="scrollToElement('projects')">{{ $t('navbar.projects') }}</v-btn>
    <v-btn text @click="scrollToElement('contact')">{{ $t('navbar.contact') }}</v-btn>
    
    <!-- Selector de idiomas a la derecha -->
    <v-menu offset-y left>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          text
          class="language-selector ml-4"
          v-bind="attrs"
          v-on="on"
        >
          <v-icon left>mdi-translate</v-icon>
          {{ currentLocale === 'es' ? 'ES' : 'EN' }}
          <v-icon right size="small">mdi-chevron-down</v-icon>
        </v-btn>
      </template>
      <v-list dense>
        <v-list-item @click="changeLocale('es')">
          <v-list-item-icon class="mr-2">
            <v-icon v-if="currentLocale === 'es'" color="#26532B">mdi-check</v-icon>
          </v-list-item-icon>
          <v-list-item-title :class="{ 'font-weight-bold': currentLocale === 'es' }">Español</v-list-item-title>
        </v-list-item>
        <v-list-item @click="changeLocale('en')">
          <v-list-item-icon class="mr-2">
            <v-icon v-if="currentLocale === 'en'" color="#26532B">mdi-check</v-icon>
          </v-list-item-icon>
          <v-list-item-title :class="{ 'font-weight-bold': currentLocale === 'en' }">English</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
import useScroll from '@/composables/useScroll';

export default {
  name: 'TheNavbar',
  data() {
    return {
      currentLocale: this.$i18n.locale
    };
  },
  methods: {
    scrollToElement(id) {
      useScroll().scrollToElement(id);
    },
    changeLocale(locale) {
      this.$i18n.locale = locale;
      this.currentLocale = locale;
      localStorage.setItem('userLocale', locale);
    }
  },
  created() {
    // Cargar idioma guardado en localStorage si existe
    const savedLocale = localStorage.getItem('userLocale');
    if (savedLocale) {
      this.$i18n.locale = savedLocale;
      this.currentLocale = savedLocale;
    }
  }
}
</script>

<style scoped>
.language-selector {
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  padding: 0 12px;
  transition: all 0.3s ease;
  min-width: 80px;
}

.language-selector:hover {
  background-color: rgba(38, 83, 43, 0.2) !important;
  border-color: #26532B;
}

/* Estilos específicos del navbar si los hay */
</style>
