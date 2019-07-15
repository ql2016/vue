<template>
    <div class="detail">
        <div class="operate">
            <router-link to="/users" class="back">返回</router-link>
            <span class="fr">
                <router-link :to="'/editUser/' + id" class="edit">编辑</router-link>
                <button class="del" @click="delUser">删除</button>
            </span>
        </div>
        <div class="content">
            <h3>{{user.name}}</h3>
            <p>电话：{{user.phone}}</p>
            <p>邮箱：{{user.email}}</p>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            id: this.$route.params.id,
            user: {}
        }
    },
    created() {
        this.$http.get('http://localhost:3000/users/' + this.id)
        .then(res=>{
            //this.user = res.body; //resource
            this.user = res.data; //axios
        })
    },
    methods: {
        delUser(){
            this.$http.delete('http://localhost:3000/users/' + this.id)
            .then(res=>{
                this.$router.push({path:'/users'})
            })
        }
    }
}
</script>
<style scoped>
    .detail .content {
        background: #eee;
        margin: 0.4rem 0.2rem;
        padding: 0.2rem;
        border: 0.02rem solid #ddd;
        color: #666;
    }
    .detail .content h3{
        color: #000;
    }
    .detail .operate {
        padding: 0 0.2rem;
    }
    .detail .operate .back,
    .detail .operate .edit,
    .detail .operate .del {
        background: #fff;
        border: 0.02rem solid #ddd;
        padding: 0.05rem 0.1rem;
        font-size: 0.24rem;
        color: #000;
        border-radius: 0.03rem;
    }
    .detail .content article {
        color: #222;
    }
    .detail .content article,
    .detail .content .type {
        margin: 0.2rem 0;
    }
    .detail .content .type span {
        float: left;
    }
    .detail .content .type ul {
        display: flex;
    }
    .detail .content .type ul li{
        margin: 0 0.2rem 0 0;
    }
</style>


