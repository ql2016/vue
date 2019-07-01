<template>
    <div class="topic-list">
        <h3 class="red">报告列表</h3>
        <list :data="activityList" type="reportList"></list>
    </div>
</template>
<script>
import list from '@/components/list.vue';
import {mapState,mapGetters,mapActions} from 'vuex';
export default {
    data() {
        return {
        }
    },
    created() {
        this.$store.dispatch("top/changeTitle",'报告列表');
        this.getData();
    },
    computed: {
        ...mapGetters('list',{
            activityList: 'renderReport'
        })    
    },
    mounted() {
    },
    methods: {
        getData() {
            this.$http.get('static/report.json').then(function(res){
                let data = res.body;
                this.updateReport(data);
                localStorage.setItem('report',JSON.stringify(data));
            })
        },
        ...mapActions('list',['updateReport'])
    },
    components: {
        list
    }
}
</script>

