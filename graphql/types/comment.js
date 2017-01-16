import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID,
} from 'graphql';

export default new GraphQLObjectType({
  name: 'Comment',
  fields: {
    _id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    post_id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    text: {
      type: GraphQLString,
    },
  },
});
