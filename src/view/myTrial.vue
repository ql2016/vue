<template>
    <div class="topic-list">
        <h3 class="red">我的报告</h3>
        <list :data="myReport"></list>
    </div>
</template>
<script>
import list from '@/components/list.vue';
import {mapState,mapGetters,mapActions} from 'vuex';
export default {
    data(){
        return {
            myReport: [],
            r: null
        }
    },
    created() {    
        this.$store.dispatch("top/changeTitle",'我的试用');
        if(!this.myReport.length){
            let storage = localStorage.getItem('report');
            if(storage){
                this.filterReport();
            }else {
                this.getData();
                let self = this;
                setTimeout(function(){
                    self.filterReport();
                },100)  
            }
        }else {
            this.filterReport();
        }
    },
    computed: {   
        report() {
            if(!this.myReport.length){
                let storage = JSON.parse(localStorage.getItem('report'));
                if(storage){
                    return storage;
                }
                else {
                    return this.r
                }
            }else {
                return this.$store.state.list.report;
            } 
        },
        // ...mapGetters('list',{
        //     report: 'renderReport'
        // }),       
    },
    watch: {
        // r(val,oldVal) {
        //     console.log(34353)
        //     this.r = val;
        //     console.log(this.r)
        // }
    },
    methods: {
        ...mapActions('top',{
            share: 'hideShare'
        }),
        getData() {
            let self = this;
            this.$http.get('static/report.json').then(function(res){
                let data = res.body;
                this.r = data;
                localStorage.setItem('report',JSON.stringify(data));
            })
        },
        filterReport() {
            this.myReport = this.report.filter(function(item){
                return item.user.userId == '72095874239'
            });
        }
    },
    components: {
        list
    }
}
</script>

