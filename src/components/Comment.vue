<template>
  <!-- Comment 1 start -->
  <details open class="comment" id="comment-1">
    <a href="#comment-1" class="comment-border-link">
      <span class="sr-only">Jump to comment-1</span>
    </a>
    <summary>
      <div class="comment-heading">
        <div class="comment-info">
          <a href="#" class="comment-author-name">someguy14</a>
          <p class="comment-timestamp">4 days ago</p>
        </div>
      </div>
    </summary>

    <div class="comment-body">
      <p>
        This is really great! I fully agree with what you wrote, and this is
        sure to help me out in the future. Thank you for posting this.
      </p>
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
export default {
  name: 'Comment',
};
</script>

<style lang="scss" scoped>
.comment-info {
  display: flex;

  .comment-author-name {
    color: var(--black);
    font-weight: 700;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  .comment-timestamp {
    color: var(--grey);
    margin: 0 0 0 10px;
  }
}

.comment-body p {
  margin: 16px 0;
}
</style>
