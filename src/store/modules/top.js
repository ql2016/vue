const state = {
    title: '',
    share: true
}
const getters = {
    isShare(state){
        return state.share;
    }
}
const mutations = {
    changeTitle(state,text){
        return state.title = text
    },
    showShare(state){
        state.share = true;
    },
    hideShare(state){
        state.share = false;
    } 
}
const actions = {
    changeTitle(context,text){
        context.commit('changeTitle',text)
    },
    showShare(context){
        context.commit('showShare')
    },
    hideShare(context){
        context.commit('hideShare')
    }
}
export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}