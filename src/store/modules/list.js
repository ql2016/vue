export default  {
    namespaced: true,
    state: {
        activity: [],
        report: [],
    },
    getters: {
        renderActivity(state) {
            return state.activity
        },
        renderReport(state) {
            return state.report;
        }
    },
    mutations: {
        activityList(state,list) {
            state.activity = list;
        },
        reportList(state,list) {
            state.report = list;
        }
    },
    actions: {
        updateActivity(context,list) {
            context.commit('activityList',list)
        },
        updateReport(context,list) {
            context.commit('reportList',list)
        },
    }
}