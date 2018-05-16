import { ApolloClient } from 'apollo-boost';
import { HttpLink } from 'apollo-boost';
import { InMemoryCache } from 'apollo-boost';
import fetch from 'isomorphic-unfetch';
let apolloClient = null;
import defaultClientState from './graphql/defaultClientState';
import resolvers from './graphql/resolvers';
import ADD_POST_MODAL_OPEN from './graphql/ui/addPostModal.graphql';
console.log({ resolvers, defaultClientState });
// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = fetch;
}

function create(initialState) {
  return new ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
    link: new HttpLink({
      uri: 'https://api.graph.cool/simple/v1/cixmkt2ul01q00122mksg82pn', // Server URL (must be absolute)
      credentials: 'same-origin' // Additional fetch() options like `credentials` or `headers`
    }),
    cache: new InMemoryCache(),
    clientState: {
      resolvers: {
        Mutation: {
          toggleCreatePost(_, variables, { cache }) {
            const { createPostOpen } = cache.read({ query: ADD_POST_MODAL_OPEN });
            const data = { data: { createPostOpen: !createPostOpen } };
            cache.writeData(data);
            return data;
          }
        }
      },
      defaults: {
        createPostOpen: false
      }
    }
  });
}

export default function initApollo(initialState) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create(initialState);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState);
  }

  return apolloClient;
}
