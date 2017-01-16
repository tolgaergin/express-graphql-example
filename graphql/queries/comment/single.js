import {
  GraphQLNonNull,
  GraphQLID,
} from 'graphql';

import db from '../../../db';
import commentType from '../../types/comment';

export default {
  type: commentType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve(root, params, options) {
    return db('comments')
    .where('id', params.id)
    .first()
    .then(comments => comments);
  },
};
