import React, { Component } from 'react'
import client from './apolloClient'
import { ApolloProvider, Query, Mutation, Subscription } from 'react-apollo'
import gql from 'graphql-tag'

class App extends Component {
  render () {
    return (
      <ApolloProvider client={client}>
        <Query query={gql`{ resource }`}>
          {({ data, loading, error }) => {
            if (loading) return 'Loading...'
            if (error) return 'Something went wrong'
            return <h2>{data.resource}</h2>
          }}
        </Query>
        <Mutation mutation={gql`mutation { push(payload: "Pushed!") }`}>
          {(mutate) => <button onClick={mutate}>Push me!</button>}
        </Mutation>
        <Subscription subscription={gql`subscription { pull }`}>
          {({ data, loading, error }) => {
            if (error) return 'Something went wrong'
            return <h2>{loading ? 'Waiting...' : data.pull}</h2>
          }}
        </Subscription>
      </ApolloProvider>
    )
  }
}

export default App
