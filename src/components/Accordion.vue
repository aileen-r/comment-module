<template>
  <div class="accordion" :class="{ 'accordion-active': active }">
    <div class="accordion-header">
      <slot name="header" />
    </div>
    <button type="button" @click="expand"><slot name="trigger" /></button>
    <div class="accordion-body" ref="accordion-body">
      <slot />
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap';

export default {
  name: 'Accordian',
  data() {
    return {
      active: true,
    };
  },
  methods: {
    expand(e) {
      e.preventDefault();

      let el = this.$refs['accordion-body'];

      if (!this.active) {
        this.active = true;

        gsap.to(el, 1, {
          height: el.scrollHeight,
          ease: 'elastic(1, 0.3)',
        });
      } else {
        this.active = false;

        gsap.to(el, 0.5, {
          height: 0,
          ease: 'bounce',
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.accordion-body {
  height: 0;
  overflow: hidden;
}
</style>
