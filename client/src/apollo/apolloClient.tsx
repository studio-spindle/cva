import ApolloClient from 'apollo-boost';
import fetch from 'cross-fetch';

const apolloClient = new ApolloClient({
  uri: 'http://localhost:8080/v1/graphql',
  fetch,
});

export default apolloClient;
