const state = {
    collects: [],
};
const getters = {
    renderCollects(state) {
        return state.collects;
    }
};
const mutations = {
    pushCollects(state,items) {
        state.collects.push(items);
    }
};
const actions = {
    invokePushItems(context,item) {
        context.commit('pushCollects',item);
    }
}
export default {
    namespaced: true, //用于在全局引用此文件里的方法时标识这一个的文件名
    state,
    getters,
    mutations,
    actions
}