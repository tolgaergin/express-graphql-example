import {
  GraphQLList
} from 'graphql';

import db from '../../../db';
import postType from '../../types/post';

export default {
  type: new GraphQLList(postType),
  args: {},
  resolve(root, params, options) {
    return db('posts')
    .then(posts => posts);
  },
};
