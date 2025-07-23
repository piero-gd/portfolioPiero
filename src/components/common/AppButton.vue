<template>
  <v-btn
    :color="color"
    :dark="dark"
    :outlined="outlined"
    :text="text"
    :href="href"
    :target="target ? target : '_self'"
    :class="customClass"
    @click="$emit('click')"
  >
    <slot></slot>
  </v-btn>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    color: {
      type: String,
      default: '#26532B'
    },
    dark: {
      type: Boolean,
      default: true
    },
    outlined: {
      type: Boolean,
      default: false
    },
    text: {
      type: Boolean,
      default: false
    },
    href: {
      type: String,
      default: ''
    },
    target: {
      type: String,
      default: ''
    },
    customClass: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
/* Estilos adicionales si son necesarios */
</style>
