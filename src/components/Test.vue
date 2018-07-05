<template>
  <div class="hello">
      <h3>{{number}}</h3>
      <input v-model="number">
  </div>
</template>

<script>
import bus from '../assets/event';

export default {
  name: 'axi',
  data() {
    return {
    };
  },
  props: ['number'],
  methods: {
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

