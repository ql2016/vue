<template>
  <div class="hello">
      <h3 v-show="isShow">{{title}}</h3>
      <p v-if="isShow">v-if</p>
      <input v-model="newTodoText" v-on:keyup.enter="addNewTodo" placeholder="Add a todo">
      <ul>
         <li v-for="todo in todos" v-bind:key="todo.id">{{todo.title}}</li>
      </ul>
  </div>
</template>

<script>
import axios from 'axios';
import bus from '../assets/event';

export default {
  name: 'axi',
  data() {
    return {
      isShow: true,
      newTodoText: '',
      nextTodoId: 4,
      todos: [
        {
          id: 1,
          title: 'Do the dishes',
        },
        {
          id: 2,
          title: 'Take out the trash',
        },
        {
          id: 3,
          title: 'Mow the lawn',
        },
      ],
    };
  },
  props: ['title'],
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      axios.get('http://localhost:8080/static/data.json')
        .then((res) => {
          console.log(res);
        });
    },
    addNewTodo() {
      this.todos.push({
        id: this.nextTodoId += 1,
        title: this.newTodoText,
      });
      this.$emit('transferUser', this.newTodoText);
      this.newTodoText = '';
    },
    sendTo() {
      bus.$emit('tell', 'isShow');
    },
  },
};
</script>

