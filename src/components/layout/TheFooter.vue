<template>
  <v-footer dark padless>
    <v-card flat tile class="black white--text py-5 px-5 text-center" width="100%">
      <v-row>
        <v-col cols="12" sm="4">
          <v-card-text class="white--text pt-2">
            <v-btn icon>
              <v-icon color="#26532B">fas fa-dragon</v-icon>
            </v-btn>
          </v-card-text>
        </v-col>
        <v-col cols="12" sm="4">
          <v-card-text class="pt-2">
            <v-btn
              v-for="socialLink in socialLinks"
              :key="socialLink.icon"
              :href="socialLink.url"
              target="_blank"
              class="mx-1 white--text"
              icon
            >
              <v-icon size="24px">{{ socialLink.icon }}</v-icon>
            </v-btn>
          </v-card-text>
        </v-col>
        <v-col cols="12" sm="4">
          <v-card-text class="pt-3">
            Created by Pierex99
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: 'TheFooter',
  data() {
    return {
      socialLinks: [
        {
          icon: 'mdi-linkedin',
          url: 'https://www.linkedin.com/in/pierogallo/'
        },
        {
          icon: 'mdi-github',
          url: 'https://github.com/Pierex99/'
        }
      ]
    };
  }
}
</script>

<style scoped>
/* Estilos específicos del footer si los hay */
</style>
