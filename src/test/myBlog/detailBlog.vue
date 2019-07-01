<template>
    <div class="detail">
        <div class="operate">
            <router-link to="/myBlog" class="back">返回</router-link>
            <span class="fr">
                <router-link :to="'/edit/' + id" class="edit">编辑</router-link>
                <button class="del">删除</button>
            </span>
        </div>
        <div class="content">
            <h3>{{blog.title}}</h3>
            <article>{{blog.content}}</article>
            <p>作者：{{blog.author}}</p>
            <ul>
                <li v-for="(type,index) in blog.types" :key="index">{{type}}</li>
            </ul>
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
        this.$http.get('https://myblog-17bc3.firebaseio.com/posts/' + this.id + '.json')
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


