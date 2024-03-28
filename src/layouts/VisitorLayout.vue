<script setup lang="ts">
import { RouterView } from 'vue-router';
import AppBar from './components/AppBar.vue';
import LoginForm from '@/components/auth/LoginForm.vue'
</script>

<template>
    <v-app>
        <!-- App bar -->
        <AppBar></AppBar>

        <v-main> 
            <RouterView></RouterView>
        </v-main>
    </v-app>
</template>
