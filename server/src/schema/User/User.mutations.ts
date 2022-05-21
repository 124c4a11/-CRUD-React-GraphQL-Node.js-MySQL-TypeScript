import { GraphQLString } from 'graphql';
import { MessageType } from '../Message/Message.type';

import { IUser } from '../../interface/IUser';
import { Users } from '../../entities/Users.entity';


export const createUser = {
  type: MessageType,
  args: {
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
  },
  async resolve(parent: any, args: Omit<IUser, 'id'>) {
    await Users.insert(args);

    return { message: 'Ther user created!' };
  }
};
