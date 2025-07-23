<template>
  <v-app id="project-detail" :style="{ background: $vuetify.theme.themes.dark.background }">
    <TheNavbar />
    <v-container>
      <v-row class="my-8">
        <v-col cols="12" class="d-flex align-center">
          <v-btn color="#26532B" dark @click="goBack" class="mr-4">
            <v-icon left>mdi-arrow-left</v-icon>
            Volver
          </v-btn>
          <h1 class="white--text">{{ project ? project.name : 'Proyecto' }}</h1>
        </v-col>

        <v-col cols="12" md="8">
          <v-img
            :src="project ? project.imageUrl : ''"
            contain
            max-height="500"
            class="rounded-lg"
          ></v-img>
        </v-col>

        <v-col cols="12" md="4">
          <v-card color="#1e1e1e" flat class="pa-4">
            <h2 class="white--text mb-4">Detalles</h2>
            <div v-if="project">
              <p class="grey--text">{{ project.description }}</p>
              
              <div class="mt-6">
                <h3 class="white--text mb-2">Tecnologías</h3>
                <v-chip
                  v-for="tech in project.technologies"
                  :key="tech"
                  color="#26532B"
                  text-color="white"
                  class="mr-2 mb-2"
                >
                  {{ tech }}
                </v-chip>
              </div>

              <div class="mt-6">
                <h3 class="white--text mb-2">Enlaces</h3>
                <v-btn
                  color="white"
                  dark
                  outlined
                  :href="project.github"
                  target="_blank"
                  class="mr-2 mb-2"
                  @click="trackProjectLink(project.github, 'github')"
                >
                  <v-icon left>mdi-github</v-icon>
                  Código fuente
                </v-btn>
                <v-btn
                  v-if="project.liveUrl"
                  color="#26532B"
                  dark
                  :href="project.liveUrl"
                  target="_blank"
                  class="mb-2"
                  @click="trackProjectLink(project.liveUrl, 'demo')"
                >
                  <v-icon left>mdi-web</v-icon>
                  Ver demo
                </v-btn>
              </div>
            </div>
            <div v-else>
              <p class="grey--text">Proyecto no encontrado</p>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <TheFooter />
  </v-app>
</template>

<script>
import TheNavbar from '@/components/layout/TheNavbar.vue';
import TheFooter from '@/components/layout/TheFooter.vue';
import { projects } from '@/constants/projects';
import { trackEvent, trackOutboundLink } from '@/utils/analyticsUtils';

export default {
  name: 'ProjectDetailView',
  components: {
    TheNavbar,
    TheFooter
  },
  data() {
    return {
      projects
    };
  },
  computed: {
    project() {
      const projectId = this.$route.params.id;
      return this.projects.find(project => project.id === projectId) || null;
    }
  },
  mounted() {
    // Track project view when component mounts
    if (this.project) {
      trackEvent('Projects', 'view', this.project.name);
    }
  },
  methods: {
    trackProjectLink(url, type) {
      // Track outbound link clicks
      trackOutboundLink(url, type);
      trackEvent('Projects', 'click', `${this.project.name}-${type}`);
    },
    goBack() {
      // Aseguramos que el flag para scroll esté establecido (aunque ya debería estar)
      localStorage.setItem('scrollToProjects', 'true');
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
/* Estilos adicionales para la página de detalle si son necesarios */
</style>
