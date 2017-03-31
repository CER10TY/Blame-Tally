import vue from "vue"
import VueRouter from "vue-router"

import Tallies from "../src/pages/tally_view.vue"

vue.use(VueRouter);

const routes = [
    {path: "/", component: Tallies, name: "Tallies"}
];

const router = new VueRouter({
        routes
    });

export default router