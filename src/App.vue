<template>
  <transition name="fade" appear>
    <card>
      <comment
        v-for="comment in comments"
        :key="comment.id"
        :comment="comment"
      />
    </card>
  </transition>
</template>

<script>
import Card from './components/Card';
import Comment from './components/Comment';
import mockComments from './mocks/mock-comments.json';

export default {
  name: 'App',
  components: {
    Card,
    Comment,
  },
  data() {
    return {
      comments: mockComments,
    };
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
