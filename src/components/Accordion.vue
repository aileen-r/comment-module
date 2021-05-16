<template>
  <div class="accordion" :class="{ 'accordion-active': active }">
    <div class="accordion-header">
      <slot name="header" />
    </div>
    <button class="accordion-trigger" type="button" @click="toggle">
      <slot name="trigger" />
    </button>
    <div class="accordion-body" ref="accordion-body">
      <slot />
    </div>
  </div>
</template>

<script>
/*
 * Adapted from https://codepen.io/takaneichinose/pen/rXMrgv?editors=0110
 * Extended to support nesting (TODO)
 */
import { gsap } from 'gsap';

export default {
  name: 'Accordian',
  data() {
    return {
      active: true,
    };
  },
  methods: {
    close() {
      this.active = false;
      const el = this.$refs['accordion-body'];
      gsap.to(el, 0.5, {
        height: 0,
        ease: 'bounce',
      });
    },

    open() {
      this.active = true;
      const el = this.$refs['accordion-body'];
      gsap.to(el, 1, {
        height: el.scrollHeight,
        ease: 'elastic(1, 0.3)',
      });
    },

    toggle(e) {
      e.preventDefault();
      if (this.active) {
        this.close();
      } else {
        this.open();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.accordion-body {
  overflow: hidden;
}
</style>
