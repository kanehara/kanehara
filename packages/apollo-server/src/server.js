const { ApolloServer } = require('apollo-server')
const { schema } = require('src/schema')
const { logger } = require('src/logger')

const apolloServer = new ApolloServer({
  schema,
  context: async (args) => {
    const { req, connection } = args
    // TODO: Grab auth params here
    if (connection) {
      // ws connection
    } else if (req) {
      // http request
    }
    return {}
  }
})

const PORT = process.env.PORT || 4000
apolloServer.listen(PORT).then(({ url }) => {
  logger.info(`🚀 Server ready at ${url}`)
  logger.info(`📈 GraphQL path: ${apolloServer.graphqlPath}`)
  logger.info(`📰 Subscriptions path: ${apolloServer.subscriptionsPath}`)
})

module.exports = apolloServer
