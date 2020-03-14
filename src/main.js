import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;
import axios from 'axios';
import VueAxios from "vue-axios";
import Router from "./router";

Vue.use(VueAxios, axios);

new Vue({
    router:Router,
    render: h => h(App),
}).$mount('#app');
