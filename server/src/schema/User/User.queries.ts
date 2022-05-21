import { GraphQLList } from 'graphql';

import { UserType } from './User.type';
import { Users } from '../../entities/Users.entity';

export const getAllUsers = {
  type: new GraphQLList(UserType),
  async resolve() {
    return Users.find();
  }
};
