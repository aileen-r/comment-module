<template>
  <card>
    <img alt="Vue logo" src="./assets/logo.png" />
    <hello-world msg="Welcome to Your Vue.js App" />
  </card>
</template>

<script>
import Card from './components/Card';
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    Card,
    HelloWorld,
  },
};
</script>

<style>
#app {
  margin: 15px;
}
</style>
