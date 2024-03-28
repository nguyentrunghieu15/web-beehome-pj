import { createMemoryHistory, createRouter, type RouteRecord, type RouteRecordRaw } from 'vue-router'

import DefaultLayout from '@/layouts/DefaultLayout.vue'
import VisitorLayout from '@/layouts/VisitorLayout.vue'

const routes : Readonly<RouteRecordRaw[]> = [
  { path: '/', component: VisitorLayout },
]

export default createRouter({
    history: createMemoryHistory(),
    routes
})
