/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      userId
      firstName
      lastName
      company
      workExperiences {
        items {
          experienceId
          userId
          title
          startDate
          endDate
          employer
          description
          id
          createdAt
          updatedAt
          userWorkExperiencesId
        }
        nextToken
      }
      educations {
        items {
          educationId
          userId
          startDate
          endDate
          institution
          degree
          id
          createdAt
          updatedAt
          userEducationsId
        }
        nextToken
      }
      id
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
      userId
      firstName
      lastName
      company
      workExperiences {
        items {
          experienceId
          userId
          title
          startDate
          endDate
          employer
          description
          id
          createdAt
          updatedAt
          userWorkExperiencesId
        }
        nextToken
      }
      educations {
        items {
          educationId
          userId
          startDate
          endDate
          institution
          degree
          id
          createdAt
          updatedAt
          userEducationsId
        }
        nextToken
      }
      id
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
      userId
      firstName
      lastName
      company
      workExperiences {
        items {
          experienceId
          userId
          title
          startDate
          endDate
          employer
          description
          id
          createdAt
          updatedAt
          userWorkExperiencesId
        }
        nextToken
      }
      educations {
        items {
          educationId
          userId
          startDate
          endDate
          institution
          degree
          id
          createdAt
          updatedAt
          userEducationsId
        }
        nextToken
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const createWorkExperience = /* GraphQL */ `
  mutation CreateWorkExperience(
    $input: CreateWorkExperienceInput!
    $condition: ModelWorkExperienceConditionInput
  ) {
    createWorkExperience(input: $input, condition: $condition) {
      experienceId
      userId
      user {
        userId
        firstName
        lastName
        company
        workExperiences {
          nextToken
        }
        educations {
          nextToken
        }
        id
        createdAt
        updatedAt
      }
      title
      startDate
      endDate
      employer
      description
      id
      createdAt
      updatedAt
      userWorkExperiencesId
    }
  }
`;
export const updateWorkExperience = /* GraphQL */ `
  mutation UpdateWorkExperience(
    $input: UpdateWorkExperienceInput!
    $condition: ModelWorkExperienceConditionInput
  ) {
    updateWorkExperience(input: $input, condition: $condition) {
      experienceId
      userId
      user {
        userId
        firstName
        lastName
        company
        workExperiences {
          nextToken
        }
        educations {
          nextToken
        }
        id
        createdAt
        updatedAt
      }
      title
      startDate
      endDate
      employer
      description
      id
      createdAt
      updatedAt
      userWorkExperiencesId
    }
  }
`;
export const deleteWorkExperience = /* GraphQL */ `
  mutation DeleteWorkExperience(
    $input: DeleteWorkExperienceInput!
    $condition: ModelWorkExperienceConditionInput
  ) {
    deleteWorkExperience(input: $input, condition: $condition) {
      experienceId
      userId
      user {
        userId
        firstName
        lastName
        company
        workExperiences {
          nextToken
        }
        educations {
          nextToken
        }
        id
        createdAt
        updatedAt
      }
      title
      startDate
      endDate
      employer
      description
      id
      createdAt
      updatedAt
      userWorkExperiencesId
    }
  }
`;
export const createEducation = /* GraphQL */ `
  mutation CreateEducation(
    $input: CreateEducationInput!
    $condition: ModelEducationConditionInput
  ) {
    createEducation(input: $input, condition: $condition) {
      educationId
      userId
      user {
        userId
        firstName
        lastName
        company
        workExperiences {
          nextToken
        }
        educations {
          nextToken
        }
        id
        createdAt
        updatedAt
      }
      startDate
      endDate
      institution
      degree
      id
      createdAt
      updatedAt
      userEducationsId
    }
  }
`;
export const updateEducation = /* GraphQL */ `
  mutation UpdateEducation(
    $input: UpdateEducationInput!
    $condition: ModelEducationConditionInput
  ) {
    updateEducation(input: $input, condition: $condition) {
      educationId
      userId
      user {
        userId
        firstName
        lastName
        company
        workExperiences {
          nextToken
        }
        educations {
          nextToken
        }
        id
        createdAt
        updatedAt
      }
      startDate
      endDate
      institution
      degree
      id
      createdAt
      updatedAt
      userEducationsId
    }
  }
`;
export const deleteEducation = /* GraphQL */ `
  mutation DeleteEducation(
    $input: DeleteEducationInput!
    $condition: ModelEducationConditionInput
  ) {
    deleteEducation(input: $input, condition: $condition) {
      educationId
      userId
      user {
        userId
        firstName
        lastName
        company
        workExperiences {
          nextToken
        }
        educations {
          nextToken
        }
        id
        createdAt
        updatedAt
      }
      startDate
      endDate
      institution
      degree
      id
      createdAt
      updatedAt
      userEducationsId
    }
  }
`;
