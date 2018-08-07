<template>
  <div class="shoppingcart">
    <div class="goods-tab">
        <span>&nbsp;</span>
        <span>商品名称</span>
        <span>商品图片</span>
        <span>商品单价</span>
        <span>数量</span>
        <span>商品总额</span>
        <span>操作</span>
    </div>
    <ul class="goods-list">
      <li v-for="(todo,index) in todos" v-if="index<2">
            <div>
               <input type="checkbox">
            </div>
            <div v-text="todo.products.title" class="goods-name"></div>
            <div class="list-img">
              <img :src="todo.products.img" alt="">
            </div>
            <div>{{todo.products.price|fixed}}</div>
            <div class="num">
                <span @click="changeCount(todo.products,-1)">-</span>
                <input type="text" v-model="todo.products.commission">
                <span @click="changeCount(todo.products,1)">+</span>
            </div>
            <div>{{(todo.products.price*todo.products.commission)|fixed}}</div>
            <div>
               <span>删除</span>
            </div>   
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      todos: [],
      count: 1
    };
  },
  created() {
  },
  components: {
  },
  mounted() {
    this.getData();     
  },
  filters: {
     fixed(value) {
        console.log(value)
        return (value/100).toFixed(2)
     }
  },
  methods: {
    getData() {
      axios.get('http://localhost:8080/static/list.json')
        .then((res) => {
          this.todos = res.data.recommend_goods_list.list;
          console.log(this.todos)
        });
    },
    changeCount(products,index){
      console.log(index)
      if(index<0){
        products.commission = 1
      }
      if(index===-1){
        products.commission--;
      }else {
        products.commission++;
      }
    }
  },
};

</script>
<style>
	* {
		padding: 0;
		margin: 0
	}
  html,body {
    overflow: hidden;
    height: 100%;
  }
  ul,li {
    list-style: none;
  }
	body {
		font-size: 0.14rem;
	}
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
</style>