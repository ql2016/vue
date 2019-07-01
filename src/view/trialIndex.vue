<template>
    <div class="trial-center">
        <div class="box-list topic-list">
            <h3 class="red" v-text="recommendActivity.name"></h3>
            <ul>
                <li class="list clearfix" v-for="(item,index) in recommendActivity.list" :key="index">
                    <div class="list-pic">
                        <img :src="item.icon">
                    </div>
                    <div class="list-con">
                        <h3 class="overflow-two" v-text="item.name"></h3>
                        <p class="price"><em>￥</em>{{item.price}}</p>
                        <p><span class="beans"><em>￥</em>0</span> <span class="btn-apply">立即申请</span></p>
                    </div>
                </li>
            </ul>
        </div>
        <div class="topic-list">
            <h3 class="red" v-text="recommendReport.name"></h3>
            <list :data="recommendReport.list" type="recommendReport"></list>
        </div>
        <div class="topic-list">
            <h3 class="red">更多试用</h3>
            <list :data="moreActivity" type="activity"></list>
        </div>       
    </div>
</template>
<script>
//import VDistpicker from 'v-distpicker';
import {mapGetters,mapActions, mapState} from 'vuex';
import list from '@/components/list.vue';
export default {
    data() {
        return {
            recommendActivity: {},
            recommendReport: {},
        };
    },
    created() {
        console.log(this.$router)
        this.$store.dispatch('top/changeTitle','官方试用中心');
        this.getData();
    },
    computed: {
        ...mapState({
            moreActivity: state => state.list.activity
        })
        // ...mapGetters('list', {
        //     moreActivity: 'renderActivity'
        // })
    },
    watch: {
    },
    methods: {
        getData() {
            this.$http.get('static/index.json').then(function(res){
                let data = res.body;
                console.log(data)
                this.recommendActivity = data.trial_activity;
                this.recommendReport = data.trial_report;
                this.updateActivity(data.trial_activity_more);
                localStorage.setItem('activity',JSON.stringify(data.trial_activity_more));
            })
        },
        ...mapActions('list',[
            'updateActivity'
        ]),
    },
    components: {
        list
    },
};
</script>

