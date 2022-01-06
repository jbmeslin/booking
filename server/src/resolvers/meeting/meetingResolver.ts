import {ApolloError} from "apollo-server-express";
import {Meeting} from "../../models";
import {meetingParameters} from "./schema";
import {companiesMock, partnersMock, rooms} from "../../mock";

let meetings: Meeting[] = [];

const MeetingResolvers = {
    Query: {
        getMeeting(_: any, params: meetingParameters): Meeting[] | undefined {
            try {

                return meetings.map(m => (
                        {...m ,
                            partners:  m.partners.filter(p => p.companies.find(c =>c.id === params.companyId)) // filter patners
                        }
                    ));
            } catch (error) {
                throw new ApolloError(error as string);
            }
        },
    },

    Mutation: {
        createMeeting (_: any, params: meetingParameters): Meeting { // todo should use data source
            try {
                let input = params.meetingInput;
                console.log(input)
                let meeting: Meeting = {
                    id : meetings.length.toString(),
                    name: input.name,
                    room: rooms.find(r => r.id === input.roomId)!,
                    company: companiesMock.find(c => c.id === input.companyId)!,
                    hour: input.hour,
                    partners: partnersMock.filter(p => input.partnersID.includes(p.id))
                }

                meetings.push(meeting)
                return meetings[meetings.length - 1];
            } catch (error) {
                throw new ApolloError(error as string);
            }
        },
    },
}

export default MeetingResolvers;