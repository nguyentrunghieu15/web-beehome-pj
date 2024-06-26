import {
    createMemoryHistory,
    createRouter,
    createWebHashHistory,
    createWebHistory,
    type RouteRecord,
    type RouteRecordRaw
} from 'vue-router'

import DefaultLayout from '@/layouts/DefaultLayout.vue'
import VisitorLayout from '@/layouts/VisitorLayout.vue'
import LoginPage from '@/views/auth/LoginPage.vue'
import SignUpPage from '@/views/auth/SignUpPage.vue'
import Page404 from '@/views/error/Page404.vue'

const routes = [
    { path: '/', component: VisitorLayout},
    { path: '/login', component: LoginPage },
    { path: '/signup', component: SignUpPage },
    { path: '/404', component: Page404 }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router
