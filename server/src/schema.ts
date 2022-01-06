import { makeExecutableSchema } from "graphql-tools";
import {helloTypeDefs} from "./resolvers/schema";
import HelloResolvers from "./resolvers/helloResolver";
import {companyTypeDefs} from "./resolvers/company/schema";
import CompanyResolvers from "./resolvers/company/companyResolver";
import {partnerTypeDefs} from "./resolvers/partner/schema";
import PartnerResolvers from "./resolvers/partner/patnerResolver";
import {roomTypeDefs} from "./resolvers/room/schema";
import MeetingResolvers from "./resolvers/meeting/meetingResolver";
import {meetingTypeDefs} from "./resolvers/meeting/schema";

export const schema = makeExecutableSchema({
    typeDefs: [helloTypeDefs, roomTypeDefs, companyTypeDefs, partnerTypeDefs, meetingTypeDefs],
    resolvers: [HelloResolvers, CompanyResolvers, PartnerResolvers, MeetingResolvers],
    //todo: add datasource
});
