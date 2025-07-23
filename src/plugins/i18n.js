import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

// Importar mensajes de idioma
import es from '@/locales/es.js'
import en from '@/locales/en.js'

// Crear instancia de i18n con opciones
const i18n = new VueI18n({
  locale: 'es', // Idioma por defecto
  fallbackLocale: 'es', // Idioma de respaldo
  messages: {
    es,
    en
  },
  silentTranslationWarn: process.env.NODE_ENV === 'production'
})

export default i18n
