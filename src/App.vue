<template>
    <v-app>
 
        <v-navigation-drawer app>

            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="title">
                        Karp Drive
                    </v-list-item-title>
                    <v-list-item-subtitle>
                        Бесплатное хранилище
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list
                dense
                nav
            >
                <v-list-item
                    link
                >
                    <v-list-item-icon>
                    <v-icon>mdi-home</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                    <v-list-item-title>Главная</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item
                    link
                >
                    <v-list-item-icon>
                    <v-icon>mdi-cloud</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                    <v-list-item-title>Моё хранилище</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>

        </v-navigation-drawer>
        
        <v-system-bar
            app
            window
        >
            Karp Drive
            <v-spacer></v-spacer>
            <v-icon class="maximize-app">mdi-minus</v-icon>
            <v-icon
                class="maximize-app"
            >mdi-checkbox-blank-outline</v-icon>
            <v-icon
                class="close-app"
            >mdi-close</v-icon>
        </v-system-bar>

        <!-- Sizes your content based upon application components -->
        <v-main>

        <!-- Provides the application the proper gutter -->
        <v-container fluid style="height: 100%;">

            <!-- If using vue-router -->
            <router-view></router-view>
        </v-container>
        </v-main>

        <v-footer app>
        <!-- -->
        </v-footer>
    </v-app>
</template>

<script>

export default {
    name: "App",

    components: {
    },

    data: () => ({}),
};
</script>

<style scoped>

.close-app:hover {
    background: #d72f17;
    border-radius: 3px;
    cursor: pointer;
}

.maximize-app:hover {
    background: #ccc;
    border-radius: 3px;
    cursor: pointer;
}

</style>
