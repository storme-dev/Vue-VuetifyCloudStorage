import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'
import Cloud from '../views/Cloud.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Cloud',
        component: Cloud
    },
    {
        path: '/cloud',
        name: 'Cloud',
        component: Cloud
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
