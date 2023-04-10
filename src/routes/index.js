import { createRouter, createWebHistory } from 'vue-router'

import CreateProfile from '/src/views/CreateProfile.vue'

const routes = [
    { path: '/create-profile', name: 'create-profile', component: CreateProfile }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes,
})

export default router
