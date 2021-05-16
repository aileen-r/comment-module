<template>
  <div
    v-for="(content, i) in contents"
    :class="{ 'accordion-active': content.active }"
    :key="i"
  >
    <a href="#" @click="expand($event, i)"> {{ content.title }} </a>
    <div class="accordion-body" :ref="'accordion-body-' + i">
      {{ content.description }}
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap';

export default {
  name: 'Accordian',
  data() {
    return {
      contents: [
        {
          title: 'Lorem ipsum dolor sit amet',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          active: false,
        },
        {
          title: 'Ut enim ad minim veniam',
          description:
            'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          active: false,
        },
        {
          title: 'Duis aute irure dolor in reprehenderit',
          description:
            'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
          active: false,
        },
        {
          title: 'Excepteur sint occaecat cupidatat non proident',
          description:
            'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          active: false,
        },
      ],
    };
  },
  methods: {
    expand(e, i) {
      e.preventDefault();

      let el = this.$refs['accordion-body-' + i];

      if (this.contents[i].active === false) {
        this.contents[i].active = true;

        gsap.to(el, 1, {
          height: el.scrollHeight,
          ease: 'elastic(1, 0.3)',
        });
      } else {
        this.contents[i].active = false;

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
