import { API, graphqlOperation } from 'aws-amplify';
import * as mutations from '../graphql/mutations.js';
import * as queries from '../graphql/queries.js';
import * as subscriptions from '../graphql/subscriptions.js';

export default async function uploadBusinessOwnerToDatabase(businessOwner) {
    let ownerDetails = {
        'firstName': businessOwner.firstName,
        'lastName': businessOwner.lastName,
        'email': businessOwner.email,
    };

   await API.graphql(graphqlOperation(mutations.createBusinessOwner, { input: ownerDetails}));
}
