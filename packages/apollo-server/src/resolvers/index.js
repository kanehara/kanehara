const { PubSub } = require('graphql-subscriptions')

const pubsub = new PubSub()

const resolvers = {
  Query: {
    resource: () => "Oooh wee look at me I'm a resource!"
  },
  Subscription: {
    pull: {
      subscribe: () => pubsub.asyncIterator('sub')
    }
  },
  Mutation: {
    push: (_, { payload }) => pubsub.publish('sub', { pull: payload })
  }
}

module.exports = {
  resolvers,
  pubsub
}
