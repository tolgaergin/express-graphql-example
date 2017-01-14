import {
  GraphQLList,
  GraphQLID,
  GraphQLNonNull
} from 'graphql';

import db from '../../../db';
import postType from '../../types/post.js';

export default {
  type: postType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve(root, params, options) {
    return db('posts')
    .where('id', params.id)
    .first()
    .then((post) => post);
  },
};
