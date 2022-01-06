import {gql} from "apollo-server-express";

export const companyTypeDefs = gql`
  type Company {
    id: ID!
    name: String!
  }

  type Query {
    getCompanies: [Company]
    getCompany(id: ID!): Company
  }
`;

