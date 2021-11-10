<template>
  <transition-group name="fade" appear>
    <header key="header">
      <octocat-corner
        fillColor="black"
        githubUrl="https://github.com/aileen-r/comment-module"
      />
      <h1 class="header">Comment Module</h1>
    </header>
    <card key="card">
      <comment
        v-for="comment in comments"
        :key="comment.id"
        :comment="comment"
      />
    </card>
  </transition-group>
</template>

<script>
import CommentService from './services/commentService';

import Card from './components/Card';
import Comment from './components/Comment';
import OctocatCorner from './components/OctocatCorner';

export default {
  name: 'App',
  components: {
    Card,
    Comment,
    OctocatCorner,
  },

  data() {
    return {
      comments: [],
    };
  },

  async created() {
    this.comments = await new CommentService(this.$prismic).getComments();
  },
};
</script>

<style lang="scss">
#app {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  padding: 35px 15px;

  @media screen and (min-width: $bp-md) {
    padding: 20px 40px;
  }
}

.header {
  color: var(--white);
  font-size: 26px;
  margin-top: 0;
  text-align: center;
  text-shadow: 0 2px 7px var(--light-grey);

  @media screen and (min-width: $bp-sm) {
    font-size: 30px;
  }

  @media screen and (min-width: $bp-md) {
    font-size: 36px;
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
