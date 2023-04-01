import gql from "graphql-tag";

export const LOGIN = gql`
  mutation authUser($email: String!, $password: String!) {
    authUser(email: $email, password: $password) {
      token
    }
  }
`;

export const REGISTER = gql`
  mutation registerUser($email: String!, $password: String!) {
    registerUser(email: $email, password: $password) {
      email
      name
      password
      token
    }
  }
`;

export const Signup = gql`
  mutation Mutation($data: SignupInput!) {
    signup(data: $data) {
      user {
        firstname
        email
        role
      }
    }
  }
`;
