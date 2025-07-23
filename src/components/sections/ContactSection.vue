<template>
  <v-col cols="12" class="padd topInverse">
    <div class="second">
      <div class="secondchild1" id="contact">
        <v-row class="secondchildrow">
          <v-col cols="7">
            <h1 class="white--text">
              {{ $t('contact.title') }}
            </h1>
          </v-col>
          <v-col cols="5">
            <div class="contactContainer">
              <div class="iconWithText mb-4">
                <v-icon dark class="mx-1 white--text contact-icon" size="28px">mdi-email</v-icon>
                <a href="mailto:piero_gd@outlook.com" class="white--text ml-2 my-3 email-link">piero_gd@outlook.com</a>
              </div>
              <div class="iconWithText mb-1">
                <v-btn 
                  dark 
                  color="white"
                  outlined
                  href="https://www.linkedin.com/in/pierogallo/"
                  target="_blank" 
                  class="linkedin-btn"
                  @click="trackLinkedInClick"
                >
                  <v-icon left size="20px" class="linkedin-icon">mdi-linkedin</v-icon>
                  <span class="btn-text">{{ $t('contact.connect') }}</span>
                </v-btn>
              </div>
            </div>
            <!--<v-btn title color="#26532B" dark class="mt-8 ml-16">Contacto</v-btn>-->
          </v-col>
        </v-row>
      </div>
    </div>
  </v-col>
</template>

<script>
import { trackEvent, trackOutboundLink } from '@/utils/analyticsUtils';

export default {
  name: 'ContactSection',
  methods: {
    trackLinkedInClick() {
      trackOutboundLink('https://www.linkedin.com/in/pierogallo/', 'linkedin');
      trackEvent('Contact', 'click', 'LinkedIn');
    }
  }
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

.linkedin-btn {
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
  border-width: 1px !important;
  letter-spacing: 0.5px;
  color: white !important;
}

.linkedin-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: #0077B5 !important;
  border-color: #0077B5 !important;
}

.linkedin-icon {
  color: white !important;
}

.email-link {
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: border-bottom 0.3s ease;
}

.email-link:hover {
  border-bottom: 1px solid white;
}

.contact-icon {
  opacity: 0.9;
}

.btn-text {
  font-weight: 500;
  font-size: 0.9rem;
}
</style>
