<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello world" />
  <Counter />
  <List />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Counter from './components/01-Counter.vue';
import List from './components/02-List.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    Counter,
    List
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
