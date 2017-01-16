import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID,
  GraphQLList,
} from 'graphql';

import DataLoader from 'dataloader';
import commentType from './comment';
import db from '../../db';

// http://gajus.com/blog/9/using-dataloader-to-batch-requests

const getCommentsByPostId = (postId) => db('comments')
  .where('post_id', postId)
  .then(comments => comments);

const commentLoader = new DataLoader(ids => Promise.all(ids.map(getCommentsByPostId)));

export default new GraphQLObjectType({
  name: 'Post',
  fields: {
    _id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    title: {
      type: GraphQLString,
    },
    description: {
      type: GraphQLString,
    },
    comments: {
      type: new GraphQLList(commentType),
      resolve: function (post) {
        return commentLoader.load(post.id);
      },
    },
  },
});
