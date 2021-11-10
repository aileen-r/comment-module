<template>
  <div class="error">
    <h2>{{ errorMessage }}</h2>
    <a @click="$emit('retry')">{{ retryMessage }}</a>
  </div>
</template>

<script>
export default {
  name: 'Error',
  data() {
    return {
      errorMessage: 'Failed to fetch comments.',
      retryMessage: 'Try again?',
    };
  },
};
</script>

<style lang="scss">
.error {
  color: var(--dark-grey);
  text-align: center;

  h2 {
    font-size: 1.2em;
    font-weight: 600;

    @media screen and (min-width: $bp-sm) {
      font-size: 1.3em;
    }
  }

  // TODO - style
  // add animated "redo" icon
  a {
    box-shadow: 0 3px var(--orange);
    cursor: pointer;
    padding: 1px 3px;
    text-decoration: none;
  }
}
</style>
