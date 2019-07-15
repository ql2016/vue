<template>
    <div class="addBlog">
        <top></top>
        <h3>写博客</h3>
        <form v-if="!submitted">
            <div class="row">
                <label for="">博客标题：</label>
                <input type="text" class="text" v-model="blog.title">
            </div>
            <div class="row">
                <label for="">博客内容：</label>
                <textarea name="" id="" cols="" rows="" class="textarea" v-model="blog.content"></textarea>
            </div>
            <div class="row">
                <label for="">博客类型：</label>
                <span class="checkbox" v-for="(category,index) in categories" :key="index"><input type="checkbox" :value="category" v-model="types">{{category}}</span>
                {{types}}
            </div>
            <div class="row">
                <label for="">作者：</label>
                <select v-model="blog.author"><option v-for="(author,index) in authors" :key="index" :value="author">{{author}}</option></select>
            </div>
            <button v-if="isAdd" @click.prevent="addBlog">添加博客</button>
            <button v-else @click.prevent="editBlog">编辑博客</button>
        </form>
        <div v-if="submitted">
            <h3>您的博客发布成功！</h3>
        </div>
        <br>
        <hr>
        <br>
        <h3>预览</h3>
        <div class="preview">
            <div class="row"><strong>博客标题：</strong><p>{{blog.title}}</p></div>
            <div class="row"><strong>博客内容：</strong><p>{{blog.content}}</p></div>
            <div class="row"><strong>博客类型：</strong><div class="type"><a v-for="(type,index) in types" :key="index">{{type}}</a></div></div>
            <div class="row"><strong>作者：</strong><p>{{blog.author}}</p></div>
        </div>
    </div>
</template>
<script>
import top from './top';
export default {
    data() {
        return {
            blog: {
                title: '',
                content: '',
                author: '',
            },
            types: [],
            submitted: false,
            categories: ['vue.js','react.js','node.js'],
            authors: ['herry','marry','lili'],
            isAdd: true
        }
    },
    created() {
        if(this.$route.params.id){
            this.getBlog();
            this.isAdd = false;
        }else {
            this.blog = {};
        }    
    },
    watch: {
        $route(to,from){
            if(to.name=='addBlog'){
                this.blog = {};
                this.types = [];
                this.isAdd = true;
            }
        }
    },
    methods: {
        getBlog() {
            this.$http.get('https://myblog-17bc3.firebaseio.com/posts/' + this.$route.params.id + '.json')
            .then(res=>{    
                this.blog = res.body;
                this.types = this.blog.types || [];
            })
        },
        addBlog() {
            this.blog.types = this.types;
            this.$http.post('https://myblog-17bc3.firebaseio.com/posts.json',this.blog)
            .then(res=>{
                this.$router.push({ path:'/myBlog',query:{content:'博客发布成功！'}})
            })
        },
        editBlog() {
            this.blog.types = this.types;
            this.$http.put('https://myblog-17bc3.firebaseio.com/posts/' + this.$route.params.id + '.json',this.blog)
            .then(res=>{
                this.$router.push({ path:'/myBlog',query:{content:'博客发布成功！'}})
            })
        }
    },
    components: {
        top
    }
}
</script>

<style scoped>
    .addBlog {
        text-align: left;
        padding: 0.4rem;
    }
    /* .addBlog .row {
        margin: 0 0 0.1rem 0.5rem;
    } */
    .addBlog .row label {
        display: block;
        margin: 0.4rem 0 0.2rem;
        font-weight: 500;
        /* float: left;
        width: 1.8rem;
        text-align: right; */
    }
    .addBlog .row .text {
        width: 5rem;
        height: 0.5rem;
    }
    .addBlog .row .textarea {
        width: 5rem;
        height: 1rem;
    }
    .addBlog .row .checkbox {
        margin: 0 0.2rem 0 0;
    }
    .addBlog .row input[type="checkbox"] {
        vertical-align: middle
    }
    button {
        margin: 0.4rem 0 0.2rem;
    }
    .preview {
        margin: 0.4rem 0;
        padding: 0 0.2rem;
        border: 0.02rem solid #ddd;
    }
    .preview .type a {
        margin: 0 0.2rem 0 0;
    }
    .preview p {
        line-height: 0.5rem;
    }
</style>

