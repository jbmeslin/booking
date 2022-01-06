import {ApolloError} from "apollo-server-express";
import {Company} from "../../models";
import {companiesMock} from "../../mock";


export interface companyParameters {
    id : string
}


const CompanyResolvers = {
    Query: {
        getCompanies() {
            try {
                return companiesMock;
            } catch (error) {
                throw new ApolloError(error as string);
            }
        },

        getCompany(_: any, params: companyParameters): Company {
            try {
                let company = companiesMock.find(c => c.id === params.id);
                if (!company) throw new ApolloError(`Company: ${params.id} not found`); //maybe return undefined

                return company;
            } catch (error) {
                throw new ApolloError(error as string);
            }
        },
    },
}

export default CompanyResolvers;