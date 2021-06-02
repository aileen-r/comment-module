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
      prevHeight: 0,
    };
  },
  props: {
    collapseOffset: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    bodyRef() {
      return this.$refs['accordion-body'];
    },
  },
  mounted() {
    this.prevHeight = this.bodyRef.clientHeight;
  },
  methods: {
    close() {
      this.active = false;
      gsap.to(this.bodyRef, {
        height: 0,
        ease: 'bounce',
        duration: 0.5,
      });
      this.$parent.$emit(
        'updateHeight',
        -this.prevHeight + this.collapseOffset
      );
    },

    open() {
      this.active = true;
      this.$parent.$emit('updateHeight', this.prevHeight - this.collapseOffset);
      gsap.to(this.bodyRef, {
        height: this.prevHeight,
        ease: 'elastic(1, 0.3)',
        duration: 1,
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
      // only update parent height if expanded
      if (this.active) {
        let height = this.prevHeight + childHeight,
          duration,
          ease;

        // child collapse
        if (childHeight < 0) {
          duration = 0.5;
          ease = 'bounce';
        }

        // child expand
        else {
          duration = 1;
          ease = 'elastic(1, 0.3)';
        }

        gsap.to(this.bodyRef, {
          height,
          ease,
          duration,
        });
        this.$parent.$emit('updateHeight', childHeight);
        this.prevHeight = height;
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
