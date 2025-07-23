<template>
  <v-row>
    <v-col cols="6">
      <div class="image-container" @mousemove="handleMouseMove">
        <v-img 
          class="img-home" 
          src="/img/pp5.png" 
          contain 
          max-height="500"
          :style="imageStyle"
          v-bind="$attrs"
          @mouseover="hoverImage = true"
          @mouseleave="hoverImage = false"
        ></v-img>
      </div>
    </v-col>
    <v-col cols="6">
      <div class="hero-content">
        <h5 class="white--text top greeting animate__animated animate__fadeIn">
          <span class="wave">👋🏻</span> {{ $i18n.locale === 'es' ? 'Hola, soy' : 'Hello, I am' }}
        </h5>
        <h1 class="green--text text--darken-2 animate__animated animate__fadeInUp name">Piero Gallo</h1>
        <p class="grey--text animate__animated animate__fadeIn animate__delay-1s">
          {{ $t('hero.content') }}
        </p>
        <v-btn
          title
          color="#26532B"
          href="https://drive.google.com/file/d/1acAK3hmiXlW5GS0Mk0GtQMkD_jlNeczN/view?usp=sharing"
          target="_blank"
          dark
          class="mt-4 cv-button animate__animated animate__fadeIn animate__delay-1s"
          elevation="2"
        >
          <span class="btn-content">
            <v-icon left>mdi-download</v-icon>
            {{ $i18n.locale === 'es' ? 'Descarga mi CV' : 'Download my CV' }}
          </span>
        </v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'HeroSection',
  data() {
    return {
      hoverImage: false,
      mouseX: 0,
      mouseY: 0,
      imageStyle: {}
    };
  },
  methods: {
    handleMouseMove(e) {
      if (!this.hoverImage) return;
      
      // Calculate the movement amount (subtle effect)
      const moveX = (e.clientX - window.innerWidth / 2) / 50;
      const moveY = (e.clientY - window.innerHeight / 2) / 50;
      
      // Apply transformation to image
      this.imageStyle = {
        transform: `translate(${moveX}px, ${moveY}px)`
      };
    }
  }
}
</script>

<style scoped>
@import 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css';

.image-container {
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.img-home {
  margin-left: 35%;
  transition: transform 0.3s ease-out;
  animation: float 6s ease-in-out infinite;
}

.top {
  margin-top: 180px;
}

.hero-content {
  animation: fadeUp 1s ease;
}

.wave {
  display: inline-block;
  animation: wave 2.5s infinite;
  transform-origin: 70% 70%;
}

.name {
  position: relative;
  display: inline-block;
}

.name::after {
  content: '';
  position: absolute;
  width: 0;
  height: 3px;
  bottom: 0;
  left: 0;
  background-color: #26532B;
  animation: underline 1.5s forwards 1s;
}

.cv-button {
  transition: all 0.3s ease;
  overflow: hidden;
  position: relative;
  z-index: 1;
}

.cv-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.2);
  transition: all 0.4s ease;
  z-index: -1;
}

.cv-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 7px 14px rgba(0, 0, 0, 0.2) !important;
}

.cv-button:hover::before {
  left: 100%;
}

.btn-content {
  position: relative;
  z-index: 2;
}

@keyframes wave {
  0% { transform: rotate(0deg); }
  10% { transform: rotate(14deg); }
  20% { transform: rotate(-8deg); }
  30% { transform: rotate(14deg); }
  40% { transform: rotate(-4deg); }
  50% { transform: rotate(10deg); }
  60% { transform: rotate(0deg); }
  100% { transform: rotate(0deg); }
}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}

@keyframes fadeUp {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}

@keyframes underline {
  0% { width: 0; }
  100% { width: 70%; }
}
</style>
