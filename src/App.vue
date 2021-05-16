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
      <accordion>
        <template v-slot:header>
          <h1>Here might be a page title</h1>
        </template>

        <template v-slot:default>
          <p>A paragraph for the main content.</p>
          <p>And another one.</p>
        </template>

        <template v-slot:trigger>
          <p>Here's some contact info</p>
        </template>
      </accordion>
      <comment
        v-for="comment in comments"
        :key="comment.id"
        :comment="comment"
      />
    </card>
  </transition-group>
</template>

<script>
import Accordion from './components/Accordion.vue';
import Card from './components/Card';
import Comment from './components/Comment';
import OctocatCorner from './components/OctocatCorner';
import mockComments from './mocks/mock-comments.json';

export default {
  name: 'App',
  components: {
    Card,
    Comment,
    OctocatCorner,
    Accordion,
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
