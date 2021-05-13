<template>
  <card>
    <comment />
  </card>
</template>

<script>
import Card from './components/Card';
import Comment from './components/Comment';

export default {
  name: 'App',
  components: {
    Card,
    Comment,
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
