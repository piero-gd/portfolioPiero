<template>
  <v-icon
    :color="color"
    :size="size"
    :dark="dark"
    :class="customClass"
  >
    {{ iconName }}
  </v-icon>
</template>

<script>
export default {
  name: 'AppIcon',
  props: {
    iconName: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: 'white'
    },
    size: {
      type: [String, Number],
      default: '24px'
    },
    dark: {
      type: Boolean,
      default: true
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
