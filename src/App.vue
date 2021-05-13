<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
};
</script>

<style>
:root {
  --black: #000000;
  --grey: #808080;
  --white: #ffffff;
  --orange: #ff9c85;
  --pink: #ffccec;
  --purple: #9594ff;
  --yellow: #ffcb8f;
}

body {
  background: linear-gradient(180deg, var(--yellow) 18.54%, var(--orange) 82.6%)
      fixed,
    var(--yellow);
  color: var(--black);
  font-family: 'Rubik', Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
