<template>
  <v-app id="home" :style="{ background: $vuetify.theme.themes.dark.background }">
    <TheNavbar />
    <v-container fluid>
      <HeroSection />
      
      <v-row>
        <v-col cols="12" class="padd">
          <div class="first">
            <v-row>
              <AboutSection />
              <SkillsSection :skills="skills" />
            </v-row>
          </div>
        </v-col>
      </v-row>
      
      <ProjectsSection :projects="projects" />
      
      <ContactSection />
    </v-container>
    <TheFooter />
  </v-app>
</template>

<script>
import TheNavbar from '@/components/layout/TheNavbar.vue';
import TheFooter from '@/components/layout/TheFooter.vue';
import HeroSection from '@/components/sections/HeroSection.vue';
import AboutSection from '@/components/sections/AboutSection.vue';
import SkillsSection from '@/components/sections/SkillsSection.vue';
import ProjectsSection from '@/components/sections/ProjectsSection.vue';
import ContactSection from '@/components/sections/ContactSection.vue';
import { skills } from '@/constants/skills';
import { getProjects } from '@/constants/projects';

export default {
  name: 'HomeView',

  components: {
    TheNavbar,
    TheFooter,
    HeroSection,
    AboutSection,
    SkillsSection,
    ProjectsSection,
    ContactSection
  },

  data() {
    return {
      skills,
      projects: getProjects(this.$i18n.locale)
    };
  },

  watch: {
    // Actualizamos los proyectos cuando cambia el idioma
    '$i18n.locale': function(newLocale) {
      this.projects = getProjects(newLocale);
    }
  }
}
</script>
<style scoped>
.padd {
  padding: 0;
}

.first {
  width: 100%;
  height: fit-content;
  background: linear-gradient(
    to right,
    #181818,
    #181818 50%,
    #111111 50%,
    #111111 50%
  );
  text-align: center;
  padding: 2rem 2rem;
}
</style>
