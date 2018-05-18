import withApollo from 'next-with-apollo';
import ApolloClient from 'apollo-boost';
import { CREATE_POST_MODAL_OPEN, SIGNIN_MODAL_OPEN } from '../graphql/queries.graphql';
// can also be a function that accepts a `headers` object (SSR only) and returns a config
const isBrowser = new Function('try {return this===window;}catch(e){ return false;}');
function createClient({ headers }) {
  return new ApolloClient({
    uri:
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:4444'
        : 'https://eu1.prisma.sh/paddy-hamilton-edb868/backend/dev',
    connectToDevTools: true,
    ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
    request: async operation => {
      let headersWithAuth = { ...headers };
      if (isBrowser()) {
        console.log({ localStorage });
        const token = JSON.parse(localStorage.getItem('nmgqlUserId'));
        console.log({ token });
        if (token) {
          headersWithAuth.Authorization = `Bearer ${token.id_token}`;
        }
      }

      operation.setContext({
        fetchOptions: {
          credentials: 'include'
        },
        headersWithAuth
      });
    },
    clientState: {
      resolvers: {
        Mutation: {
          toggleCreatePostModal(_, variables, { cache }) {
            const { createPostModalOpen } = cache.read({ query: CREATE_POST_MODAL_OPEN });
            const data = { data: { createPostModalOpen: !createPostModalOpen } };
            cache.writeData(data);
            return data;
          },
          toggleSigninModal(_, variables, { cache }) {
            const { signinModalOpen } = cache.read({ query: SIGNIN_MODAL_OPEN });
            const data = { data: { signinModalOpen: !signinModalOpen } };
            cache.writeData(data);
            return data;
          },
          signout(_, vars, ctx) {
            if (isBrowser() && localStorage.getItem('nmgqlUserId')) {
              localStorage.removeItem('nmgqlUserId');
            }
            return;
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

export default withApollo({ client: createClient });
