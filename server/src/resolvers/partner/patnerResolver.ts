import {ApolloError} from "apollo-server-express";
import {partnersMock} from "../../mock";
import {Partner} from "../../models";
import {partnerParameters} from "./schema";


const PartnerResolvers = {
    Query: {

        getPartners(_: any, params: partnerParameters): Partner[] | undefined {
            try {
                let partners = partnersMock.filter(p => p.companies.find(c =>c.id === params.companyId));

                return partners;
            } catch (error) {
                throw new ApolloError(error as string);
            }
        },
    },
}

export default PartnerResolvers;