<script setup lang="ts">
import AppBar from './components/AppBar.vue'
import NaviDrawer from './components/NaviDrawer.vue'
import { RouterView } from 'vue-router'
</script>
<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <AppBar></AppBar>
            </el-header>
            <el-divider style="margin: 0;" />
            <el-container>
                <el-aside width="300px">
                    <el-scrollbar>
                        <NaviDrawer></NaviDrawer>
                    </el-scrollbar>
                </el-aside>
                <el-main>
                    <slot>
                        <RouterView :key="$route.fullPath"/>
                    </slot>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<style scoped lang="scss">
header {
    display: flex;
}

aside {
    min-height: calc(100vh - 60px);
}
</style>
