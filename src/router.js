import Vue from 'vue'
import Router from 'vue-router';
import Globle from "./pages/globle"

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'globle',
            component: Globle
        }
    ]
})