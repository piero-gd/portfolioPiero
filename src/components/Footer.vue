<template>
    <v-footer dark padless>
        <v-card flat tile class="black white--text py-5 px-5 text-center" width="100%">
            <v-row>
                <v-col cols="12" sm="4">
                    <v-card-text class="white--text pt-2">
                        <v-btn icon>
                            <v-icon color="#26532B">fas fa-dragon</v-icon>
                        </v-btn>
                    </v-card-text>
                </v-col>
                <v-col cols="12" sm="4">
                    <v-card-text class="pt-2">
                        <v-btn v-for="icon in icons" :key="icon" :href="getIconLink(icon)" target="_blank" class="mx-1 white--text" icon>
                            <v-icon size="24px">{{ icon }}</v-icon>
                        </v-btn>
                    </v-card-text>
                </v-col>
                <v-col cols="12" sm="4">
                    <v-card-text class="pt-3">
                        Created by Pierex99
                    </v-card-text>
                </v-col>
            </v-row>
        </v-card>
    </v-footer>
</template>

<script>
export default {
    data: () => ({
        icons: [
            "mdi-linkedin", "mdi-github"
        ]
    }),
    methods: {
        getIconLink(icon) {
            switch (icon) {
                case "mdi-linkedin":
                    return "https://www.linkedin.com/in/pierogallo/";
                case "mdi-github":
                    return "https://github.com/Pierex99/";
                default:
                    return "#"; // Enlace predeterminado
            }
        }
    }
}
</script>

<style></style>