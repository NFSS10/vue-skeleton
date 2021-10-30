import { createRouter, createWebHistory } from "vue-router";
import { About, Home, NotFound } from "../components/pages";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/about",
        name: "About",
        component: About
    },
    {
        path: "/:catchAll(.*)",
        name: "NotFound",
        component: NotFound
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
