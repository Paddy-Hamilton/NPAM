import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Query, Mutation } from 'react-apollo';
import { EDIT_POST_MODAL_OPEN, POSTS, CURRENT_USER, POST } from '../../graphql/queries.graphql';
import { TOGGLE_POST_MODAL_OPEN, EDIT_POST } from '../../graphql/mutations.graphql';
import { adopt } from 'react-adopt';

export const EditPostModalContainer = adopt({
  currentUser: <Query query={CURRENT_USER}>{() => {}}</Query>,
  isOpen: <Query query={EDIT_POST_MODAL_OPEN}>{() => {}}</Query>,
  editPost: <Mutation mutation={EDIT_POST}>{() => {}}</Mutation>,
  toggle: <Mutation mutation={TOGGLE_POST_MODAL_OPEN}>{() => {}}</Mutation>
});
