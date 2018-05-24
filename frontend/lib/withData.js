import withApollo from 'next-with-apollo';
import ApolloClient from 'apollo-boost';
import { CREATE_POST_MODAL_OPEN, SIGNIN_MODAL_OPEN } from '../graphql/queries.graphql';
// can also be a function that accepts a `headers` object (SSR only) and returns a config

function createClient({ headers }) {
  return new ApolloClient({
    uri:
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:4000'
        : 'https://eu1.prisma.sh/paddy-hamilton-edb868/backend/dev',
    connectToDevTools: true, // Disables forceFetch on the server (so queries are only run once)
    request: async operation => {
      operation.setContext({
        fetchOptions: {
          credentials: 'include'
        },
        headers
      });
    },
    clientState: {
      resolvers: {
        Mutation: {
          toggleCreatePostModal(_, variables, { cache }) {
            const { createPostModalOpen } = cache.readQuery({ query: CREATE_POST_MODAL_OPEN });
            const data = { data: { createPostModalOpen: !createPostModalOpen } };
            cache.writeData(data);
            return data;
          },
          toggleSigninModal(_, variables, { cache }) {
            const { signinModalOpen } = cache.readQuery({ query: SIGNIN_MODAL_OPEN });
            const data = { data: { signinModalOpen: !signinModalOpen } };
            cache.writeData(data);
            return data;
          }
        }
      },
      defaults: {
        createPostModalOpen: false,
        signinModalOpen: false
      }
    }
  });
}

export default withApollo(createClient);
