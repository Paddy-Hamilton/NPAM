import React from 'react';
import { Query } from 'react-apollo';
import { POST, CURRENT_USER } from '../../graphql/queries.graphql';
import { adopt } from 'react-adopt';

export const SinglePostContainer = adopt({
  post: ({ id, render }) => (
    <Query query={POST} variables={{ id }}>
      {post => render(post)}
    </Query>
  ),
  currentUser: <Query query={CURRENT_USER}>{() => {}}</Query>
});
