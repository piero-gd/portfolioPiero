<template>
  <v-col cols="12" id="skills">
    <div class="infobox bgColor2">
      <h3 class="white--text ml-3 mt-4">Habilidades</h3>
      <div class="skillsContainer mRight mt-10">
        <div v-for="skill in skills" :key="skill.name" class="skillbox mButton padding bgColor1">
          <v-img :src="skill.imageUrl" contain max-height="40"></v-img>
          <p class="mt-3">{{ skill.name }}</p>
        </div>
      </div>
    </div>
  </v-col>
</template>

<script>
export default {
  name: 'SkillsSection',
  props: {
    skills: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.infobox {
  display: inline-block;
  padding: 2rem 1rem;
  vertical-align: middle;
  text-align: left;
  margin-right: 8px;
  width: 60%;
}

.skillsContainer {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}

.skillbox {
  width: 160px;
  text-align: center;
  margin: 12px;
  /*border: 2px solid #205A34;*/
}

.skillbox p {
  color: #FFFFFF;
}

.bgColor1 {
  background-color: #26532B;
}

.bgColor2 {
  background-color: #26532B;
}

.mRight {
  margin-right: 8px;
}

.padding {
  padding: 8px;
}
</style>
