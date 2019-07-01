<template>
    <div class="blogList">
        <top></top>
        <div class="tips">{{tips}}</div>
        <h2>博客总览</h2>
        <input type="text" v-model="search" placeholder="搜索">
        <div class="single-blog" v-for="(blog,index) in filteredBlog" :key="index">
            <router-link :to="'/blog/'+ blog.id">
                <h3 v-rainbow>{{blog.title|toUppercase}}</h3>
                <article>{{blog.body}}</article>
            </router-link>
        </div>
    </div>
</template>
<script>
import top from './top';
export default {
    data() {
        return {
            blogs: [],
            search: '',
            tips: '',
        }
    },
    created() {
        //console.log(this.$route.params.id)
        if(this.$route.query.content){
            this.tips = this.$route.query.content;
        }
        
        //console.log(2,this.tips)
        this.getBlog();
    },
    computed: {
        filteredBlog() {    
            return this.blogs.filter((blog) => {    
                return blog.title.match(this.search)
            })    
        }
    },
    filters: {
        toUppercase(vale){
            return vale.toUpperCase();
        }
    },
    //自定义指令
    directives: {
        'rainbow': {
            bind(el,binding,vnode){
                el.style.color = '#' + Math.random().toString(16).slice(2,8);
            }
        }
    },
    methods: {
        getBlog() {
            this.$http.get('http://jsonplaceholder.typicode.com/posts')
            .then(res=>{
                this.blogs = res.body.slice(0,10);
            })
        }
    },
    components: {
        top
    }
}
</script>

<style scoped>
    .single-blog {
        background: #eee;
        margin: 0.4rem 0.2rem;
        padding: 0.2rem;
        border: 0.02rem solid #ddd;
    }
</style>

