<template>
  <div
    class="accordion"
    :class="{ 'accordion-active': active }"
    ref="accordion"
  >
    <div class="accordion-header">
      <slot name="header" />
    </div>
    <button class="accordion-trigger" type="button" @click="toggle">
      <slot name="trigger" :active="active">{{ defaultTrigger }}</slot>
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
import { debounce } from 'debounce';

export default {
  name: 'Accordion',
  data() {
    return {
      active: true,
      prevBodyHeight: 0,
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
    accordionRef() {
      return this.$refs['accordion'];
    },
    bodyRef() {
      return this.$refs['accordion-body'];
    },
    defaultTrigger() {
      return this.active ? '-' : '+';
    },
  },
  created() {
    this.resetHeights = debounce(this.resetHeights, 100);
  },
  mounted() {
    window.addEventListener('resize', this.resetHeights);
    this.resetHeights();
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.resetHeights);
  },
  methods: {
    close() {
      this.active = false;
      gsap.to(this.bodyRef, {
        height: 0,
        ease: 'bounce',
        duration: 0.5,
      });
      this.$parent.$emit('updateHeight', -this.prevHeight + 55);
    },

    open() {
      this.active = true;
      this.$parent.$emit('updateHeight', this.prevHeight - 55);
      gsap.to(this.bodyRef, {
        height: this.prevBodyHeight,
        ease: 'elastic(1, 0.3)',
        duration: 1,
      });
    },

    resetHeights() {
      // reset all heights rather than trying to recalculate
      this.bodyRef.removeAttribute('style');
      // force collapsed accordion-body open after removing height: 0px
      if (!this.active) {
        this.active = true;
      }
      // reset stored height values
      this.prevBodyHeight = this.bodyRef.scrollHeight;
      this.prevHeight = Math.floor(this.accordionRef.scrollHeight);
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
        let height = this.prevBodyHeight + childHeight,
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

        gsap
          .to(this.bodyRef, {
            height,
            ease,
            duration,
          })
          .then(() => {
            this.prevHeight = Math.ceil(this.accordionRef.scrollHeight);
          });
        this.$parent.$emit('updateHeight', childHeight);
        this.prevBodyHeight = height;
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
