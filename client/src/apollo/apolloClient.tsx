import ApolloClient from 'apollo-boost';
import fetch from 'cross-fetch';

const apolloClient = new ApolloClient({
  uri: '//weaviate.creatingvaluealliance.com/v1/graphql',
  fetch,
});

export default apolloClient;
