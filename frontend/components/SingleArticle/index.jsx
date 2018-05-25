import { Query, Mutation } from 'react-apollo';
import { POST, CURRENT_USER } from '../../graphql/queries.graphql';
import { adopt } from 'react-adopt';

// const Composed = adopt({
//   posts: (
//     <Query
//       query={POSTS}
//       variables={{
//         first: 20,
//         skip: 0
//       }}
//       fetchPolicy="cache-and-network"
//       notifyOnNetworkStatusChange={true}
//     >
//       {() => {}}
//     </Query>
//   ),
//   currentUser: <Query query={CURRENT_USER}>{() => {}}</Query>
// });

const SingleArticle = () => {
  return <div>Single Article page</div>;
};

export default SingleArticle;
