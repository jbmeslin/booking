import {gql} from "apollo-server-express";

export interface meetingParameters {
  companyId : string
  meetingInput : meetingInput
}

export interface meetingInput {
  name: string
  roomId: string
  companyId:string
  partnersID: string[]
  hour: number
}

export const meetingTypeDefs = gql`
  
  type Meeting {
    id: ID!
    name: String!
    
    room: Room!
    company: Company!
    partners: [Partner]!
    hour: Int
  }
  
  input MeetingInput {
    name: String!
    roomId: ID!
    companyId: ID!
    partnersID: [ID]!
    hour: Int
  }

  type Query {
    getMeeting(companyId: ID!): [Meeting]
  }
  
  type Mutation {
    createMeeting(meetingInput :MeetingInput): Meeting
  }
`;



