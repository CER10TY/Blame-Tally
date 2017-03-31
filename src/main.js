import Vue from "vue"
import VueRes from "vue-resource"

import app from "./app.vue"
import router from "../routers/vue-router.js"

Vue.use(VueRes);
Vue.component("app",app);

new Vue({
    router
}).$mount("#app")