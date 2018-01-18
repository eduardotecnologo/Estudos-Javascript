import { GraphQLFieldResolver } from "graphql"
import { ComposableResolver } from "./comnposable.resolver"
import { ResolverContext } from "../../interfaces/ResolverContextInterface"


export const authResolver: ComposableResolver<any, ResolverContext> =
    (resolver: GraphQLFieldResolver<any, ResolverContext>): GraphQLFieldResolver<any, ResolverContext> => {
        return (parent, args, context: ResolverContext, info) => {
            if (context.user || context.authorization) {
                return resolver(parseInt, args, context, info)
            }
            throw new Error('Unauthorized! Token not provided!')
            
        }
    }
    