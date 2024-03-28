<template>
    <!-- If is leaf -->
    <v-list-item prepend-icon="mdi-home" title="Home"></v-list-item>

    <!-- If not -->
    <v-list-group value="Users">
        <template v-slot:activator="{ props }">
            <v-list-item
                v-bind="props"
                prepend-icon="mdi-account-circle"
                title="Users"
            ></v-list-item>
        </template>
        <NaviDrawerItem></NaviDrawerItem>
    </v-list-group>
</template>
