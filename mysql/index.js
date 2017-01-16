import db from '../db';

export default {
  find() {
    db('comments')
    .where('post_id', post.id)
    .then(comments => comments);
  },
};
