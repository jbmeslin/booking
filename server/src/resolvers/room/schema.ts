import {gql} from "apollo-server-express";

export const roomTypeDefs = gql`
  type Room {
    id: ID!
    name: String!
  }
`;
