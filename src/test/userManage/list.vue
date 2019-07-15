<template>
    <div class="blogList">
        <!-- <top></top> -->
        <div class="tips">{{tips}}</div>
        <input type="text" v-model="search" placeholder="搜索">
        <table class="users-box">
            <thead>
                <tr>
                    <th>姓名</th>
                    <th>电话</th>
                    <th>邮箱</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(user,index) in filteredUser" :key="index">
                    <td>{{user.name}}</td>
                    <td>{{user.phone}}</td>
                    <td>{{user.email}}</td>
                    <td><router-link :to="'/user/'+ user.id">详情</router-link></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
//import top from './top';
export default {
    data() {
        return {
            users: [],
            search: '',
            tips: '',
        }
    },
    created() {
        if(this.$route.query.content){
            this.tips = this.$route.query.content;
        }
        this.getUsers();
    },
    
    computed: {
        filteredUser() {    
            return this.users.filter((user) => {    
                return user.name.match(this.search)
            })    
        }
    },
    filters: {
    },
    //自定义指令
    directives: {
    },
    methods: {
        getUsers() {
            this.$http.get('http://localhost:3000/users')
            .then(res=>{
                console.log(res)
                //this.users = res.body; //resource
                this.users = res.data; //axios
            })
        }
    },
    components: {
        //top
    }
}
</script>

<style scoped>
    .users-box {
        width: 90%;
        margin: 0.4rem 0.2rem;
        border: 0.02rem solid #ddd;
        border-collapse: collapse;
        color: #666;
    }
    .users-box tr {
        border-bottom: 0.02rem solid #ddd;
    }
    .single-blog article {
        color: #222;
    }
    .single-blog article,
    .single-blog .type {
        margin: 0.2rem 0;
    }
    .single-blog .type span {
        float: left;
    }
    .single-blog .type ul {
        display: flex;
    }
    .single-blog .type ul li{
        margin: 0 0.2rem 0 0;
    }
</style>

