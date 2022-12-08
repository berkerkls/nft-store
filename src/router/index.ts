import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import LoginPage from "../components/LoginPage.vue"
import HomeView from "../routes/HomeView.vue"
import SignupPage from "../components/SignupPage.vue"


const routes: Array<RouteRecordRaw> = [
    {
        path: "/home",
        name: "HomeView",
        component: HomeView,
    },
    {
        path: "/login",
        name: "LoginPage",
        component: LoginPage

    },
    {
        path: '/signup',
        name: 'SignupPage',
        component: SignupPage
    }

]


const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router