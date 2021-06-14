import Pages from "./pages";

export const install = Vue => {
    Vue.use(Pages);
};

export * from "./pages";

export default install;
