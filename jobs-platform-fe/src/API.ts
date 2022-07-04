/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  userId: string,
  firstName: string,
  lastName: string,
  company?: string | null,
  id?: string | null,
};

export type ModelUserConditionInput = {
  userId?: ModelIDInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  company?: ModelIDInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type User = {
  __typename: "User",
  userId: string,
  firstName: string,
  lastName: string,
  company?: string | null,
  workExperiences?: ModelWorkExperienceConnection | null,
  educations?: ModelEducationConnection | null,
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type ModelWorkExperienceConnection = {
  __typename: "ModelWorkExperienceConnection",
  items:  Array<WorkExperience | null >,
  nextToken?: string | null,
};

export type WorkExperience = {
  __typename: "WorkExperience",
  experienceId: string,
  userId: string,
  user?: User | null,
  title: string,
  startDate: string,
  endDate?: string | null,
  employer: string,
  description?: string | null,
  id: string,
  createdAt: string,
  updatedAt: string,
  userWorkExperiencesId?: string | null,
};

export type ModelEducationConnection = {
  __typename: "ModelEducationConnection",
  items:  Array<Education | null >,
  nextToken?: string | null,
};

export type Education = {
  __typename: "Education",
  educationId: string,
  userId: string,
  user?: User | null,
  startDate: string,
  endDate?: string | null,
  institution: string,
  degree: string,
  id: string,
  createdAt: string,
  updatedAt: string,
  userEducationsId?: string | null,
};

export type UpdateUserInput = {
  userId?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  company?: string | null,
  id: string,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateWorkExperienceInput = {
  experienceId: string,
  userId: string,
  title: string,
  startDate: string,
  endDate?: string | null,
  employer: string,
  description?: string | null,
  id?: string | null,
  userWorkExperiencesId?: string | null,
};

export type ModelWorkExperienceConditionInput = {
  experienceId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  title?: ModelStringInput | null,
  startDate?: ModelStringInput | null,
  endDate?: ModelStringInput | null,
  employer?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelWorkExperienceConditionInput | null > | null,
  or?: Array< ModelWorkExperienceConditionInput | null > | null,
  not?: ModelWorkExperienceConditionInput | null,
  userWorkExperiencesId?: ModelIDInput | null,
};

export type UpdateWorkExperienceInput = {
  experienceId?: string | null,
  userId?: string | null,
  title?: string | null,
  startDate?: string | null,
  endDate?: string | null,
  employer?: string | null,
  description?: string | null,
  id: string,
  userWorkExperiencesId?: string | null,
};

export type DeleteWorkExperienceInput = {
  id: string,
};

export type CreateEducationInput = {
  educationId: string,
  userId: string,
  startDate: string,
  endDate?: string | null,
  institution: string,
  degree: string,
  id?: string | null,
  userEducationsId?: string | null,
};

export type ModelEducationConditionInput = {
  educationId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  startDate?: ModelStringInput | null,
  endDate?: ModelStringInput | null,
  institution?: ModelStringInput | null,
  degree?: ModelStringInput | null,
  and?: Array< ModelEducationConditionInput | null > | null,
  or?: Array< ModelEducationConditionInput | null > | null,
  not?: ModelEducationConditionInput | null,
  userEducationsId?: ModelIDInput | null,
};

export type UpdateEducationInput = {
  educationId?: string | null,
  userId?: string | null,
  startDate?: string | null,
  endDate?: string | null,
  institution?: string | null,
  degree?: string | null,
  id: string,
  userEducationsId?: string | null,
};

export type DeleteEducationInput = {
  id: string,
};

export type ModelUserFilterInput = {
  userId?: ModelIDInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  company?: ModelIDInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelWorkExperienceFilterInput = {
  experienceId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  title?: ModelStringInput | null,
  startDate?: ModelStringInput | null,
  endDate?: ModelStringInput | null,
  employer?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelWorkExperienceFilterInput | null > | null,
  or?: Array< ModelWorkExperienceFilterInput | null > | null,
  not?: ModelWorkExperienceFilterInput | null,
  userWorkExperiencesId?: ModelIDInput | null,
};

export type ModelEducationFilterInput = {
  educationId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  startDate?: ModelStringInput | null,
  endDate?: ModelStringInput | null,
  institution?: ModelStringInput | null,
  degree?: ModelStringInput | null,
  and?: Array< ModelEducationFilterInput | null > | null,
  or?: Array< ModelEducationFilterInput | null > | null,
  not?: ModelEducationFilterInput | null,
  userEducationsId?: ModelIDInput | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    userId: string,
    firstName: string,
    lastName: string,
    company?: string | null,
    workExperiences?:  {
      __typename: "ModelWorkExperienceConnection",
      items:  Array< {
        __typename: "WorkExperience",
        experienceId: string,
        userId: string,
        title: string,
        startDate: string,
        endDate?: string | null,
        employer: string,
        description?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        userWorkExperiencesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    educations?:  {
      __typename: "ModelEducationConnection",
      items:  Array< {
        __typename: "Education",
        educationId: string,
        userId: string,
        startDate: string,
        endDate?: string | null,
        institution: string,
        degree: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        userEducationsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    userId: string,
    firstName: string,
    lastName: string,
    company?: string | null,
    workExperiences?:  {
      __typename: "ModelWorkExperienceConnection",
      items:  Array< {
        __typename: "WorkExperience",
        experienceId: string,
        userId: string,
        title: string,
        startDate: string,
        endDate?: string | null,
        employer: string,
        description?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        userWorkExperiencesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    educations?:  {
      __typename: "ModelEducationConnection",
      items:  Array< {
        __typename: "Education",
        educationId: string,
        userId: string,
        startDate: string,
        endDate?: string | null,
        institution: string,
        degree: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        userEducationsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    userId: string,
    firstName: string,
    lastName: string,
    company?: string | null,
    workExperiences?:  {
      __typename: "ModelWorkExperienceConnection",
      items:  Array< {
        __typename: "WorkExperience",
        experienceId: string,
        userId: string,
        title: string,
        startDate: string,
        endDate?: string | null,
        employer: string,
        description?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        userWorkExperiencesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    educations?:  {
      __typename: "ModelEducationConnection",
      items:  Array< {
        __typename: "Education",
        educationId: string,
        userId: string,
        startDate: string,
        endDate?: string | null,
        institution: string,
        degree: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        userEducationsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateWorkExperienceMutationVariables = {
  input: CreateWorkExperienceInput,
  condition?: ModelWorkExperienceConditionInput | null,
};

export type CreateWorkExperienceMutation = {
  createWorkExperience?:  {
    __typename: "WorkExperience",
    experienceId: string,
    userId: string,
    user?:  {
      __typename: "User",
      userId: string,
      firstName: string,
      lastName: string,
      company?: string | null,
      workExperiences?:  {
        __typename: "ModelWorkExperienceConnection",
        nextToken?: string | null,
      } | null,
      educations?:  {
        __typename: "ModelEducationConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    title: string,
    startDate: string,
    endDate?: string | null,
    employer: string,
    description?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    userWorkExperiencesId?: string | null,
  } | null,
};

export type UpdateWorkExperienceMutationVariables = {
  input: UpdateWorkExperienceInput,
  condition?: ModelWorkExperienceConditionInput | null,
};

export type UpdateWorkExperienceMutation = {
  updateWorkExperience?:  {
    __typename: "WorkExperience",
    experienceId: string,
    userId: string,
    user?:  {
      __typename: "User",
      userId: string,
      firstName: string,
      lastName: string,
      company?: string | null,
      workExperiences?:  {
        __typename: "ModelWorkExperienceConnection",
        nextToken?: string | null,
      } | null,
      educations?:  {
        __typename: "ModelEducationConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    title: string,
    startDate: string,
    endDate?: string | null,
    employer: string,
    description?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    userWorkExperiencesId?: string | null,
  } | null,
};

export type DeleteWorkExperienceMutationVariables = {
  input: DeleteWorkExperienceInput,
  condition?: ModelWorkExperienceConditionInput | null,
};

export type DeleteWorkExperienceMutation = {
  deleteWorkExperience?:  {
    __typename: "WorkExperience",
    experienceId: string,
    userId: string,
    user?:  {
      __typename: "User",
      userId: string,
      firstName: string,
      lastName: string,
      company?: string | null,
      workExperiences?:  {
        __typename: "ModelWorkExperienceConnection",
        nextToken?: string | null,
      } | null,
      educations?:  {
        __typename: "ModelEducationConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    title: string,
    startDate: string,
    endDate?: string | null,
    employer: string,
    description?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    userWorkExperiencesId?: string | null,
  } | null,
};

export type CreateEducationMutationVariables = {
  input: CreateEducationInput,
  condition?: ModelEducationConditionInput | null,
};

export type CreateEducationMutation = {
  createEducation?:  {
    __typename: "Education",
    educationId: string,
    userId: string,
    user?:  {
      __typename: "User",
      userId: string,
      firstName: string,
      lastName: string,
      company?: string | null,
      workExperiences?:  {
        __typename: "ModelWorkExperienceConnection",
        nextToken?: string | null,
      } | null,
      educations?:  {
        __typename: "ModelEducationConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    startDate: string,
    endDate?: string | null,
    institution: string,
    degree: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    userEducationsId?: string | null,
  } | null,
};

export type UpdateEducationMutationVariables = {
  input: UpdateEducationInput,
  condition?: ModelEducationConditionInput | null,
};

export type UpdateEducationMutation = {
  updateEducation?:  {
    __typename: "Education",
    educationId: string,
    userId: string,
    user?:  {
      __typename: "User",
      userId: string,
      firstName: string,
      lastName: string,
      company?: string | null,
      workExperiences?:  {
        __typename: "ModelWorkExperienceConnection",
        nextToken?: string | null,
      } | null,
      educations?:  {
        __typename: "ModelEducationConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    startDate: string,
    endDate?: string | null,
    institution: string,
    degree: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    userEducationsId?: string | null,
  } | null,
};

export type DeleteEducationMutationVariables = {
  input: DeleteEducationInput,
  condition?: ModelEducationConditionInput | null,
};

export type DeleteEducationMutation = {
  deleteEducation?:  {
    __typename: "Education",
    educationId: string,
    userId: string,
    user?:  {
      __typename: "User",
      userId: string,
      firstName: string,
      lastName: string,
      company?: string | null,
      workExperiences?:  {
        __typename: "ModelWorkExperienceConnection",
        nextToken?: string | null,
      } | null,
      educations?:  {
        __typename: "ModelEducationConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    startDate: string,
    endDate?: string | null,
    institution: string,
    degree: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    userEducationsId?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    userId: string,
    firstName: string,
    lastName: string,
    company?: string | null,
    workExperiences?:  {
      __typename: "ModelWorkExperienceConnection",
      items:  Array< {
        __typename: "WorkExperience",
        experienceId: string,
        userId: string,
        title: string,
        startDate: string,
        endDate?: string | null,
        employer: string,
        description?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        userWorkExperiencesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    educations?:  {
      __typename: "ModelEducationConnection",
      items:  Array< {
        __typename: "Education",
        educationId: string,
        userId: string,
        startDate: string,
        endDate?: string | null,
        institution: string,
        degree: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        userEducationsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      userId: string,
      firstName: string,
      lastName: string,
      company?: string | null,
      workExperiences?:  {
        __typename: "ModelWorkExperienceConnection",
        nextToken?: string | null,
      } | null,
      educations?:  {
        __typename: "ModelEducationConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetWorkExperienceQueryVariables = {
  id: string,
};

export type GetWorkExperienceQuery = {
  getWorkExperience?:  {
    __typename: "WorkExperience",
    experienceId: string,
    userId: string,
    user?:  {
      __typename: "User",
      userId: string,
      firstName: string,
      lastName: string,
      company?: string | null,
      workExperiences?:  {
        __typename: "ModelWorkExperienceConnection",
        nextToken?: string | null,
      } | null,
      educations?:  {
        __typename: "ModelEducationConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    title: string,
    startDate: string,
    endDate?: string | null,
    employer: string,
    description?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    userWorkExperiencesId?: string | null,
  } | null,
};

export type ListWorkExperiencesQueryVariables = {
  filter?: ModelWorkExperienceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListWorkExperiencesQuery = {
  listWorkExperiences?:  {
    __typename: "ModelWorkExperienceConnection",
    items:  Array< {
      __typename: "WorkExperience",
      experienceId: string,
      userId: string,
      user?:  {
        __typename: "User",
        userId: string,
        firstName: string,
        lastName: string,
        company?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      title: string,
      startDate: string,
      endDate?: string | null,
      employer: string,
      description?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      userWorkExperiencesId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetEducationQueryVariables = {
  id: string,
};

export type GetEducationQuery = {
  getEducation?:  {
    __typename: "Education",
    educationId: string,
    userId: string,
    user?:  {
      __typename: "User",
      userId: string,
      firstName: string,
      lastName: string,
      company?: string | null,
      workExperiences?:  {
        __typename: "ModelWorkExperienceConnection",
        nextToken?: string | null,
      } | null,
      educations?:  {
        __typename: "ModelEducationConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    startDate: string,
    endDate?: string | null,
    institution: string,
    degree: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    userEducationsId?: string | null,
  } | null,
};

export type ListEducationsQueryVariables = {
  filter?: ModelEducationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEducationsQuery = {
  listEducations?:  {
    __typename: "ModelEducationConnection",
    items:  Array< {
      __typename: "Education",
      educationId: string,
      userId: string,
      user?:  {
        __typename: "User",
        userId: string,
        firstName: string,
        lastName: string,
        company?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      startDate: string,
      endDate?: string | null,
      institution: string,
      degree: string,
      id: string,
      createdAt: string,
      updatedAt: string,
      userEducationsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    userId: string,
    firstName: string,
    lastName: string,
    company?: string | null,
    workExperiences?:  {
      __typename: "ModelWorkExperienceConnection",
      items:  Array< {
        __typename: "WorkExperience",
        experienceId: string,
        userId: string,
        title: string,
        startDate: string,
        endDate?: string | null,
        employer: string,
        description?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        userWorkExperiencesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    educations?:  {
      __typename: "ModelEducationConnection",
      items:  Array< {
        __typename: "Education",
        educationId: string,
        userId: string,
        startDate: string,
        endDate?: string | null,
        institution: string,
        degree: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        userEducationsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    userId: string,
    firstName: string,
    lastName: string,
    company?: string | null,
    workExperiences?:  {
      __typename: "ModelWorkExperienceConnection",
      items:  Array< {
        __typename: "WorkExperience",
        experienceId: string,
        userId: string,
        title: string,
        startDate: string,
        endDate?: string | null,
        employer: string,
        description?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        userWorkExperiencesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    educations?:  {
      __typename: "ModelEducationConnection",
      items:  Array< {
        __typename: "Education",
        educationId: string,
        userId: string,
        startDate: string,
        endDate?: string | null,
        institution: string,
        degree: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        userEducationsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    userId: string,
    firstName: string,
    lastName: string,
    company?: string | null,
    workExperiences?:  {
      __typename: "ModelWorkExperienceConnection",
      items:  Array< {
        __typename: "WorkExperience",
        experienceId: string,
        userId: string,
        title: string,
        startDate: string,
        endDate?: string | null,
        employer: string,
        description?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        userWorkExperiencesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    educations?:  {
      __typename: "ModelEducationConnection",
      items:  Array< {
        __typename: "Education",
        educationId: string,
        userId: string,
        startDate: string,
        endDate?: string | null,
        institution: string,
        degree: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        userEducationsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateWorkExperienceSubscription = {
  onCreateWorkExperience?:  {
    __typename: "WorkExperience",
    experienceId: string,
    userId: string,
    user?:  {
      __typename: "User",
      userId: string,
      firstName: string,
      lastName: string,
      company?: string | null,
      workExperiences?:  {
        __typename: "ModelWorkExperienceConnection",
        nextToken?: string | null,
      } | null,
      educations?:  {
        __typename: "ModelEducationConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    title: string,
    startDate: string,
    endDate?: string | null,
    employer: string,
    description?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    userWorkExperiencesId?: string | null,
  } | null,
};

export type OnUpdateWorkExperienceSubscription = {
  onUpdateWorkExperience?:  {
    __typename: "WorkExperience",
    experienceId: string,
    userId: string,
    user?:  {
      __typename: "User",
      userId: string,
      firstName: string,
      lastName: string,
      company?: string | null,
      workExperiences?:  {
        __typename: "ModelWorkExperienceConnection",
        nextToken?: string | null,
      } | null,
      educations?:  {
        __typename: "ModelEducationConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    title: string,
    startDate: string,
    endDate?: string | null,
    employer: string,
    description?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    userWorkExperiencesId?: string | null,
  } | null,
};

export type OnDeleteWorkExperienceSubscription = {
  onDeleteWorkExperience?:  {
    __typename: "WorkExperience",
    experienceId: string,
    userId: string,
    user?:  {
      __typename: "User",
      userId: string,
      firstName: string,
      lastName: string,
      company?: string | null,
      workExperiences?:  {
        __typename: "ModelWorkExperienceConnection",
        nextToken?: string | null,
      } | null,
      educations?:  {
        __typename: "ModelEducationConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    title: string,
    startDate: string,
    endDate?: string | null,
    employer: string,
    description?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    userWorkExperiencesId?: string | null,
  } | null,
};

export type OnCreateEducationSubscription = {
  onCreateEducation?:  {
    __typename: "Education",
    educationId: string,
    userId: string,
    user?:  {
      __typename: "User",
      userId: string,
      firstName: string,
      lastName: string,
      company?: string | null,
      workExperiences?:  {
        __typename: "ModelWorkExperienceConnection",
        nextToken?: string | null,
      } | null,
      educations?:  {
        __typename: "ModelEducationConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    startDate: string,
    endDate?: string | null,
    institution: string,
    degree: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    userEducationsId?: string | null,
  } | null,
};

export type OnUpdateEducationSubscription = {
  onUpdateEducation?:  {
    __typename: "Education",
    educationId: string,
    userId: string,
    user?:  {
      __typename: "User",
      userId: string,
      firstName: string,
      lastName: string,
      company?: string | null,
      workExperiences?:  {
        __typename: "ModelWorkExperienceConnection",
        nextToken?: string | null,
      } | null,
      educations?:  {
        __typename: "ModelEducationConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    startDate: string,
    endDate?: string | null,
    institution: string,
    degree: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    userEducationsId?: string | null,
  } | null,
};

export type OnDeleteEducationSubscription = {
  onDeleteEducation?:  {
    __typename: "Education",
    educationId: string,
    userId: string,
    user?:  {
      __typename: "User",
      userId: string,
      firstName: string,
      lastName: string,
      company?: string | null,
      workExperiences?:  {
        __typename: "ModelWorkExperienceConnection",
        nextToken?: string | null,
      } | null,
      educations?:  {
        __typename: "ModelEducationConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    startDate: string,
    endDate?: string | null,
    institution: string,
    degree: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    userEducationsId?: string | null,
  } | null,
};
