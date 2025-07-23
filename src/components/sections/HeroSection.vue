<template>
  <v-row>
    <v-col cols="6">
      <v-img class="img-home" src="/img/pp5.png" contain max-height="500"></v-img>
    </v-col>
    <v-col cols="6">
      <h5 class="white--text top">Hola 👋🏻, soy</h5>
      <h1 class="green--text text--darken-2">Piero Gallo</h1>
      <p class="grey--text">
        Desarrollador Frontend, apasionado por la Experiencia de Usuario
      </p>
      <v-btn
        title
        color="#26532B"
        href="https://drive.google.com/file/d/1acAK3hmiXlW5GS0Mk0GtQMkD_jlNeczN/view?usp=sharing"
        target="_blank"
        dark
      >
        descarga mi cv
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'HeroSection'
}
</script>

<style scoped>
.img-home {
  margin-left: 35%;
}

.top {
  margin-top: 180px;
}
</style>
