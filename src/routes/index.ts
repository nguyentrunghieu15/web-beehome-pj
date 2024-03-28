import { createMemoryHistory, createRouter, type RouteRecord, type RouteRecordRaw } from 'vue-router'

import DefaultLayout from '@/layouts/DefaultLayout.vue'
import VisitorLayout from '@/layouts/VisitorLayout.vue'
import LoginPage from '@/views/auth/LoginPage.vue'

const routes : Readonly<RouteRecordRaw[]> = [
  { path: '/', component: LoginPage },
]

export default createRouter({
    history: createMemoryHistory(),
    routes
})
