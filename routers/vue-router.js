import Vue from "vue"
import VueRouter from "vue-router"

import TallyView from "../src/pages/starter.vue"
import About from "../src/pages/about.vue"

Vue.use(VueRouter);

const routes = [
    {path: "/", component: TallyView, name: "TallyView"},
    {path: "/about", component: About, name: "About"}
];

const router = new VueRouter({
        routes
    });

export default router