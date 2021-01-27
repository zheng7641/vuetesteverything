import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;
import axios from 'axios';
import VueAxios from "vue-axios";
import Router from "./router";
Vue.use(VueAxios, axios);
Vue.use(ElementUI)

new Vue({
    router:Router,
    render: h => h(App),
}).$mount('#app');
