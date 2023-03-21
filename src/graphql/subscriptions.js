/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBusiness = /* GraphQL */ `
  subscription OnCreateBusiness($filter: ModelSubscriptionBusinessFilterInput) {
    onCreateBusiness(filter: $filter) {
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
          id
          categoryName
          categoryDescription
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
export const onUpdateBusiness = /* GraphQL */ `
  subscription OnUpdateBusiness($filter: ModelSubscriptionBusinessFilterInput) {
    onUpdateBusiness(filter: $filter) {
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
          id
          categoryName
          categoryDescription
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
export const onDeleteBusiness = /* GraphQL */ `
  subscription OnDeleteBusiness($filter: ModelSubscriptionBusinessFilterInput) {
    onDeleteBusiness(filter: $filter) {
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
          id
          categoryName
          categoryDescription
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateBusinessOwner = /* GraphQL */ `
  subscription OnCreateBusinessOwner(
    $filter: ModelSubscriptionBusinessOwnerFilterInput
  ) {
    onCreateBusinessOwner(filter: $filter) {
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
export const onUpdateBusinessOwner = /* GraphQL */ `
  subscription OnUpdateBusinessOwner(
    $filter: ModelSubscriptionBusinessOwnerFilterInput
  ) {
    onUpdateBusinessOwner(filter: $filter) {
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
export const onDeleteBusinessOwner = /* GraphQL */ `
  subscription OnDeleteBusinessOwner(
    $filter: ModelSubscriptionBusinessOwnerFilterInput
  ) {
    onDeleteBusinessOwner(filter: $filter) {
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
export const onCreateReview = /* GraphQL */ `
  subscription OnCreateReview($filter: ModelSubscriptionReviewFilterInput) {
    onCreateReview(filter: $filter) {
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
export const onUpdateReview = /* GraphQL */ `
  subscription OnUpdateReview($filter: ModelSubscriptionReviewFilterInput) {
    onUpdateReview(filter: $filter) {
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
export const onDeleteReview = /* GraphQL */ `
  subscription OnDeleteReview($filter: ModelSubscriptionReviewFilterInput) {
    onDeleteReview(filter: $filter) {
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
export const onCreateService = /* GraphQL */ `
  subscription OnCreateService($filter: ModelSubscriptionServiceFilterInput) {
    onCreateService(filter: $filter) {
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
export const onUpdateService = /* GraphQL */ `
  subscription OnUpdateService($filter: ModelSubscriptionServiceFilterInput) {
    onUpdateService(filter: $filter) {
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
export const onDeleteService = /* GraphQL */ `
  subscription OnDeleteService($filter: ModelSubscriptionServiceFilterInput) {
    onDeleteService(filter: $filter) {
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
export const onCreateBusinessCategory = /* GraphQL */ `
  subscription OnCreateBusinessCategory(
    $filter: ModelSubscriptionBusinessCategoryFilterInput
  ) {
    onCreateBusinessCategory(filter: $filter) {
      id
      categoryName
      categoryDescription
      createdAt
      updatedAt
      businessCategoriesId
    }
  }
`;
export const onUpdateBusinessCategory = /* GraphQL */ `
  subscription OnUpdateBusinessCategory(
    $filter: ModelSubscriptionBusinessCategoryFilterInput
  ) {
    onUpdateBusinessCategory(filter: $filter) {
      id
      categoryName
      categoryDescription
      createdAt
      updatedAt
      businessCategoriesId
    }
  }
`;
export const onDeleteBusinessCategory = /* GraphQL */ `
  subscription OnDeleteBusinessCategory(
    $filter: ModelSubscriptionBusinessCategoryFilterInput
  ) {
    onDeleteBusinessCategory(filter: $filter) {
      id
      categoryName
      categoryDescription
      createdAt
      updatedAt
      businessCategoriesId
    }
  }
`;
