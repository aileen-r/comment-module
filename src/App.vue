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
      <loader v-if="loading" />
      <error v-else-if="error" @retry="retry" />
      <comment
        v-else
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
import Error from './components/Error';
import Loader from './components/Loader';
import OctocatCorner from './components/OctocatCorner';

export default {
  name: 'App',
  components: {
    Card,
    Comment,
    Error,
    Loader,
    OctocatCorner,
  },

  data() {
    return {
      comments: [],
      error: false,
      loading: true,
    };
  },

  async created() {
    await this.getComments();
  },

  methods: {
    async getComments() {
      try {
        this.comments = await new CommentService(this.$prismic).getComments();
      } catch (err) {
        this.error = true;
      } finally {
        this.loading = false;
      }
    },

    retry() {
      this.loading = true;
      this.error = false;
      this.getComments();
    },
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
  font-size: 1.65em;
  margin-top: 0;
  text-align: center;
  text-shadow: 0 2px 7px var(--light-grey);

  @media screen and (min-width: $bp-sm) {
    font-size: 1.9em;
  }

  @media screen and (min-width: $bp-md) {
    font-size: 2.2em;
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
