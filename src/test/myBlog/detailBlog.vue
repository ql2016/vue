<template>
    <div class="detail">
        <div class="operate">
            <router-link to="/myBlog" class="back">返回</router-link>
            <span class="fr">
                <router-link :to="'/addBlog/'" class="edit">编辑</router-link>
                <button class="del">删除</button>
            </span>
        </div>
        <div class="content">
            <h3>{{blog.title}}</h3>
            <article>{{blog.body}}</article>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            id: this.$route.params.id,
            blog: {}
        }
    },
    created() {
        console.log(this.$route)
        this.$http.get('http://jsonplaceholder.typicode.com/posts/' + this.id)
        .then(res=>{
            this.blog = res.body;
        })
    }
}
</script>
<style scoped>
    .detail .content {
        background: #eee;
        margin: 0.4rem 0.2rem;
        padding: 0.2rem;
        border: 0.02rem solid #ddd;
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
</style>


