import { GraphQLObjectType, GraphQLSchema } from 'graphql';

import { createUser } from './User/User.mutations';
import { getAllUsers } from './User/User.queries';


const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: { getAllUsers },
});


const RootMutation = new GraphQLObjectType({
  name: 'RootMutation',
  fields: {
    createUser,
  },
});


export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation,
});
