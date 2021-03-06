<template>
  <article
    class="comment"
    :class="{ 'nested-comment': nested }"
    :id="comment.id"
  >
    <accordion :collapse-offset="isMobile ? 23 : 34">
      <template v-slot:header>
        <a :href="`#${comment.id}`" class="comment-border-link">
          <span class="sr-only">Jump to {{ comment.author }}'s</span>
        </a>
        <header class="comment-heading">
          <img
            class="comment-avatar"
            :src="`${publicPath}assets/${comment.authorAvatar}`"
            :alt="`${comment.author}'s avatar`"
          />
          <div class="comment-info">
            <a href="#" class="comment-author-name">{{ comment.author }}</a>
            <p class="comment-timestamp">{{ comment.timestamp }}</p>
          </div>
        </header>
      </template>

      <template v-slot:trigger="{ active }">{{
        active ? 'Hide' : 'Show'
      }}</template>

      <template v-slot:default="{ updateHeight }">
        <div class="comment-body">
          <p>
            {{ comment.body }}
          </p>
          <comment-voting v-model:votes="votes" />
          <button type="button">Reply</button>
          <button type="button">Report</button>
        </div>

        <div v-if="comment.replies && comment.replies.length" class="replies">
          <comment
            v-for="reply in comment.replies"
            :key="reply.id"
            :comment="reply"
            :nested="true"
            @update-height="updateHeight"
          />
        </div>
      </template>
    </accordion>
  </article>
</template>

<script>
import Accordion from './Accordion';
import CommentVoting from './CommentVoting';

export default {
  name: 'Comment',
  mediaQuery: window.matchMedia('(min-width: 768px)'),
  components: {
    Accordion,
    CommentVoting,
  },
  data() {
    return {
      isMobile: false,
      publicPath: process.env.BASE_URL,
      votes: this.comment.votes,
    };
  },
  props: {
    comment: {
      type: Object,
      default: () => ({}),
    },
    nested: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    this.$options.mediaQuery.addListener(this.handleTabletBpChange);
    this.handleTabletBpChange(this.$options.mediaQuery);
  },
  beforeUnmount() {
    this.$options.mediaQuery.removeListener(this.handleTabletBpChange);
  },
  methods: {
    handleTabletBpChange(e) {
      this.isMobile = !e.matches;
    },
  },
};
</script>

<style lang="scss">
$img-width-sm: 45px;
$img-width-md: 55px;
$gutter-width-sm: 15px;
$gutter-width-md: 25px;
$reply-offset-sm: calc(#{$gutter-width-sm} + #{$img-width-sm});
$reply-offset-md: calc(#{$gutter-width-md} + #{$img-width-md});

.comment {
  margin-bottom: 25px;
  position: relative;

  @media screen and (min-width: $bp-md) {
    margin-bottom: 35px;
  }

  &:last-child {
    margin-bottom: 0;
  }

  .accordion-trigger {
    align-self: center;
    color: var(--grey);
    display: inline-block;
    font-size: 12px;
    position: absolute;
    right: 0;
    top: 2px;

    @media screen and (min-width: $bp-md) {
      top: 1px;
    }
  }

  .accordion:not(.accordion-active) {
    padding-bottom: 23px;
    transition: padding-bottom 0.5s;

    @media screen and (min-width: $bp-md) {
      padding-bottom: 34px;
    }
  }

  .comment-heading {
    display: flex;

    .comment-avatar {
      border-radius: 50%;
      height: $img-width-sm;
      margin-right: $gutter-width-sm;
      position: absolute;
      width: $img-width-sm;

      @media screen and (min-width: $bp-md) {
        height: $img-width-md;
        margin-right: $gutter-width-md;
        width: $img-width-md;
      }
    }
  }

  .comment-info {
    display: flex;
    flex-wrap: wrap;
    line-height: 18px;
    margin-left: $reply-offset-sm;
    margin-top: 4px;
    padding-right: 35px;

    @media screen and (min-width: $bp-md) {
      margin-left: $reply-offset-md;
    }

    .comment-author-name {
      color: var(--black);
      font-weight: 600;
      margin-right: 10px;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    .comment-timestamp {
      color: var(--grey);
      margin: 0;
    }
  }

  .comment-body {
    margin-left: $reply-offset-sm;
    margin-top: 22px;

    @media screen and (min-width: $bp-md) {
      margin-left: $reply-offset-md;
    }

    p {
      margin: -10px 0 12px 0;
    }
  }

  .comment-border-link {
    background-color: var(--lighter-grey);
    background-clip: padding-box;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    display: block;
    height: calc(100% - 55px);
    left: 18px;
    position: absolute;
    top: 55px;
    width: 12px;

    @media screen and (min-width: $bp-md) {
      height: calc(100% - 65px);
      left: 21px;
      top: 65px;
    }

    &:hover {
      background-color: var(--light-grey);
    }
  }

  .replies {
    margin-left: $reply-offset-sm;
    margin-top: 20px;

    @media screen and (min-width: $bp-md) {
      margin-left: $reply-offset-md;
      margin-top: 25px;
    }
  }
}
</style>
