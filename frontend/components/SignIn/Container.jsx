import React from 'react';
import { SIGNIN, TOGGLE_SIGNIN_MODAL } from '../../graphql/mutations.graphql';
import { SIGNIN_MODAL_OPEN, CURRENT_USER } from '../../graphql/queries.graphql';
import { Mutation, Query } from 'react-apollo';
import { adopt } from 'react-adopt';

export const SignInContainer = adopt({
  isOpen: <Query query={SIGNIN_MODAL_OPEN}>{() => {}}</Query>,
  signin: (
    <Mutation mutation={SIGNIN} refetchQueries={reqs => [{ query: CURRENT_USER }]}>
      {() => {}}
    </Mutation>
  ),
  toggle: <Mutation mutation={TOGGLE_SIGNIN_MODAL}>{() => {}}</Mutation>
});
