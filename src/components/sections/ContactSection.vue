<template>
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
              <v-btn 
                dark 
                class="mx-1 white--text" 
                href="https://www.linkedin.com/in/pierogallo/"
                target="_blank" 
                icon
              >
                <v-icon size="32px">mdi-linkedin </v-icon>
              </v-btn>
            </div>
            <!--<v-btn title color="#26532B" dark class="mt-8 ml-16">Contacto</v-btn>-->
          </v-col>
        </v-row>
      </div>
    </div>
  </v-col>
</template>

<script>
export default {
  name: 'ContactSection'
}
</script>

<style scoped>
.topInverse {
  margin-top: -250px;
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

.contactContainer {
  margin-inline: 8%;
}

.iconWithText {
  display: flex;
  align-items: center;
  margin-left: 0.8%;
}
</style>
