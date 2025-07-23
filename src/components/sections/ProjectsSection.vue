<template>
  <div id="projects" class="mt-10">
    <v-row>
      <v-col md="4" offset-md="2">
        <h3 class="white--text ml-3 mt-8 projects-title">PROYECTOS DESTACADOS</h3>
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
          @click="goToProjectDetail(projects[0].id)" 
          style="cursor: pointer;"
        >
          <v-img :src="projects[0].imageUrl" height="250" contain></v-img>
        </v-card>
      </v-col>
      <v-col md="4" :key="`project-image-2`">
        <v-card 
          class="pa-3 py-6 project-card" 
          outlined 
          tile 
          color="#1e1e1e" 
          @click="goToProjectDetail(projects[1].id)" 
          style="cursor: pointer;"
        >
          <v-img :src="projects[1].imageUrl" height="250" contain></v-img>
        </v-card>
      </v-col>
    </v-row>
    
    <!-- Fila para la información de proyectos -->
    <v-row>
      <v-col md="4" offset-md="2" :key="`project-info-1`">
        <v-btn color="white" dark text class="ml-n4" @click="goToProjectDetail(projects[0].id)">
          {{ projects[0].name }}
        </v-btn><br />
        <p class="grey--text">{{ projects[0].description }}</p>
        <v-btn class="mx-1 white--text" :href="projects[0].github" target="_blank" icon>
          <v-icon size="24px">mdi-github</v-icon>
        </v-btn>
        <v-btn 
          v-if="projects[0].liveUrl" 
          class="mx-1 white--text" 
          :href="projects[0].liveUrl" 
          target="_blank" 
          icon
        >
          <v-icon size="24px">mdi-web</v-icon>
        </v-btn>
      </v-col>
      <v-col md="4" :key="`project-info-2`">
        <v-btn color="white" dark text class="ml-n4" @click="goToProjectDetail(projects[1].id)">
          {{ projects[1].name }}
        </v-btn><br />
        <p class="grey--text">{{ projects[1].description }}</p>
        <v-btn class="mx-1 white--text" :href="projects[1].github" target="_blank" icon>
          <v-icon size="24px">mdi-github</v-icon>
        </v-btn>
        <v-btn 
          v-if="projects[1].liveUrl" 
          class="mx-1 white--text" 
          :href="projects[1].liveUrl" 
          target="_blank" 
          icon
        >
          <v-icon size="24px">mdi-web</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { goToProjectDetail } from '@/utils/routingUtils';

export default {
  name: 'ProjectsSection',
  props: {
    projects: {
      type: Array,
      required: true
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

/* Estilos para asegurar que las imágenes se vean mejor */
.v-image {
  border-radius: 4px;
}
</style>
