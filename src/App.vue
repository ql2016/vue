<template>
  <div id="app">
    <div class="header">
        <div class="header-cont">
            <div class="header-back">返回</div>
            <div class="header-title" v-text="title"></div>
            <div class="header-share" v-if="share">分享</div>
        </div>
    </div>
    <foot v-if="isShow"></foot>
    <router-view /> 
    <br>
    <div class="routerNest">
        <router-view name='login'>登录</router-view>
        <router-view name='register'>注册</router-view>
    </div>
  </div>
</template>

<script>
import {mapState,mapGetters,mapActions} from 'vuex';
//import top from '@/components/top.vue';
import foot from '@/components/foot.vue';
export default {
    //name: 'App',
    data() {
        return {
            
        };
    },
    mounted() {
    },
    computed: {
        ...mapState({
            isShow: state=>state.footerStatus.showFooter,//footerStatus.js里state的showFooter
            title: state=>state.top.title,
            share: state=>state.top.share,
        }),
        //...mapGetters('top',{share: 'isShare'}),
        ...mapActions([
            //title: state=>state.top.title
        ]),
    },
    watch: {
        $route(to,from){
            if(to.name!=='myTrial'){
                this.$store.dispatch('top/showShare')
            }
        }
    },
    methods: {
    },
    components: {
        //top,
        foot,
    },
};

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  font-size: 0.28rem;
}
</style>
