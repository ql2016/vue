<template>
    <div class="addUser">
        <!-- <top></top> -->
        <h3>添加用户信息</h3>
        <form>
            <div class="row">
                <label for="">姓名：</label>
                <input type="text" class="text" v-model="user.name">
            </div>
            <div class="row">
                <label for="">电话：</label>
                <input type="text" class="text" v-model="user.phone">
            </div>
            <div class="row">
                <label for="">邮箱：</label>
                <input type="text" class="text" v-model="user.email">
            </div>
            <button v-if="isAdd" @click.prevent="addUser">添加</button>
            <button v-else @click.prevent="editUser">编辑</button>
        </form>
    </div>
</template>
<script>
//import top from './top';
export default {
    data() {
        return {
            user: {
                name: '',
                phone: '',
                email: '',
            },
            isAdd: true
        }
    },
    created() {
        if(this.$route.params.id){
            this.getBlog();
            this.isAdd = false;
        }else {
            this.user = {};
        }    
    },
    watch: {
        $route(to,from){
            if(to.name=='addUser'){
                this.user = {};
                this.isAdd = true;
            }
        }
    },
    methods: {
        getBlog() {
            this.$http.get('http://localhost:3000/users/' + this.$route.params.id)
            .then(res=>{    
                //this.user = res.body; //resource
                this.user = res.data; //axios
            })
        },
        addUser() {
            console.log(!this.user.name || !this.user.phone || !this.user.email)
            if(!this.user.name || !this.user.phone || !this.user.email){
                return;
            }else {     
                this.$http.post('http://localhost:3000/users/',this.user)
                .then(res=>{
                    this.$router.push({ path:'/users',query:{content:'用户添加成功！'}})
                })
            }
            
        },
        editUser() {
            this.$http.put('http://localhost:3000/users/' + this.$route.params.id,this.user)
            .then(res=>{
                this.$router.push({ path:'/users',query:{content:'用户编辑成功！'}})
            })
        }
    },
    components: {
        //top
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

