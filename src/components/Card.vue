<template>
  <main class="card">
    <slot />
  </main>
</template>

<script>
export default {
  name: 'Card',
};
</script>

<style lang="scss" scoped>
.card {
  background-color: var(--white);
  border-radius: 10px;
  box-shadow: 0px 4px 15px var(--drop-shadow-color);
  max-width: 816px;
  padding: 30px 15px;
  width: 100%;

  @media screen and (min-width: $bp-md) {
    padding: 46px 65px;
  }
}
</style>
