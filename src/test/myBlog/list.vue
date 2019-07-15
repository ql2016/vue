<template>
    <div class="blogList">
        <top></top>
        <div class="tips">{{tips}}</div>
        <h2>博客总览</h2>
        <input type="text" v-model="search" placeholder="搜索">
        <div class="single-blog" v-for="(blog,index) in filteredBlog" :key="index">
            <router-link :to="'/blog/'+ blog.id">
                <h3 v-rainbow>{{blog.title|toUppercase}}</h3>
                <article>{{blog.content}}</article>
                <p>作者：{{blog.author}}</p>
                <div class="type">
                    <span>分类：</span>
                    <ul>
                        <li v-for="(type,index) in blog.types" :key="index">{{type}}</li>
                    </ul>
                </div>
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
        if(this.$route.query.content){
            this.tips = this.$route.query.content;
        }
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
            this.$http.get('https://myblog-17bc3.firebaseio.com/posts.json')
            .then(res=>{
                console.log(res)
                var data = res.body;
                for(var key in data) {
                    data[key].id = key;
                    this.blogs.push(data[key])
                }
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
    .single-blog a {
        color: #666;
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

