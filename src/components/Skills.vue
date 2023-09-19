<template>
    <!--SKILLS: TECNOLOGÍAS Y HERRAMIENTAS, java-->
    <!--HERR: FIGMA, GITHUB, SCRUM, NOTION-->
    <v-col cols="12">
        <div class="infobox bgColor2">
            <h3 class="white--text ml-3 mt-4">Habilidades</h3>
            <div class="skillsContainer mRight mt-10">

                <div class="skillbox mButton padding bgColor1">
                    <v-img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png"
                        contain max-height="40"></v-img>
                    <p class="mt-3">Javascript</p>
                </div>
                <div class="skillbox mButton padding bgColor1">
                    <v-img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/800px-HTML5_Badge.svg.png"
                        contain max-height="40"></v-img>
                    <p class="mt-3">HTML</p>
                </div>
                <div class="skillbox mButton padding bgColor1">
                    <v-img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/2048px-CSS3_logo.svg.png"
                        contain max-height="40"></v-img>
                    <p class="mt-3">CSS</p>
                </div>
                <div class="skillbox mButton padding bgColor1">
                    <v-img 
                        src="https://cdn-icons-png.flaticon.com/256/226/226777.png" 
                        contain max-height="40"></v-img>
                    <p class="mt-3">Java</p>
                </div>
                <div class="skillbox mButton padding bgColor1">
                    <v-img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                        contain max-height="40"></v-img>
                    <p class="mt-3">ReactJS</p>
                </div>
                <div class="skillbox mButton padding bgColor1">
                    <v-img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png"
                        contain max-height="40"></v-img>
                    <p class="mt-3">VueJS</p>
                </div>
                <div class="skillbox mButton padding bgColor1">
                    <v-img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Kotlin_Icon.svg/2048px-Kotlin_Icon.svg.png"
                        contain max-height="40"></v-img>
                    <p class="mt-3">Kotlin</p>
                </div>
                <div class="skillbox mButton padding bgColor1">
                    <v-img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1667px-Figma-logo.svg.png"
                        contain max-height="40"></v-img>
                    <p class="mt-3">Figma</p>
                </div>
            </div>
        </div>
    </v-col>
</template>
  
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

.mButton {
    margin-bottom: 8px;
}

.padding {
    padding: 18px 0px;
}
</style>