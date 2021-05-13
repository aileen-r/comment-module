<template>
  <button @click="upVote" class="vote-button" type="button">
    <img aria-hidden="true" :src="`${publicPath}assets/Up.svg`" />
    <span class="sr-only">Vote up</span>
  </button>
  <span class="votes">{{ votes }}</span>
  <button @click="downVote" class="vote-button" type="button">
    <img aria-hidden="true" :src="`${publicPath}assets/Down.svg`" />
    <span class="sr-only">Vote down</span>
  </button>
</template>

<script>
export default {
  name: 'CommentVoting',
  data() {
    return {
      publicPath: process.env.BASE_URL,
    };
  },
  props: {
    votes: {
      type: Number,
      default: 0,
    },
  },
  emits: ['update:votes'],
  methods: {
    downVote() {
      this.$emit('update:votes', this.votes - 1);
    },
    upVote() {
      this.$emit('update:votes', this.votes + 1);
    },
  },
};
</script>

<style lang="scss" scoped>
.votes {
  // TODO: load in heavier font
  // TODO: position so there is no horizontal reflow from e.g. 1 -> 2
  font-weight: 700;
  margin: 0 3px;
}

.vote-button {
  padding: 1px 3px;

  img {
    position: relative;
    top: -1px;
  }
}
</style>
