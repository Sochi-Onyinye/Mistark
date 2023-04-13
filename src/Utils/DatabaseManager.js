import { API, graphqlOperation} from '@aws-amplify/api';
import { Storage } from "@aws-amplify/storage"
import * as mutations from '../graphql/mutations.js';
import * as queries from '../graphql/queries.js';
import Category from '../Models/Category.js'
import Business from '../Models/Business.js';
import Review from '../Models/Review.js';

export async function uploadBusinessOwnerToDatabase(businessOwner) {
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

export async function uploadBusinessDatabase(businessOwner) {
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

export async function fetchAllBusinessesFromDatabase() {
    try {
        const response_data = await API.graphql(graphqlOperation(queries.listBusinesses));
        console.log(response_data)
        const items = response_data.data.listBusinesses.items;
        console.log(items)
        const businesses = createBusinessesFromDatabaseMap(items)
        console.log("biddsd", businesses)
        return businesses
    } catch(e) {
        console.log("nothing")
        console.error(e);
    }
}

export async function fetchBusinessesFromDatabase(business_id) {
    try {
        const response = await API.graphql(graphqlOperation(queries.getBusiness, {id: business_id}));
        return response
    } catch(e) {
        console.error(e);
    }
}

export async function fetchAllBusinessesCategoriesFromDatabase() {
    try {
        const response_data = await API.graphql(graphqlOperation(queries.listBusinessCategories));
        const items = response_data.data.listBusinessCategories.items;
        const categories = createBusinessesCategoryFromDatabaseMap(items)
        return categories;
    } catch(e) {
        console.error(e);
    }
}

export async function fetchAllBusinessesBasedOnFilterFromDatabase (filter, sort, aggregate, limit) {
    try {
        const response_data = await API.graphql(graphqlOperation(queries.searchBusinesses()));
        const items = response_data.data.listBusinessCategories.items;
        const businesses = await createBusinessesFromDatabaseMap(items) 
        return  businesses;
    } catch(e) {
        console.error(e);
    }
}

export async function getAllReviewsForBusiness(business) {
    const filter = {businessID: {eq: business.getID()}}
    try {
        const reviews = await API.graphql(graphqlOperation(queries.listReviews, {filter: filter}))
        return reviews
    } catch(e) {
        console.error(e);
    }
}

export async function getAllServicesForBusiness(business) {
    const filter = {businessID: {eq: business.getID()}}
    try {
        const businesses = await API.graphql(graphqlOperation(queries.listBusinesses,  {filter: filter}));
        return businesses
    } catch(e) {
        console.error(e)
    }
}

async function createBusinessesCategoryFromDatabaseMap(categories) {
    const list_of_categories = categories.map(category => {
        if (category === null) {
            return null
        }
        const new_category = new Category(category.categoryName, category.categoryDescription, category.id)
        return new_category 
    })
    return list_of_categories;
}

export async function createBusinessesFromDatabaseMap(businesses) {
    const list_of_businesses = await Promise.all(businesses.map(async (business) => {
        if (business === null) {
            return null;
        }
        console.log(business.profileImage)
        const profileImage = await Storage.get(business.profileImage, {level: 'public'})
        const images = business.images? await Promise.all(business.images.map(async(image) => {
            if (image === null) {
                return null;
            }
            return await Storage.get(image)
        })):null;
        return new Business(business.id, business.name, business.owner, business.description, business.address, business.location, business.hours, business.category, profileImage, images)
    }))
    return list_of_businesses;
}

export async function getS3urlFromFileName(filename) {
    const url = await Storage.get(filename, {level: 'public'});
    return url;
}

