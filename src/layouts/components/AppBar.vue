<template>
    <v-app-bar :elevation="2">
        <template v-slot:prepend>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template>
        <v-app-bar-title>Bee Home</v-app-bar-title>
        <template v-slot:append>
            <div class="action-item">
                <v-text-field
                    append-inner-icon="mdi-magnify"
                    density="compact"
                    label="Type your demand service"
                    variant="solo"
                    hide-details
                    single-line
                    :clearable="true"
                    rounded
                ></v-text-field>
            </div>
            <v-avatar>
                <v-img alt="John" src="https://cdn.vuetifyjs.com/images/john.jpg"></v-img>
            </v-avatar>
        </template>
    </v-app-bar>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.action-item {
    min-width: 22rem;
    padding-right: 2rem;
}

</style>
