import { GraphQLObjectType, GraphQLSchema } from 'graphql';

import { changePassword, createUser } from './User/User.mutations';
import { getAllUsers } from './User/User.queries';


const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: { getAllUsers },
});


const RootMutation = new GraphQLObjectType({
  name: 'RootMutation',
  fields: {
    createUser,
    changePassword,
  },
});


export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation,
});
