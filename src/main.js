import Vue from "vue"
import VueRes from "vue-resource"

import router from "../routers/vue-router.js"
import footerNav from "../src/components/footer.vue"
import navbar from "../src/components/navbar.vue"

Vue.use(VueRes);
Vue.component('footernav', footerNav);
Vue.component('navbar', navbar);

new Vue({
    router
}).$mount("#app")