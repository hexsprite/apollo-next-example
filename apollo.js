import ApolloClient, {createNetworkInterface} from 'apollo-client'

const GRAPHQL_URL = 'http://nmr.io:3001/graphql'

export default new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: GRAPHQL_URL
  })
})
