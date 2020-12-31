<template>
    <div class="test">  
        <div>
            阻止a标签跳转链接，prevent修饰符：<a @click.prevent :href="link">wrwr</a>
        </div>
        <div>
            <p>model获取input值：<input type="text" v-model="modelInput">{{modelInput}}</p>
            <p>ref获取input值：<input type="text" ref="input" @input="getValue">{{refInput}}</p>
        </div>
        <div>
            ref获取p段落的值：<p ref="p">ref</p>
        </div>  
        <div>
            <p><button @click="a++">Add to a</button>a:{{a}} a+age:{{addA}}</p>
            <p><button @click="b++">Add to B</button>b:{{b}} b+age:{{addB}}</p>
        </div>
        <div @click="color = !color" :class="{changeColor: color}">
            动态改变class颜色：<span>changeColor</span>
        </div>
        <div @click="changeColor = !changeColor, changeLength = !changeLength" :class="compClass">
            动态同时改变class颜色和长度：<span>change</span>
        </div>
        <div class="users">
            <ul>
                <li v-for="(user,index) in users" :key="index">
                    <h4>{{user.username}}</h4>
                    <p>{{user.email}}</p>
                </li>
            </ul>
        </div>
        <div class="p">
            <button @click="goto">路由跳转</button>
        </div>
        <div class="routerNest">
            <h4>路由嵌套</h4>
            <router-link tag="li" :to="{name:'address'}">地址</router-link>
            <router-link tag="li" :to="{name:'uploader'}">上传图片</router-link>
            <router-link tag="li" :to="{name:'login'}">登录</router-link>
            <router-link tag="li" :to="{name:'register'}">注册</router-link>
        </div>
        <router-view />  
    </div>
    
</template>

<script>
export default {
    props: [],
    data() {
        return {
            link: 'http://www.baidu.com',
            modelInput: '',
            refInput: '',
            a: 0,
            b: 0,
            age: 20,
            color: false,
            changeColor: false,
            changeLength: false,
            users: []
        };
    },
    created() {
        this.getUsers();
        //全局前置守卫
        // this.$router.beforeEach((to,from,next) => {
        //     if(to.path == '/login' || to.path == '/register'){
        //         next();
        //     }else {
        //         alert('请先登录');
        //         next('/login');
        //     }   
        // })
        //后置钩子
        // this.$router.afterEach((to,from) => {
        //     alert('后置钩子');  
        // })
    },
    mounted() {
        console.log(this.$refs.p,this.$refs.input.value)
    },
    watch: {
    },
    computed: {
        addA(){
            console.log('Add to a');
            return this.a + this.age;
        },
        addB(){
            console.log('Add to b');
            return this.b + this.age;
        },
        compClass(){
            return {
                changeColor: this.changeColor,
                changeLength: this.changeLength
            }
        }
    },
    methods: {
        getValue(){
            this.refInput = this.$refs.input.value;
        },
        getUsers() {
            this.$http.get('http://jsonplaceholder.typicode.com/users').then(function(res){
                console.log(res.data)
                this.users = res.data
            })
        },
        goto() {
            //this.$router.go(-1); //跳转到上一次浏览的页面
            //this.$router.replace('/report'); //跳转指定地址
            //this.$router.replace({name: 'report'}); //跳转到指定路由的名字下
            //this.$router.push('/report');
            this.$router.push({name: 'report'});
        },
        /* addA(){
            console.log('Add to a');
            return this.a + this.age;
        },
        addB(){
            console.log('Add to b');
            return this.b + this.age;
        }, */
        /*读文件大小*/
        readFileSize(file) {
            var size = file.size / 1024;
            var aMultiples = ["KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
            
            var fileSizeString = '';
            for(var i = 0; size > 1; size /= 1024, i++) {
                fileSizeString = size.toFixed(2) + " " + aMultiples[i];
            }
            return fileSizeString;
        }
    },
    /* beforeCreate() {
        console.log('beforeCreate 钩子执行……');
        console.log(this.number);
    },
    created() {
        console.log('created 钩子执行……');
        console.log(this.number);
        //bus.$on('tell', (data) => { console.log(data); });
    },
    beforeMount() {
        console.log('beforeMount 钩子执行……');
        console.log(this.number);
    },
    mounted() {
        //this.receive();
        console.log('mounted 钩子执行……');
        console.log(this.number);
    },
    beforeUpdate() {
        console.log('beforeUpdate 钩子执行……');
        console.log(this.number);
    },
    updated() {
        console.log('updated 钩子执行……');
        console.log(this.number);
    },
    beforeDestroy() {
        console.log('beforeDestroy 钩子执行……');
        console.log(this.number);
    },
    destroyed() {
        console.log('destroyed 钩子执行……');
        console.log(this.number);
    }, */
};
</script>
<style>
    .test div {
        text-align: left;
        margin: 0 0 0.2rem 0;
    }
    .test span {
        display: block;
        background: red;
        width: 2rem;
        height: 0.5rem; 
        line-height: 0.5rem;
        text-align: center;
        color: #fff; 
    }
    .changeColor span {
        background: green;       
    }
    .changeLength span:after {
        content: 'length';
        margin: 0 0 0 0.2rem;     
    }
    .users ul{
        display: flex;
        flex-wrap: wrap;
    }
    .users li{
        height: 1rem;
        text-align: center;
        border: 0.02rem solid #ddd;
        margin: 0 0 0.1rem 0.1rem;
    }
    .routerNest {
        border: 0.02rem solid #ccc;
    }
    .routerNest li {
        line-height: 0.5rem;
        border-top: 0.02rem solid #eee;
    }
</style>


