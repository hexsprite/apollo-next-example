import ApolloClient, {createNetworkInterface} from 'apollo-client'

const GRAPHQL_URL = 'https://us-west-2.api.scaphold.io/graphql/pathetic-fog'

export default new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: GRAPHQL_URL
  })
})
