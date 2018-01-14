import { userMutations } from './resources/users/users.schema'
import { postMutations } from './resources/post/post.schema'
import { commentQueries } from './resources/comment/comment.schema'

const Mutation = `
    type Mutation {
        ${commentQueries}
        ${postMutations}
        ${userMutations}
    }
`

export {
    Mutation
}

