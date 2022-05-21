import { GraphQLID, GraphQLString } from 'graphql';
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


export const changePassword = {
  type: MessageType,
  args: {
    id: { type: GraphQLID },
    currentPassword: { type: GraphQLString },
    newPassword: { type: GraphQLString },
  },
  async resolve(
    parent: any,
    args: {
      id: IUser['id'],
      currentPassword: IUser['password'],
      newPassword: IUser['password']
    }
  ) {
    const { id, currentPassword, newPassword } = args;
    const user = await Users.findOneBy({ id });

    if (!user) {
      throw new Error("The user doesn't exist!");
    }

    if (user.password !== currentPassword) {
      throw new Error("The password don't match!");
    }

    await Users.update({ id }, { password: newPassword });

    return { message: 'The password updated!' };
  }
};


export const deleteUser = {
  type: MessageType,
  args: {
    id: { type: GraphQLID }
  },
  async resolve(parent: any, args: Pick<IUser, 'id'>) {
    const { id } = args;

    await Users.delete({ id });

    return { message: 'The user deleted!' };
  },
};
