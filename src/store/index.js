import Vue from 'vue';
import Vuex from 'vuex';
import footerStatus from './modules/footerStatus';
import collection from './modules/collection';
import top from './modules/top';
import list from './modules/list';
Vue.use(Vuex);

const state = {
    appVersion: -1,
}
const getters = { //getters实时监听state值的变化
    // showShare(state){
    //     return state.showShare;
    // }
}
const mutations = { //自定义改变state初始值的方法
    //跳转链接
    click_open(state,url){
        console.log(state)				
        if(state.appVersion<0){
            location.href = url;
        }else{
            bridge.pushWindow(null,null,url)
        }
    },
}
const actions = {
    clickOpen(context,url) {
        context.commit('click_open',url)
    }
}
const store = new Vuex.Store({
    state,
    mutations,
    actions,
    modules: {
        footerStatus,
        collection,
        top,
        list
    }
});
export default store;