<template>
    <div class="uploader">
        <ul class="goods-list">
            <li v-for="(todo,index) in todos" :key="index">
                <!-- <div class="checkbox" :class="{'active':todo.checked}" @click="isSelect(todo)">
                    <span></span>
                </div> -->
                <div v-text="todo.title" class="goods-name"></div>
                <div class="list-img">
                    <img :src="todo.url" alt="">
                </div>
                <!-- <div>{{todo.products.price|fixed}}</div> -->
                <!-- <div class="num">
                    <span @click="changeCount(todo.products,-1)">-</span>
                    <input type="text" v-model="todo.products.commission">
                    <span @click="changeCount(todo.products,1)">+</span>
                </div> -->
                <!-- <div>{{(todo.products.price*todo.products.commission)|fixed}}</div> -->
                <div>
                    <span @click="delProduct(todo)">删除</span>
                </div>
            </li>
        </ul>
        <!-- <div class="count">
            <input type="file" capture="camera" accept="image/*,video/*" multiple>
        </div> -->
    </div>
</template>
<script>
export default {
    data() {
        return {
            todos: [],
            count: 1,
            checkAll: false,
            total: 0,
        };
    },
    //在渲染组件对应路由被confirm前调用，获取不到this，可以通过next回调来获取，因为当守卫执行前，组件实例还没被创建
    // beforeRouteEnter(to,from,next){ 
    //     //alert(this.count) undefined
    //     next((vm) => {
    //         alert(vm.count)
    //     })
    // },

    //导航离开组件对应路由时调用，可以访问到this
    // beforeRouteLeave(to,from,next){
    //     if(confirm('确定离开吗？') == true){
    //         next();
    //     }else {
    //         next(false);
    //     }
    // },
    created() {
    },
    components: {
    },
    mounted() {
        this.getData();
    },
    filters: {
        fixed(value) {
            return (value / 100).toFixed(2);
        },
    },
    methods: {
        getData() {
            this.$http.get('http://jsonplaceholder.typicode.com/photos')
            .then((res) => {
                this.todos = res.body.slice(0,5);
            });
        },
        changeCount(product, index) {
            if (index < 0) {
            product.commission--;
            if (product.commission <= 1) {
                product.commission = 1;
            }
            } else {
            product.commission++;
            }
            this.getTotal();
        },
        isSelect(product) {
            if (typeof product.checked === 'undefined') {
            this.$set(product, 'checked', true);
            } else {
            product.checked = !product.checked;
            }
            this.getCount();
            this.getTotal();
        },
        isSelectAll() {
            this.checkAll = !this.checkAll;
            if (this.checkAll) {
            this.todos.forEach((val) => {
                if (typeof val.checked === 'undefined') {
                this.$set(val, 'checked', true);
                } else {
                val.checked = true;
                }
            });
            } else {
            this.todos.forEach((val) => {
                val.checked = false;
            });
            }
            this.getTotal();
        },
        getCount() {
            let i = 0;
            this.todos.forEach((val) => {
            if (val.checked) {
                i++;
            }
            });
            if (i === 2) {
            this.checkAll = true;
            } else {
            this.checkAll = false;
            }
        },
        getTotal() {
            this.total = 0;
            this.todos.forEach((val) => {
            console.log(val.checked);

            if (val.checked) {
                this.total += val.products.price * val.products.commission;
            }
            });
            console.log(this.total);
        },
        delProduct(product) {
            this.todos = this.todos.filter((item) => {
            return item !== product
            })
        }
    },
}
</script>

<style>
    .shoppingcart {
        width: 700px;
        font-size: 0.14rem;
    }
    .goods-tab {
        background: #ddd;
        height: 30px;
        line-height: 30px;
        overflow: hidden;
    }
    .goods-tab span {
        float: left;
        width: 100px;
    }
    .goods-list {
        overflow: hidden;
    }
    .checkbox span {
        display: inline-block;
        width: 10px;
        height: 10px;
        border: 1px solid #ddd;
        background: #fff;
    }
    .checkbox.active span {
        background: red;
    }
    .goods-list li div {
        float: left;
        width: 100px;
        height: 60px;
        line-height: 60px;
    }
    .goods-list li div input {
        width: 30px;
        text-align: center;
    }
    .goods-list li div img {
        width: 40px;
        height: 40px;
    }
    .goods-name {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .count .fl {
        float: left;
        padding: 0 0 0 30px;
    }
    .count .fr {
        float: right;
        padding: 0 30px 0 0;
    }
</style>
