// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
//import VResource from 'vue-resource';
import axios from 'axios';
import App from './App';
import store from './store';
import vueRouter from 'vue-router';
import routers from './router';
import './css/public.scss';
import './css/index.scss';

//Vue.use(VResource);
//Vue.config.productionTip = false;
Vue.prototype.$http = axios;
Vue.use(vueRouter);
const router = new vueRouter({
    hashbang: false,
    routes: routers,
    mode: 'history',
    scrollBehavior (to,from,savedPosition) {
        //return {x:0, y:500}   
        //return {selector: '.users'}
        if(savedPosition){
            return savedPosition;
        }else {
            return {x:0, y:0}
        }
    }
})
//console.log(router)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    components: { App },
    template: '<App/>',
});
