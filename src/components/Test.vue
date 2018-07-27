<template>
  <div class="hello">
      <h3>{{num}}</h3>
      <input v-model="num">
      <p v-html="title" :class="['red',{'border':title}]"></p>
      <ul>
         <li v-for="item in items" v-text="item.lable" @click="handleClick(item)" :class="{underLine:item.isUnderLine}"></li>
      </ul>
      <div class="border">
          <input type="text" v-model="list" @keyup.enter="addNum">
          <ul>
             <li v-for="todo in todoList" v-text="todo"></li>
          </ul>
      </div>
  </div>
</template>

<script>
import bus from '../assets/event';

export default {
  name: 'axi',
  data() {
    return {
      title: '<span>?</span>43242426',
      items: [{
         lable: 1,
         isUnderLine: false
      },{
         lable: 2,
         isUnderLine: true
      },{
         lable: 3,
         isUnderLine: false
      }],
      num: this.number,
      list: '',
      todoList: []
    };
  },
  props: ['number'],
  methods: {
    handleClick(item){
       item.isUnderLine = !item.isUnderLine
    },
    addNum(){
        this.todoList.push(this.list)
        console.log(this.list,this.todoList);
        this.list = '';
    },
    receive() {
      bus.$on('tell', (data) => { console.log(data); });
    },
  },
  // beforeCreate() {
  //   console.log('beforeCreate 钩子执行……');
  //   console.log(this.number);
  // },
  created() {
    console.log('created 钩子执行……');
    console.log(this.number);
  },
  beforeMount() {
    console.log('beforeMount 钩子执行……');
    console.log(this.number);
  },
  mounted() {
    this.receive();
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
  },
};
</script>
<style>
    .red {
       color: red;
    }
    .border {
        border: 1px solid blue;
    }
    .underLine {
       border-bottom: 1px solid green;
    }
</style>

