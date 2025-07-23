<template>
  <div id="projects" class="mt-10">
    <v-row>
      <v-col md="4" offset-md="2">
        <h3 class="white--text ml-3 mt-8 projects-title">{{ $t('projects.title') }}</h3>
      </v-col>
      <v-col md="4" class="text-end">
        <!--<v-btn title-color="#26532B" dark>View All</v-btn>-->
      </v-col>
    </v-row>

    <!-- Fila para las imágenes de proyectos -->
    <v-row>
      <v-col md="4" offset-md="2" :key="`project-image-1`">
        <v-card 
          class="pa-3 py-6 project-card" 
          outlined 
          tile 
          color="#1e1e1e" 
          @click="goToProjectDetail(localizedProjects[0].id)" 
          style="cursor: pointer;"
        >
          <v-img :src="localizedProjects[0].imageUrl" height="250" contain></v-img>
        </v-card>
      </v-col>
      <v-col md="4" :key="`project-image-2`">
        <v-card 
          class="pa-3 py-6 project-card" 
          outlined 
          tile 
          color="#1e1e1e" 
          @click="goToProjectDetail(localizedProjects[1].id)" 
          style="cursor: pointer;"
        >
          <v-img :src="localizedProjects[1].imageUrl" height="250" contain></v-img>
        </v-card>
      </v-col>
    </v-row>
    
    <!-- Fila para la información de proyectos -->
    <v-row>
      <v-col md="4" offset-md="2" :key="`project-info-1`">
        <v-btn color="white" dark text class="ml-n4" @click="goToProjectDetail(localizedProjects[0].id)">
          {{ localizedProjects[0].name }}
        </v-btn><br />
        <p class="grey--text">{{ localizedProjects[0].description }}</p>
        <div class="project-links mt-3">
          <v-btn class="mr-3 mb-2 project-action-btn github-btn" :href="localizedProjects[0].github" target="_blank" dark>
            <v-icon left size="20px">mdi-github</v-icon>
            {{ $t('projects.viewCode') }}
          </v-btn>
          <v-btn 
            v-if="localizedProjects[0].liveUrl" 
            class="mb-2 project-action-btn demo-btn" 
            :href="localizedProjects[0].liveUrl" 
            target="_blank"
            dark
          >
            <v-icon left size="20px">mdi-web</v-icon>
            {{ $t('projects.viewDemo') }}
          </v-btn>
        </div>
      </v-col>
      <v-col md="4" :key="`project-info-2`">
        <v-btn color="white" dark text class="ml-n4" @click="goToProjectDetail(localizedProjects[1].id)">
          {{ localizedProjects[1].name }}
        </v-btn><br />
        <p class="grey--text">{{ localizedProjects[1].description }}</p>
        <div class="project-links mt-3">
          <v-btn class="mr-3 mb-2 project-action-btn github-btn" :href="localizedProjects[1].github" target="_blank" dark>
            <v-icon left size="20px">mdi-github</v-icon>
            {{ $t('projects.viewCode') }}
          </v-btn>
          <v-btn 
            v-if="localizedProjects[1].liveUrl" 
            class="mb-2 project-action-btn demo-btn" 
            :href="localizedProjects[1].liveUrl" 
            target="_blank"
            dark
          >
            <v-icon left size="20px">mdi-web</v-icon>
            VER DEMO
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { goToProjectDetail } from '@/utils/routingUtils';
import { getProjects } from '@/constants/projects';

export default {
  name: 'ProjectsSection',
  props: {
    projects: {
      type: Array,
      required: true
    }
  },
  computed: {
    // Obtenemos los proyectos con las descripciones en el idioma actual
    localizedProjects() {
      return getProjects(this.$i18n.locale);
    }
  },
  mounted() {
    // Verificamos si hay que hacer scroll a la sección de proyectos
    this.$nextTick(() => {
      if (localStorage.getItem('scrollToProjects') === 'true') {
        this.scrollToProjects();
        localStorage.removeItem('scrollToProjects');
      }
    });
  },
  methods: {
    goToProjectDetail(projectId) {
      // Guardamos en localStorage que debemos hacer scroll a la sección de proyectos cuando volvamos
      localStorage.setItem('scrollToProjects', 'true');
      goToProjectDetail(this.$router, projectId);
    },
    scrollToProjects() {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}
</script>

<style scoped>
.projects-title {
  font-weight: 600;
  letter-spacing: 1px;
}

.project-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}

.project-action-btn {
  border-radius: 4px !important;
  font-weight: 500 !important;
  letter-spacing: 0.5px !important;
  text-transform: uppercase !important;
  padding: 0 16px !important;
  height: 36px !important;
  font-size: 0.85rem !important;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2) !important;
}

.github-btn {
  background-color: #26532B !important;
  color: white !important;
}

.demo-btn {
  background-color: rgba(38, 38, 38, 0.9) !important;
  color: white !important;
  border: 1px solid rgba(255, 255, 255, 0.3) !important;
}

.project-action-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3) !important;
}

/* Estilos para asegurar que las imágenes se vean mejor */
.v-image {
  border-radius: 4px;
}
</style>
