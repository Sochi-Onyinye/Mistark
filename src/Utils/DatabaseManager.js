import { API, graphqlOperation} from '@aws-amplify/api';
import * as mutations from '../graphql/mutations.js';
import * as queries from '../graphql/queries.js';
import * as subscriptions from '../graphql/subscriptions.js';

export default async function uploadBusinessOwnerToDatabase(businessOwner) {
    let ownerDetails = {
        'firstName': businessOwner.getFName(),
        'id' : businessOwner.getID(),
        'lastName': businessOwner.getLName(),
        'email': businessOwner.getEmail(),
    };
    try {
        await API.graphql(graphqlOperation(mutations.createBusinessOwner, { input: ownerDetails}));
    } catch(e) {
        console.log(e)
    }
}

export default async function uploadBusinessDatabase(businessOwner) {
    let businessDetails = {
        'firstName': businessOwner.getFName(),
        'id' : businessOwner.getID(),
        'lastName': businessOwner.getLName(),
        'email': businessOwner.getEmail(),
    };
    try {
        await API.graphql(graphqlOperation(mutations.createBusinessOwner, { input: businessDetails}));
    } catch(e) {
        console.log(e)
    }
}


export async function getAllBusinessesFromDatabase() {
    try {
        const businesses = await API.graphql(graphqlOperation(queries.listBusinesses));
        return businesses
    } catch(e){
        console.error(e);
    }
}

export async function getAllReviewsForBusiness(business) {
    const filter = {businessID: {eq: business.getID()}}
    try {
        const reviews = await API.graphql(graphqlOperation(queries.listReviews, {filter: filter}))
        return reviews
    } catch(e){
        console.error(e);
    }
}

export async function getAllServicesForBusiness(business) {
    const filter = {businessID: {eq: business.getID()}}
    try {
        const businesses = await API.graphql(graphqlOperation(queries.listBusinesses));
        return businesses
    } catch(e) {
        console.error(e);
    }
}
