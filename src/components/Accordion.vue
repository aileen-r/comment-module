<template>
  <div class="accordion" :class="{ 'accordion-active': active }">
    <div class="accordion-header">
      <slot name="header" />
    </div>
    <button class="accordion-trigger" type="button" @click="toggle">
      <slot name="trigger" />
    </button>
    <div class="accordion-body" ref="accordion-body">
      <slot :update-height="updateHeight" />
    </div>
  </div>
</template>

<script>
/*
 * Adapted from https://codepen.io/takaneichinose/pen/rXMrgv?editors=0110
 * Extended to support nesting
 */
import { gsap } from 'gsap';

export default {
  name: 'Accordion',
  data() {
    return {
      active: true,
    };
  },
  computed: {
    bodyRef() {
      return this.$refs['accordion-body'];
    },
  },
  methods: {
    close() {
      this.active = false;
      gsap.to(this.bodyRef, 0.5, {
        height: 0,
        ease: 'bounce',
      });
      this.$parent.$emit('updateHeight', -this.bodyRef.scrollHeight);
    },

    open() {
      this.active = true;
      this.$parent.$emit('updateHeight', this.bodyRef.scrollHeight);
      gsap.to(this.bodyRef, 1, {
        height: this.bodyRef.scrollHeight,
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

    updateHeight(childHeight) {
      if (this.active) {
        const duration = childHeight < 0 ? 0.5 : 1;
        const ease = childHeight < 0 ? 'bounce' : 'elastic(1, 0.3)';
        gsap.to(this.bodyRef, duration, {
          height: this.bodyRef.clientHeight + childHeight,
          ease,
        });
        this.$parent.$emit('updateHeight', childHeight);
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
