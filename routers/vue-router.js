import vue from "vue"
import VueRouter from "vue-router"

import Dashboard from "../src/pages/dashboard.vue"

vue.use(VueRouter);

const routes = [
    {path: '/', component: Dashboard, name: "Dashboard"}
];

const router = new VueRouter({
        routes
    });

export default router