import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser($name: String!, $username: String!, $email: String!,$password: String!, $role: Number!) {
    createUser(name: $name, username: $username, password: $password) {
      id
      name
      username
      email
      password
      role
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser(
    $id: ID!
    $name: String!
    $username: String!
  ) {
    updateUser(
      id: $id
      name: $name
      username: $username
    ) {
      name
      username
    }
  }
`;

export const DELETE_USER = gql`
  mutation deleteUser($id: ID!) {
    deleteUser(id: $id) {
      message
    }
  }
`;