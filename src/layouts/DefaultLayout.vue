<script setup lang="ts">
import AppBar from './components/AppBar.vue'
import NaviDrawer from './components/NaviDrawer.vue'
import BottomNavi from './components/BottomNavi.vue'
import { RouterView } from 'vue-router'
</script>
<template>
    <v-app>
        <!-- App bar -->
        <AppBar></AppBar>

        <!-- Navigation Drawer -->
        <NaviDrawer></NaviDrawer>

        <v-main class="container">
            <slot>
                <RouterView></RouterView>
            </slot>
        </v-main>
    </v-app>
</template>
