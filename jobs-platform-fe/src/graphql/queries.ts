/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getWorkExperience = /* GraphQL */ `
  query GetWorkExperience($id: ID!) {
    getWorkExperience(id: $id) {
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
export const listWorkExperiences = /* GraphQL */ `
  query ListWorkExperiences(
    $filter: ModelWorkExperienceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWorkExperiences(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        experienceId
        userId
        user {
          userId
          firstName
          lastName
          company
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
      nextToken
    }
  }
`;
export const getEducation = /* GraphQL */ `
  query GetEducation($id: ID!) {
    getEducation(id: $id) {
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
export const listEducations = /* GraphQL */ `
  query ListEducations(
    $filter: ModelEducationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEducations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        educationId
        userId
        user {
          userId
          firstName
          lastName
          company
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
      nextToken
    }
  }
`;
