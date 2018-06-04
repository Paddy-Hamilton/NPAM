import React from 'react';
import { Query, Mutation } from 'react-apollo';
import { adopt } from 'react-adopt';
import { TOGGLE_SIGNIN_MODAL, SIGNOUT } from '../../graphql/mutations.graphql';
import { CURRENT_USER } from '../../graphql/queries.graphql';

export const SignInButtonContainer = adopt({
  currentUser: <Query query={CURRENT_USER}>{() => {}}</Query>,
  toggleSigninModal: <Mutation mutation={TOGGLE_SIGNIN_MODAL}>{() => {}}</Mutation>,
  signout: (
    <Mutation mutation={SIGNOUT} refetchQueries={res => [{ query: CURRENT_USER }]}>
      {() => {}}
    </Mutation>
  )
});
