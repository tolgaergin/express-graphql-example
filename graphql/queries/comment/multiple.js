import {
  GraphQLID,
  GraphQLNonNull,
  GraphQLList,
} from 'graphql';

import db from '../../../db';
import commentType from '../../types/comment';

export default {
  type: new GraphQLList(commentType),
  args: {
    post_id: {
      name: 'post_id',
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve(root, params, options) {
    return db('comments')
    .where('post_id', params.post_id)
    .then(comments => comments);
  },
};
