<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view :number="number" :title="title" @transferUser="getUser"/>
    <p>{{user}}</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      user: '',
      number: 'Test',
      title: 'Axios',
    };
  },
  methods: {
    getUser(msg) {
      this.user = msg;
      console.log(msg);
    },
  },
};

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 0.28rem;
}
</style>
