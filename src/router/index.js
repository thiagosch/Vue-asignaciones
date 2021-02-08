import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Asignaciones from '../views/Asignaciones.vue'
import NotFound from '../views/NotFound.vue'
const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/Login',
        name: 'Login',

        component: Login
    },
    {
        path: '/Asignaciones',
        name: 'Asignaciones',

        component: Asignaciones,
    },
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: NotFound
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router