<template>
    <ul>
        <li class="list" v-for="(item, index) in data" :key="index">
            <div class="list-user" v-if="type==='reportList'">
                <div class="user-face">
                    <img :src="item.user.facePicUrl">
                </div>
                <p class="user-name">
                    <span v-text="item.user.nickname"></span> <!---->
                </p>
            </div>
            <div @click="clickOpen">
                <h3 class="overflow-one" v-text="item.name"></h3>
                <p class="overflow-two" v-text="item.content"></p>
                <div class="list-img clearfix">
                    <div v-if="type!=='activity'"><img :src="img.url" v-for="(img,index) in item.pictures.slice(0,3)" :key="index"></div>
                    <div v-else><img :src="img.url" v-for="(img,index) in item.pictures.slice(1,4)" :key="index"></div>
                </div>
                <div class="list-time clearfix" v-if="type==='activity'">
                    <span v-text="item.createTime"></span>
                </div>
                <div class="list-time clearfix" v-else>
                    <span v-if="type==='recommendReport'">
                        {{item.user_nickname}}
                        <em v-if="!item.expert_name">{{item.expert_name}}</em>
                    </span>
                    <span v-else>
                        {{item.createTime}}
                    </span>
                    <span class="fr">
                        <em class="icon-5"></em>{{item.pageviewText}}
                    </span>
                    <span class="fr">
                        <em class="icon-4"></em>{{item.replynumText}}
                    </span>
                    <span class="fr">
                        <em class="icon-flow"></em>{{item.praisenumText}}
                    </span>
                </div>
            </div>
        </li>
    </ul>
</template>
<script>
import {mapState,mapGetters,mapActions} from 'vuex';
export default {
    props:['data','type'],
    data() {
        return {

        }
    },
    created() {
        console.log(this.$store)
    },
    methods: {
        ...mapActions([
            'clickOpen'
        ])
    }
}
</script>
