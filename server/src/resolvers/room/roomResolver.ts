import {ApolloError} from "apollo-server-express";
import {partnersMock, rooms} from "../../mock";
import {Partner, Room} from "../../models";

const RoomResolvers = {
    Query: {

        rooms(_: any, params: any): Room[] | undefined {
            try {
                return rooms;
            } catch (error) {
                throw new ApolloError(error as string);
            }
        },
    },
}

export default RoomResolvers;