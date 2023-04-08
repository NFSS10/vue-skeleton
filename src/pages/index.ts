import About from "./about/about.vue";
import Home from "./home/home.vue";
import NotFound from "./not-found/not-found.vue";

const install = (Vue: any) => {
    Vue.component("about", About);
    Vue.component("home", Home);
    Vue.component("not-found", NotFound);
};

export { About, Home, NotFound };

export default install;
