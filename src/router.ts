import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import("./pages/home/home.vue")
    },
    {
        path: "/about",
        name: "About",
        component: () => import("./pages/about/about.vue")
    },
    {
        path: "/:catchAll(.*)",
        name: "NotFound",
        component: () => import("./pages/not-found/not-found.vue")
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes
});

export default router;
