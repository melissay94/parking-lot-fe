import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import gql from 'graphql-tag';

const cache = new InMemoryCache();

const link = new HttpLink({
  uri: "localhost:4000/graphql"
});

const token = localStorage.getItem('token');

const authLink = setContext((_, { headers }) => {

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
});

export const client = new ApolloClient({
  cache: cache,
  link: authLink.concat(link)
});

client.writeQuery({
  query: gql`
    query getLoggedIn {
      isLoggedIn
    }
  `,
  data: {
    isLoggedIn: token ? true : false
  }
});
