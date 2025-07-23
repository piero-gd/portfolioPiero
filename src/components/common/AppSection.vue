<template>
  <div :class="['section-container', bgClass]">
    <h2 v-if="title" class="section-title">{{ title }}</h2>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'AppSection',
  props: {
    title: {
      type: String,
      default: ''
    },
    bgClass: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.section-container {
  padding: 3rem 1rem;
  margin-bottom: 2rem;
}

.section-title {
  margin-bottom: 1.5rem;
  color: #fff;
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -10px;
  width: 50px;
  height: 3px;
  background-color: #26532B;
}
</style>
