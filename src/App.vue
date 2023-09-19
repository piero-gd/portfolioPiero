<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import { onMounted } from 'vue';

export default {
  name: 'App',

  data: () => ({
    //
  }),

  setup() {
    onMounted(() => {
      document.title = 'Portafolio Piero';
    });
  },
};
</script>
