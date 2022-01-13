/**
 * Totally stolen from https://stackoverflow.com/a/40732240/16315892
 */
const buildCommentTree = data => {
  const idMap = Object.create(null);
  data.forEach(c => (idMap[c.id] = { ...c, replies: [] }));
  const dataTree = [];
  data.forEach(c => {
    if (c.parent_comment.id) {
      idMap[c.parent_comment.id].replies.push(idMap[c.id]);
    } else dataTree.push(idMap[c.id]);
  });
  return dataTree;
};

export default class CommentService {
  constructor(prismic) {
    this.$prismic = prismic;
    this.commentsReady = false;
  }

  async getComments() {
    if (!this.commentsReady) {
      await this._fetchComments();
    }
    return this.comments || [];
  }

  async _fetchComments() {
    try {
      const res = await this.$prismic.client.getAll(
        // This is not working at present
        this.$prismic.predicate.at('document.type', 'comment')
      );
      // TODO: remove filter once prismic api behaves
      const flatComments = res
        .filter(d => d.type === 'comment')
        // Already have authors in res so passing in, but unlikely to be the case when API works
        .map(c => this._formatCommentWithAuthor(c, res));

      this.comments = buildCommentTree(flatComments);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
      throw err;
    }
  }

  _formatCommentWithAuthor(comment, data) {
    let author = data.find(
      d => d.type === 'author' && d.id === comment.data.author.id
    )?.data;
    if (!author) {
      author = {
        name: 'Anonymous',
      };
    }
    return { ...comment.data, id: comment.id, author };
  }
}
