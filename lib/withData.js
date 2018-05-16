import withApollo from 'next-with-apollo';
import ApolloClient from 'apollo-boost';
import { CREATE_POST_MODAL_OPEN } from '../graphql/queries.graphql';
// can also be a function that accepts a `headers` object (SSR only) and returns a config

const client = new ApolloClient({
  uri: 'https://api.graph.cool/simple/v1/cixmkt2ul01q00122mksg82pn',
  ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
  // TODO this is a bug: https://github.com/apollographql/apollo-client/issues/3265
  fetchOptions: {
    credentials: 'include'
  },
  request: async operation => {
    operation.setContext({
      fetchOptions: {
        credentials: 'include'
      }
    });
  },
  clientState: {
    resolvers: {
      Mutation: {
        toggleCreatePostModal(_, variables, { cache }) {
          const { createPostOpen } = cache.read({ query: CREATE_POST_MODAL_OPEN });
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

export default withApollo({ client });
