const { resolvers } = require('src/resolvers')
const { gql } = require('apollo-server-express')
const { makeExecutableSchema } = require('graphql-tools')

const typeDefs = gql`
  type Query {
    resource: String
  }

  type Subscription {
    pull: String
  }

  type Mutation {
    push(payload: String): String
  }
`

module.exports = {
  schema: makeExecutableSchema({ typeDefs, resolvers })
}
