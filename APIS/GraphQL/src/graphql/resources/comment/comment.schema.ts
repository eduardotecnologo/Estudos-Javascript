const commentTypes = `
    type Comment {
        id: ID!
        comment: String!
        createdAt: String!
        updatedAt: String!
        user: User!
        post: Post!
    }
    input CommentInput {
        comment: String!
        post: Int!
        user: Int!
    }
`
const commentQueries = `
    commentsByPost(post: ID!, first: Int, offset: Int): [ comment! ]!
`
const commentMutations = `
    createComment(input: commentInput): Comment
    updateComment(id: ID!, input: CommentInput!): Comment
    deleteComment(id: ID!): Boolean
`
export {
    commentTypes,
    commentQueries,
    commentMutations
}