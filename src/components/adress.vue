<template>
  <div class="shoppingcart">
    <ul class="goods-list">
      <li v-for="(todo,index) in filterAddress" :key="index" :class="{'active':index==currIndex}" @click="currIndex=index">
            <div v-text="todo.title" class="goods-name"></div>
            <div v-if="todo.products.onShelf">默认地址</div>
            <div v-if="!todo.products.onShelf" @click="defaultAdd(todo)">设为默认地址</div>
      </li>
      <li>
         +添加新地址
      </li>
    </ul>
    <p @click="total=todos.length">More</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      todos: [],
      count: 1,
      checkAll: false,
      total: 3,
      currIndex: 0
    };
  },
  created() {
  },
  components: {
  },
  mounted() {
    this.getData();
  },
  computed: {
     filterAddress() {
         return this.todos.slice(0,this.total)
     }
  },
  filters: {
  },
  methods: {
    getData() {
      axios.get('http://localhost:8080/static/list.json')
        .then((res) => {
          this.todos = res.data.recommend_goods_list.list;
          console.log(this.todos);
        });
    },
    showAll() {
       if(this.total === 3){
          this.total = this.todos.length
       }else {
          this.total = 3
       }
       
    },
    defaultAdd(todo) {
      this.todos.forEach((item,index) => {
        if(todo.products.shopId === item.products.shopId){
          item.products.onShelf = true;
        }else {
          item.products.onShelf = false;
        }
        
      })
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
  .goods-list {
     overflow: hidden;
  }
  .goods-list li {
    border: 1px solid #ddd;
    float: left;
    width: 200px;
    height: 100px;
    line-height: 30px;
    text-align: left;
  }
  .goods-list li.active {
    border: 1px solid #F7820B;
  }
  .goods-name {
    width: 160px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
