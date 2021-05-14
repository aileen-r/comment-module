<template>
  <!-- Comment 1 start -->
  <details open class="comment" id="comment-1">
    <a href="#comment-1" class="comment-border-link">
      <span class="sr-only">Jump to comment-1</span>
    </a>
    <summary>
      <div class="comment-heading">
        <img
          class="comment-avatar"
          :src="`${publicPath}assets/UserAvatar.png`"
        />
        <div class="comment-info">
          <a href="#" class="comment-author-name">adamsdavid</a>
          <p class="comment-timestamp">20 hours ago</p>
        </div>
      </div>
    </summary>

    <div class="comment-body">
      <p>
        I genuinely think that Codewell's community is AMAZING. It's just
        starting out but the templates on there are amazing. 👀
      </p>
      <comment-voting v-model:votes="votes" />
      <button type="button">Reply</button>
      <button type="button">Report</button>
    </div>

    <!-- <div class="replies">
      <details open class="comment" id="comment-2">
        <a href="#comment-2" class="comment-border-link">
          <span class="sr-only">Jump to comment-2</span>
        </a>
        <summary>
          <div class="comment-heading">
            <div class="comment-voting">
              <button type="button">
                <span aria-hidden="true">&#9650;</span>
                <span class="sr-only">Vote up</span>
              </button>
              <button type="button">
                <span aria-hidden="true">&#9660;</span>
                <span class="sr-only">Vote down</span>
              </button>
            </div>
            <div class="comment-info">
              <a href="#" class="comment-author">randomperson81</a>
              <p class="m-0">4 points &bull; 3 days ago</p>
            </div>
          </div>
        </summary>

        <div class="comment-body">
          <p>Took the words right out of my mouth!</p>
          <button type="button">Reply</button>
          <button type="button">Report</button>
        </div>
      </details>


      <details open class="comment" id="comment-3">
        <a href="#comment-3" class="comment-border-link">
          <span class="sr-only">Jump to comment-3</span>
        </a>
        <summary>
          <div class="comment-heading">
            <div class="comment-voting">
              <button type="button">
                <span aria-hidden="true">&#9650;</span>
                <span class="sr-only">Vote up</span>
              </button>
              <button type="button">
                <span aria-hidden="true">&#9660;</span>
                <span class="sr-only">Vote down</span>
              </button>
            </div>
            <div class="comment-info">
              <a href="#" class="comment-author">2edgy4u</a>
              <p class="m-0">-19 points &bull; 3 days ago</p>
            </div>
          </div>
        </summary>

        <div class="comment-body">
          <p>
            Wow, are you serious? You have some pretty low standards to be able
            to enjoy this. Good for you I guess, but you should honestly stop
            making these embarrassing comments.
          </p>
          <button type="button">Reply</button>
          <button type="button">Report</button>
        </div>

        <div class="replies">
          <details open class="comment" id="comment-4">
            <a href="#comment-4" class="comment-border-link">
              <span class="sr-only">Jump to comment-4</span>
            </a>
            <summary>
              <div class="comment-heading">
                <div class="comment-voting">
                  <button type="button">
                    <span aria-hidden="true">&#9650;</span>
                    <span class="sr-only">Vote up</span>
                  </button>
                  <button type="button">
                    <span aria-hidden="true">&#9660;</span>
                    <span class="sr-only">Vote down</span>
                  </button>
                </div>
                <div class="comment-info">
                  <a href="#" class="comment-author">modpowertrip</a>
                  <p class="m-0">9 points &bull; 2 days ago</p>
                </div>
              </div>
            </summary>

            <div class="comment-body">
              <p>
                You are breaking <a href="#rule-687">Rule #687</a> with that
                comment. Please avoid posting like this in the future, or I will
                ban you.
              </p>
              <button type="button">Reply</button>
              <button type="button">Report</button>
            </div>
          </details>


          <details open class="comment" id="comment-5">
            <a href="#comment-5" class="comment-border-link">
              <span class="sr-only">Jump to comment-5</span>
            </a>
            <summary>
              <div class="comment-heading">
                <div class="comment-voting">
                  <button type="button">
                    <span aria-hidden="true">&#9650;</span>
                    <span class="sr-only">Vote up</span>
                  </button>
                  <button type="button">
                    <span aria-hidden="true">&#9660;</span>
                    <span class="sr-only">Vote down</span>
                  </button>
                </div>
                <div class="comment-info">
                  <a href="#" class="comment-author">imemespam</a>
                  <p class="m-0">3 points &bull; 2 days ago</p>
                </div>
              </div>
            </summary>

            <div class="comment-body">
              <p>Well, that's just like your opinion man.</p>
              <button type="button">Reply</button>
              <button type="button">Report</button>
            </div>
          </details>


          <details open class="comment" id="comment-6">
            <a href="#comment-6" class="comment-border-link">
              <span class="sr-only">Jump to comment-6</span>
            </a>
            <summary>
              <div class="comment-heading">
                <div class="comment-voting">
                  <button type="button">
                    <span aria-hidden="true">&#9650;</span>
                    <span class="sr-only">Vote up</span>
                  </button>
                  <button type="button">
                    <span aria-hidden="true">&#9660;</span>
                    <span class="sr-only">Vote down</span>
                  </button>
                </div>
                <div class="comment-info">
                  <a href="#" class="comment-author">lukerbro57</a>
                  <p class="m-0">0 points &bull; 2 days ago</p>
                </div>
              </div>
            </summary>

            <div class="comment-body">
              <p>Lol I agree with you.</p>
              <button type="button">Reply</button>
              <button type="button">Report</button>
            </div>
          </details>


          <a href="#load-more">Load more replies</a>
        </div>
      </details>

    </div> -->
  </details>
  <!-- Comment 1 end -->
</template>

<script>
import CommentVoting from './CommentVoting';

export default {
  name: 'Comment',
  components: {
    CommentVoting,
  },
  data() {
    return {
      publicPath: process.env.BASE_URL,
      votes: 2,
    };
  },
};
</script>

<style lang="scss" scoped>
$img-width-sm: 45px;
$img-width-md: 55px;
$gutter-width-sm: 15px;
$gutter-width-md: 25px;
$reply-offset-sm: calc(#{$gutter-width-sm} + #{$img-width-sm});
$reply-offset-md: calc(#{$gutter-width-md} + #{$img-width-md});

.comment {
  position: relative;
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
  line-height: 16px;
  margin-left: $reply-offset-sm;
  margin-top: 4px;
  padding-right: 40px;

  .comment-author-name {
    color: var(--black);
    font-weight: 700;
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
    margin: -10px 0 20px 0;
  }
}

.comment-border-link {
  background-color: var(--lighter-grey);
  background-clip: padding-box;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  display: block;
  // 9px offsets button padding + line height
  height: calc(100% - 55px - 9px);
  left: 18px;
  outline: 4px solid transparent;
  position: absolute;
  top: 55px;
  width: 12px;

  &:hover {
    background-color: var(--light-grey);
  }
}

details.comment summary {
  position: relative;
  list-style: none;
  cursor: pointer;
}

details.comment summary::-webkit-details-marker {
  display: none;
}

.comment-heading::after {
  align-self: center;
  color: rgba(0, 0, 0, 0.55);
  display: inline-block;
  font-size: 12px;
  position: absolute;
  right: 5px;
  top: 2px;
}

details.comment[open] .comment-heading::after {
  content: 'Hide';
}

details.comment:not([open]) .comment-heading::after {
  content: 'Show';
}
</style>
