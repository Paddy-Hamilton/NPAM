import withApollo from 'next-with-apollo';
import ApolloClient from 'apollo-boost';
import { EDIT_POST_MODAL_OPEN, SIGNIN_MODAL_OPEN } from '../graphql/queries.graphql';
// can also be a function that accepts a `headers` object (SSR only) and returns a config
process.env.NODE_ENV;
function createClient({ headers }) {
  return new ApolloClient({
    uri: process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : process.env.API_ENDPOINT,
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
          toggleEditPostModal(_, variables, { cache }) {
            const { editPostModalOpen } = cache.readQuery({ query: EDIT_POST_MODAL_OPEN });
            const data = { data: { editPostModalOpen: !editPostModalOpen } };
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
        editPostModalOpen: false,
        signinModalOpen: false
      }
    }
  });
}

export default withApollo(createClient);
