import {gql} from "apollo-server-express";

export const partnerTypeDefs = gql`
  type Partner {
    id: ID!
    name: String!
    companies: [Company]
  }

  type Query {
    getPartners (companyId: ID!): [Partner]
  }
`;

export interface partnerParameters {
  companyId : string
}

