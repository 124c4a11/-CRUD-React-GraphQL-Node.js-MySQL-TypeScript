import { gql } from '@apollo/client';


export const CREATE_USER = gql`
  mutation createUser(
    $name: String!,
    $email: String!,
    $password: String!
  ) {
    createUser(
      name: $name,
      email: $email,
      password: $password
    ) { message }
  }
`;


export const CHANGE_PASSWORD = gql`
  mutation changePassword(
    $id: ID!,
    $currentPassword: String!,
    $newPassword: String!
  ) {
    changePassword(
      id: $id,
      currentPassword: $currentPassword,
      newPassword: $newPassword
    ) { message }
  }
`;
