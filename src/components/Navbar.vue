<template>
    <v-app-bar app color="#111111" dark flat class="px-8">
        <v-btn icon>
            <v-icon color="#26532B">fas fa-dragon</v-icon>
        </v-btn>
            <v-spacer></v-spacer>
            <v-btn text @click="scroll('home')">Home</v-btn>
            <v-btn text @click="scroll('about')">Sobre mí</v-btn>
            <v-btn text @click="scroll('projects')">Proyectos</v-btn>
            <v-btn text @click="scroll('contact')">Contacto</v-btn>
    </v-app-bar>
</template>

<script>
export default {
    methods: {
        scroll(refName) {
            const element = document.getElementById(refName);
            element.scrollIntoView({behavior: 'smooth'});
        }
    }
}
</script>

<style>

</style>