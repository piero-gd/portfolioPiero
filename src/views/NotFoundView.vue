<template>
  <v-app id="not-found" :style="{ background: $vuetify.theme.themes.dark.background }">
    <TheNavbar />
    <v-container class="text-center py-16">
      <v-row justify="center" align="center">
        <v-col cols="12">
          <h1 class="text-h1 white--text mb-4">404</h1>
          <h2 class="text-h4 white--text mb-8">Página no encontrada</h2>
          <p class="grey--text mb-8">
            La página que estás buscando no existe o ha sido movida.
          </p>
          <v-btn color="#26532B" dark @click="$router.push('/')">
            Volver al inicio
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
    <TheFooter />
  </v-app>
</template>

<script>
import TheNavbar from '@/components/layout/TheNavbar.vue';
import TheFooter from '@/components/layout/TheFooter.vue';

export default {
  name: 'NotFoundView',
  components: {
    TheNavbar,
    TheFooter
  }
}
</script>

<style scoped>
/* Estilos adicionales para la página 404 si son necesarios */
</style>
