import { userQueries } from './resources/users/users.schema'
import { postQueries } from './resources/post/post.schema';
import { commentQueries } from './resources/comment/comment.schema';

const Query = `
    type Query {
        ${commentQueries}
        ${postQueries}
        ${userQueries}
    }

`

export {
    Query
}