/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateWorkExperience = /* GraphQL */ `
  subscription OnCreateWorkExperience {
    onCreateWorkExperience {
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
export const onUpdateWorkExperience = /* GraphQL */ `
  subscription OnUpdateWorkExperience {
    onUpdateWorkExperience {
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
export const onDeleteWorkExperience = /* GraphQL */ `
  subscription OnDeleteWorkExperience {
    onDeleteWorkExperience {
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
export const onCreateEducation = /* GraphQL */ `
  subscription OnCreateEducation {
    onCreateEducation {
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
export const onUpdateEducation = /* GraphQL */ `
  subscription OnUpdateEducation {
    onUpdateEducation {
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
export const onDeleteEducation = /* GraphQL */ `
  subscription OnDeleteEducation {
    onDeleteEducation {
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
