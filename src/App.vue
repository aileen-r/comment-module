<template>
  <transition-group name="fade" appear>
    <header key="header">
      <octocat-corner
        fillColor="black"
        githubUrl="https://github.com/aileen-r/comment-module"
      />
      <h1 class="header">Comment Module</h1>
    </header>
    <card key="card">
      <comment
        v-for="comment in comments"
        :key="comment.id"
        :comment="comment"
      />
    </card>
  </transition-group>
</template>

<script>
import Card from './components/Card';
import Comment from './components/Comment';
import OctocatCorner from './components/OctocatCorner';

export default {
  name: 'App',
  components: {
    Card,
    Comment,
    OctocatCorner,
  },

  data() {
    return {
      comments: [],
      flatComments: [],
    };
  },

  // TODO - consider how to abstract data logic away and while still accessing this.$prismic
  methods: {
    /**
     * Totally stolen from https://stackoverflow.com/a/40732240/16315892
     */
    buildCommentTree() {
      const idMap = Object.create(null);
      this.flatComments.forEach(c => (idMap[c.id] = { ...c, replies: [] }));
      const dataTree = [];
      this.flatComments.forEach(c => {
        if (c.parent_comment.id) {
          idMap[c.parent_comment.id].replies.push(idMap[c.id]);
        } else dataTree.push(idMap[c.id]);
      });
      this.comments = dataTree;
    },

    async fetchComments() {
      try {
        const res = await this.$prismic.client.getAll(
          // This is not working at present
          this.$prismic.predicate.at('document.type', 'comment')
        );
        // TODO: remove filter once prismic api behaves
        this.flatComments = res
          .filter(d => d.type === 'comment')
          // Already have authors in res so passing in, but unlikely to be the case when API works
          .map(c => this.formatCommentWithAuthor(c, res));

        this.buildCommentTree();
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error(err);
      }
    },

    formatCommentWithAuthor(comment, data) {
      let author = data.find(
        d => d.type === 'author' && d.id === comment.data.author.id
      )?.data;
      if (!author) {
        author = {
          name: 'Anonymous',
        };
      }
      return { ...comment.data, id: comment.id, author };
    },
  },

  created() {
    this.fetchComments();
  },
};
</script>

<style lang="scss">
#app {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  padding: 35px 15px;

  @media screen and (min-width: $bp-md) {
    padding: 20px 40px;
  }
}

.header {
  color: var(--white);
  font-size: 26px;
  margin-top: 0;
  text-align: center;
  text-shadow: 0 2px 7px var(--light-grey);

  @media screen and (min-width: $bp-sm) {
    font-size: 30px;
  }

  @media screen and (min-width: $bp-md) {
    font-size: 36px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
