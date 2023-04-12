/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const nearbyBusinesses = /* GraphQL */ `
  query NearbyBusinesses(
    $location: LocationInput!
    $m: Int
    $limit: Int
    $nextToken: String
  ) {
    nearbyBusinesses(
      location: $location
      m: $m
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        description
        address
        location {
          lat
          lon
        }
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
        categoryID
        category {
          id
          categoryName
          categoryDescription
          createdAt
          updatedAt
        }
        profileImage
        images
        createdAt
        updatedAt
      }
      total
      nextToken
    }
  }
`;
export const getBusiness = /* GraphQL */ `
  query GetBusiness($id: ID!) {
    getBusiness(id: $id) {
      id
      name
      description
      address
      location {
        lat
        lon
      }
      businessOwnerID
      businessOwner {
        id
        firstName
        lastName
        businesses {
          total
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
          moneyRating
          serviceRating
          locationRating
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
      categoryID
      category {
        id
        categoryName
        categoryDescription
        createdAt
        updatedAt
      }
      profileImage
      images
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
        address
        location {
          lat
          lon
        }
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
        categoryID
        category {
          id
          categoryName
          categoryDescription
          createdAt
          updatedAt
        }
        profileImage
        images
        createdAt
        updatedAt
      }
      total
      nextToken
    }
  }
`;
export const searchBusinesses = /* GraphQL */ `
  query SearchBusinesses(
    $filter: SearchableBusinessFilterInput
    $sort: [SearchableBusinessSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableBusinessAggregationInput]
  ) {
    searchBusinesses(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
        name
        description
        address
        location {
          lat
          lon
        }
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
        categoryID
        category {
          id
          categoryName
          categoryDescription
          createdAt
          updatedAt
        }
        profileImage
        images
        createdAt
        updatedAt
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
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
          address
          businessOwnerID
          categoryID
          profileImage
          images
          createdAt
          updatedAt
        }
        total
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
          total
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
      moneyRating
      serviceRating
      locationRating
      BusinessID
      Business {
        id
        name
        description
        address
        location {
          lat
          lon
        }
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
        categoryID
        category {
          id
          categoryName
          categoryDescription
          createdAt
          updatedAt
        }
        profileImage
        images
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
        moneyRating
        serviceRating
        locationRating
        BusinessID
        Business {
          id
          name
          description
          address
          businessOwnerID
          categoryID
          profileImage
          images
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
        address
        location {
          lat
          lon
        }
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
        categoryID
        category {
          id
          categoryName
          categoryDescription
          createdAt
          updatedAt
        }
        profileImage
        images
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
          address
          businessOwnerID
          categoryID
          profileImage
          images
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
export const searchServices = /* GraphQL */ `
  query SearchServices(
    $filter: SearchableServiceFilterInput
    $sort: [SearchableServiceSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableServiceAggregationInput]
  ) {
    searchServices(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
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
          address
          businessOwnerID
          categoryID
          profileImage
          images
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const getBusinessCategory = /* GraphQL */ `
  query GetBusinessCategory($id: ID!) {
    getBusinessCategory(id: $id) {
      id
      categoryName
      categoryDescription
      createdAt
      updatedAt
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
        id
        categoryName
        categoryDescription
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const searchBusinessCategories = /* GraphQL */ `
  query SearchBusinessCategories(
    $filter: SearchableBusinessCategoryFilterInput
    $sort: [SearchableBusinessCategorySortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableBusinessCategoryAggregationInput]
  ) {
    searchBusinessCategories(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
        categoryName
        categoryDescription
        createdAt
        updatedAt
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
