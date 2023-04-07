import MainPage from "@/pages/MainPage/MainPage.vue";
import {createRouter, createWebHistory} from "vue-router";
import LoginPage from "@/pages/LoginPage/LoginPage.vue";
import RegisterPage from "@/pages/RegisterPage/RegisterPage.vue";

const routes = [
    {
        path: '/', component: MainPage
    },
    {
        path: '/login', component: LoginPage
    },
    {
        path: '/register', component: RegisterPage
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;