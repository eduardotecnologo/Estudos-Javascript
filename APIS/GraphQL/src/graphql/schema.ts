import { makeExecutableSchema } from 'graphql-tools'

const users: any[] = [
    {
        id: 1,
        name: 'Eduardo',
        email: 'eduardo@edu.com'
    },
    {
        id: 2,
        name: 'Alexandre',
        email: 'alexandre@edu.com'
    }
]

const typeDefs = `      
    type User{
        id: ID!
        name: String!
        email: String!
    }
    type Query{
        allUsers: [User!]
    }
`
const resolvers = {
    Query: {
        allUsers: () => users
    }
}
export default makeExecutableSchema({typeDefs, resolvers})