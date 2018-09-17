<template>
  <div class="uploader">
    <ul class="goods-list">
      <li v-for="(todo,index) in todos" v-if="index<2" :key="index">
            <div class="checkbox" :class="{'active':todo.checked}" @click="isSelect(todo)">
               <span></span>
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
               <span @click="delProduct(todo)">删除</span>
            </div>
      </li>
    </ul>
    <div class="count">
      <input type="file" capture="camera" accept="image/*,video/*" multiple>
    </div>
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
      total: 0,
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
      return (value / 100).toFixed(2);
    },
  },
  methods: {
    getData() {
      axios.get('http://localhost:8080/static/list.json')
        .then((res) => {
          this.todos = res.data.recommend_goods_list.list.slice(0, 2);
          console.log(this.todos);
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
      /*var index = this.todos.indexOf(product);
      this.todos.splice(index,1);*/
      this.todos = this.todos.filter((item) => {
        return item !== product
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
