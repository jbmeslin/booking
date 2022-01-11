import {gql} from "@apollo/client";

export const companyQuery = gql`
    query company($companyId: ID!) {
        getCompanies {
            name
        }
        getCompany(id: $companyId) {
            id
            name
        }
        getPartners(companyId: $companyId) {
            id
            name
        }
        rooms {
            id
            name
        }
        getMeeting(companyId: $companyId) {
            id,
            name,
            partners {
                name
            }
        }
    }
`

export const companyMeetingQuery = gql`
    query getMeeting($companyId: ID!) {
        getMeeting(companyId: $companyId) {
            id,
            name,
            hour
            room {
                name
            }
            partners {
                id
                name
            }
        }
    }
`

export const createMeetingMutation = gql`mutation CreateMeeting($input: MeetingInput) {
    createMeeting(meetingInput: $input) {
        name
    }
}`

export interface MeetingInput {
    name: string
    roomId: string
    companyId:string
    partnersID: string[]
    hour: number
}