import ApolloClient, { InMemoryCache } from 'apollo-boost';
import fetch from 'node-fetch';

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  cache,
  uri: 'http://localhost:8080/v1/graphql',
  fetch,
});

cache.writeData({
  data: {
    searchQueryArticles: [],
  },
});

export default apolloClient;
