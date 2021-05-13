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

<style lang="scss">
#app {
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  padding: 15px;

  @media screen and (min-width: $bp-md) {
    padding: 40px;
  }
}
</style>
