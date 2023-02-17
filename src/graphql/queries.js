/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBusiness = /* GraphQL */ `
  query GetBusiness($id: ID!) {
    getBusiness(id: $id) {
      id
      name
      description
      location
      businessOwnerID
      businessOwner {
        id
        firstName
        lastName
        businesses {
          nextToken
        }
        email
        createdAt
        updatedAt
      }
      reviews {
        items {
          id
          userID
          overallRating
          BusinessID
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      services {
        items {
          id
          title
          description
          price
          image
          businessID
          createdAt
          updatedAt
        }
        nextToken
      }
      categories {
        items {
          categoryID
          categoryName
          id
          createdAt
          updatedAt
          businessCategoriesId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listBusinesses = /* GraphQL */ `
  query ListBusinesses(
    $filter: ModelBusinessFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBusinesses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        location
        businessOwnerID
        businessOwner {
          id
          firstName
          lastName
          email
          createdAt
          updatedAt
        }
        reviews {
          nextToken
        }
        services {
          nextToken
        }
        categories {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      firstName
      lastName
      username
      email
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        username
        email
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getBusinessOwner = /* GraphQL */ `
  query GetBusinessOwner($id: ID!) {
    getBusinessOwner(id: $id) {
      id
      firstName
      lastName
      businesses {
        items {
          id
          name
          description
          location
          businessOwnerID
          createdAt
          updatedAt
        }
        nextToken
      }
      email
      createdAt
      updatedAt
    }
  }
`;
export const listBusinessOwners = /* GraphQL */ `
  query ListBusinessOwners(
    $filter: ModelBusinessOwnerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBusinessOwners(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        businesses {
          nextToken
        }
        email
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getReview = /* GraphQL */ `
  query GetReview($id: ID!) {
    getReview(id: $id) {
      id
      userID
      user {
        id
        firstName
        lastName
        username
        email
        createdAt
        updatedAt
      }
      overallRating
      BusinessID
      Business {
        id
        name
        description
        location
        businessOwnerID
        businessOwner {
          id
          firstName
          lastName
          email
          createdAt
          updatedAt
        }
        reviews {
          nextToken
        }
        services {
          nextToken
        }
        categories {
          nextToken
        }
        createdAt
        updatedAt
      }
      content
      createdAt
      updatedAt
    }
  }
`;
export const listReviews = /* GraphQL */ `
  query ListReviews(
    $filter: ModelReviewFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReviews(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        user {
          id
          firstName
          lastName
          username
          email
          createdAt
          updatedAt
        }
        overallRating
        BusinessID
        Business {
          id
          name
          description
          location
          businessOwnerID
          createdAt
          updatedAt
        }
        content
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getService = /* GraphQL */ `
  query GetService($id: ID!) {
    getService(id: $id) {
      id
      title
      description
      price
      image
      businessID
      businessOwner {
        id
        name
        description
        location
        businessOwnerID
        businessOwner {
          id
          firstName
          lastName
          email
          createdAt
          updatedAt
        }
        reviews {
          nextToken
        }
        services {
          nextToken
        }
        categories {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listServices = /* GraphQL */ `
  query ListServices(
    $filter: ModelServiceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listServices(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        price
        image
        businessID
        businessOwner {
          id
          name
          description
          location
          businessOwnerID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getBusinessCategory = /* GraphQL */ `
  query GetBusinessCategory($id: ID!) {
    getBusinessCategory(id: $id) {
      categoryID
      categoryName
      id
      createdAt
      updatedAt
      businessCategoriesId
    }
  }
`;
export const listBusinessCategories = /* GraphQL */ `
  query ListBusinessCategories(
    $filter: ModelBusinessCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBusinessCategories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        categoryID
        categoryName
        id
        createdAt
        updatedAt
        businessCategoriesId
      }
      nextToken
    }
  }
`;
