<template>
  <v-col cols="12" id="skills">
    <div class="infobox bgColor2">
      <h3 class="white--text ml-3 mt-4">{{ $t('about.skills') }}</h3>
      <div class="skillsContainer mRight mt-10">
        <div 
          v-for="skill in skills" 
          :key="skill.name" 
          class="skillbox mButton padding bgColor1"
        >
          <div class="skill-content">
            <v-img :src="skill.imageUrl" contain max-height="40" class="skill-image"></v-img>
            <p class="mt-3 skill-name">{{ skill.name }}</p>
          </div>
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

.skillbox {
  width: 160px;
  text-align: center;
  margin: 12px;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.skillbox:hover {
  transform: translateY(-10px) scale(1.05);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
}

.skill-content {
  position: relative;
  padding: 16px 8px;
  height: 100%;
}

.skillbox p {
  color: #FFFFFF;
}

.skill-name {
  font-weight: 500;
  transition: transform 0.3s ease;
}

.skillbox:hover .skill-name {
  transform: translateY(-2px);
  font-size: 1.05rem;
  font-weight: bold;
}

.skill-image {
  transition: transform 0.3s ease;
}

.skillbox:hover .skill-image {
  transform: scale(1.2);
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
