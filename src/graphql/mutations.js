/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBusiness = /* GraphQL */ `
  mutation CreateBusiness(
    $input: CreateBusinessInput!
    $condition: ModelBusinessConditionInput
  ) {
    createBusiness(input: $input, condition: $condition) {
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
export const updateBusiness = /* GraphQL */ `
  mutation UpdateBusiness(
    $input: UpdateBusinessInput!
    $condition: ModelBusinessConditionInput
  ) {
    updateBusiness(input: $input, condition: $condition) {
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
export const deleteBusiness = /* GraphQL */ `
  mutation DeleteBusiness(
    $input: DeleteBusinessInput!
    $condition: ModelBusinessConditionInput
  ) {
    deleteBusiness(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createBusinessOwner = /* GraphQL */ `
  mutation CreateBusinessOwner(
    $input: CreateBusinessOwnerInput!
    $condition: ModelBusinessOwnerConditionInput
  ) {
    createBusinessOwner(input: $input, condition: $condition) {
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
export const updateBusinessOwner = /* GraphQL */ `
  mutation UpdateBusinessOwner(
    $input: UpdateBusinessOwnerInput!
    $condition: ModelBusinessOwnerConditionInput
  ) {
    updateBusinessOwner(input: $input, condition: $condition) {
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
export const deleteBusinessOwner = /* GraphQL */ `
  mutation DeleteBusinessOwner(
    $input: DeleteBusinessOwnerInput!
    $condition: ModelBusinessOwnerConditionInput
  ) {
    deleteBusinessOwner(input: $input, condition: $condition) {
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
export const createReview = /* GraphQL */ `
  mutation CreateReview(
    $input: CreateReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    createReview(input: $input, condition: $condition) {
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
export const updateReview = /* GraphQL */ `
  mutation UpdateReview(
    $input: UpdateReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    updateReview(input: $input, condition: $condition) {
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
export const deleteReview = /* GraphQL */ `
  mutation DeleteReview(
    $input: DeleteReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    deleteReview(input: $input, condition: $condition) {
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
export const createService = /* GraphQL */ `
  mutation CreateService(
    $input: CreateServiceInput!
    $condition: ModelServiceConditionInput
  ) {
    createService(input: $input, condition: $condition) {
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
export const updateService = /* GraphQL */ `
  mutation UpdateService(
    $input: UpdateServiceInput!
    $condition: ModelServiceConditionInput
  ) {
    updateService(input: $input, condition: $condition) {
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
export const deleteService = /* GraphQL */ `
  mutation DeleteService(
    $input: DeleteServiceInput!
    $condition: ModelServiceConditionInput
  ) {
    deleteService(input: $input, condition: $condition) {
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
export const createBusinessCategory = /* GraphQL */ `
  mutation CreateBusinessCategory(
    $input: CreateBusinessCategoryInput!
    $condition: ModelBusinessCategoryConditionInput
  ) {
    createBusinessCategory(input: $input, condition: $condition) {
      categoryID
      categoryName
      id
      createdAt
      updatedAt
      businessCategoriesId
    }
  }
`;
export const updateBusinessCategory = /* GraphQL */ `
  mutation UpdateBusinessCategory(
    $input: UpdateBusinessCategoryInput!
    $condition: ModelBusinessCategoryConditionInput
  ) {
    updateBusinessCategory(input: $input, condition: $condition) {
      categoryID
      categoryName
      id
      createdAt
      updatedAt
      businessCategoriesId
    }
  }
`;
export const deleteBusinessCategory = /* GraphQL */ `
  mutation DeleteBusinessCategory(
    $input: DeleteBusinessCategoryInput!
    $condition: ModelBusinessCategoryConditionInput
  ) {
    deleteBusinessCategory(input: $input, condition: $condition) {
      categoryID
      categoryName
      id
      createdAt
      updatedAt
      businessCategoriesId
    }
  }
`;
