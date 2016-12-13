import ApolloClient, {createNetworkInterface} from 'apollo-client'

const GRAPHQL_URL = 'https://graphql.nmr.io/graphql'

export default new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: GRAPHQL_URL
  })
})
