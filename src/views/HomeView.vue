<template>
  <v-app id="home" :style="{ background: $vuetify.theme.themes.dark.background }">
    <Navbar />
    <v-container fluid>
      <v-row>
        <v-col cols="6">
          <v-img class="img-home" src="img/pp5.png" contain max-height="500"></v-img>
        </v-col>
        <v-col cols="6">
          <h5 class="white--text top">Hola 👋🏻, soy</h5>
          <h1 class="green--text text--darken-2">Piero Gallo</h1>
          <p class="grey--text">
            Desarrollador Frontend, apasionado por la Experiencia de Usuario
          </p>
          <v-btn title color="#26532B" href="https://drive.google.com/file/d/1acAK3hmiXlW5GS0Mk0GtQMkD_jlNeczN/view?usp=sharing"
            target="_blank" dark>descarga mi cv</v-btn>
        </v-col>

        <v-col cols="12" class="padd">
          <div class="first">
            <v-row>
              <AboutMe id="about" />

              <Skills id="skills" />
            </v-row>
          </div>
        </v-col>

        <v-col md="3" offset-md="3" id="projects">
          <h3 class="white--text ml-3 mt-4">PROYECTOS DESTACADOS</h3>
        </v-col>
        <v-col md="3" class="text-end">
          <!--<v-btn title-color="#26532B" dark>View All</v-btn>-->
        </v-col>
        <v-col md="3" offset-md="3">
          <v-card class="pa-2 py-5" outlined tile  color="#1e1e1e">
            <v-img src="img/ss-cerocinco-home.png" contain></v-img>
          </v-card>
        </v-col>
        <v-col md="3">
          <v-card class="pa-2 py-5" outlined tile  color="#1e1e1e">
            <v-img src="img/fe-home.png" contain></v-img>
          </v-card>
        </v-col>
        <v-col md="3" offset-md="3">
          <v-btn color="white" dark text class="ml-n4">
            Cerocinco
          </v-btn><br />
          <p class="grey--text">Aplicación web de una tienda de ropa virtual. Se utilizó React y Bootstrap. </p>
          <v-btn class="mx-1 white--text" href="https://github.com/Pierex99/cerocinco-Gallo" target="_blank" icon>
            <v-icon size="24px">mdi-github </v-icon>
          </v-btn>
          <v-btn class="mx-1 white--text" href="https://eloquent-noether-43b4ff.netlify.app/" target="_blank" icon>
            <v-icon size="24px">mdi-web</v-icon>
          </v-btn>
        </v-col>
        <v-col md="3">
          <v-btn color="white" dark text class="ml-n4">
            FrutiExpress
          </v-btn><br />
          <p class="grey--text">Aplicación web de un minimarket virtual que vende productos cotidianos. Incluye sección de
            login. Se utilizó JavaScript Vanilla y EJS.</p>
          <v-btn class="mx-1 white--text" href="https://github.com/Pierex99/Web-FrutiExpress" target="_blank" icon>
            <v-icon size="24px">mdi-github</v-icon>
          </v-btn>
        </v-col>

        <v-col cols="12" class="padd topInverse">
          <div class="second">
            <div class="secondchild1" id="contact">
              <v-row class="secondchildrow">
                <v-col cols="7">
                  <h1 class="white--text">
                    Trabajemos juntos en tu próximo proyecto
                  </h1>
                </v-col>
                <v-col cols="5">
                  <div class="contactContainer">
                    <div class="iconWithText">
                        <v-icon dark class="mx-1 white--text" size="32px">mdi-email </v-icon>
                      <p class="white--text ml-2 my-3">piero_gd@outlook.com</p>
                    </div>
                    <v-btn dark class="mx-1 white--text" href="https://www.linkedin.com/in/pierogallo/"
                      target="_blank" icon>
                      <v-icon size="32px">mdi-linkedin </v-icon>
                    </v-btn>
                  </div>
                  <!--<v-btn title color="#26532B" dark class="mt-8 ml-16">Contacto</v-btn>-->
                </v-col>
              </v-row>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AboutMe from '../components/AboutMe'
import Skills from '../components/Skills'

export default {
  name: 'Home',

  components: {
    Navbar,
    Footer,
    AboutMe,
    Skills
  },

  data: () => ({
    icons: [
      "mdi-github", "mdi-linkedin", "mdi-instagram"
    ]
  })

}
</script>
<style scoped>
.img-home {
  margin-left: 35%;
}

.top {
  margin-top: 180px;
}

.topInverse {
  margin-top: -250px;
}

.topToolbar {
  margin-top: 60px;
  text-align: center;
}

.first {
  width: 100%;
  height: fit-content;
  background: linear-gradient(to right,
      #181818,
      #181818 50%,
      #111111 50%,
      #111111 50%);
  text-align: center;
  padding: 2rem 2rem;
}

.second {
  width: 100%;
  height: 400px;
  text-align: center;
  padding: 2rem 2rem;
  margin-bottom: 4%;
}

.secondchild1 {
  display: inline-block;
  background-color: #1e1e1e;
  padding: 2rem 1rem;
  text-align: left;
  margin-top: 250px;
  width: 50%
}

.secondchildrow {
  align-items: center;
  justify-content: center;
}

.bgColor1 {
  background-color: #1e1e1e;
}

.bgColor2 {
  background-color: #26693C;
}

.contactContainer {
  margin-inline: 8%;
}
.iconWithText {
  display: flex;
  align-items: center;
  margin-left: 0.8%;
}
</style>
