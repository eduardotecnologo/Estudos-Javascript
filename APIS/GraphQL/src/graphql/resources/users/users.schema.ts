const userTypes = `
    # User definition type    
    type User {
        id: ID!
        name: String!
        email: String!
        photo: String
        createdAt: String!
        updatedAt: String!  
    }
    input UserCreateInput {
        nome: String!
        email: String!
        password: String!
    }

    input UserUpdateInput {
        nome: String!
        email: String!
        photo: String!
    }

    input UserPasswordInput {
        password: String!
    }
`

const userQueries = `
    users(first: Int, offset: Int): [ User! ]!
    user(id: ID!): User
`

const userMutations = `
    createUser(input: UserCreateInput!): User
    updateUser(id: ID!, input: UserUpdateInput): User
    updateUserPassword(id: ID!, input: UserUpdatePasswordInput!): Boolean
    deleteUser(id: ID!): Boolean
`

export {
    userTypes,
    userQueries,
    userMutations
}