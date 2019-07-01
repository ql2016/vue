<template>
   <div class="topic-list">
      <h3 class="red">活动列表</h3>
      <list :data="activityList" type="activity"></list>
   </div>
</template>
<script>
import list from '@/components/list.vue';
import {mapGetters,mapActions} from 'vuex';

export default {
    data(){
        return {
            list: [],
        }
    },
    created() {
        this.$store.dispatch("top/changeTitle",'活动列表');
        if(!this.$store.state.list.activity.length){    
            let storage = JSON.parse(localStorage.getItem('activity'));
            if(!storage){
                this.getData();
            }
        }
    },
    computed: {
        activityList() {
            if(!this.$store.state.list.activity.length){    
                let storage = JSON.parse(localStorage.getItem('activity'));
                if(storage){
                    return storage;
                }else {
                    return this.list;
                }
            }else {
                return this.$store.state.list.activity;
            }
        },
        // ...mapGetters('list', {
        //     activityList: 'renderActivity'
        // })
    },
    methods: {
        getData() {
            this.$http.get('static/index.json').then(function(res){
                let data = res.body;
                this.list = data.trial_activity_more;
                localStorage.setItem('activity',JSON.stringify(data.trial_activity_more));
            })
        },
    },
    components: {
        list
    }
};
</script>

