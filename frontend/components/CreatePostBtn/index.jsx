import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import { Mutation } from 'react-apollo';
import { TOGGLE_POST_MODAL_OPEN } from '../../graphql/mutations.graphql';
const styles = theme => ({
  btn: {
    position: 'fixed',
    bottom: theme.spacing.unit * 4,
    right: theme.spacing.unit * 4
  }
});

const CreatePostBtn = ({ classes }) => {
  return (
    <React.Fragment>
      <Mutation mutation={TOGGLE_POST_MODAL_OPEN}>
        {toggleEditPostModal => (
          <Button variant="fab" color="primary" aria-label="add" className={classes.btn} onClick={toggleEditPostModal}>
            <AddIcon />
          </Button>
        )}
      </Mutation>
    </React.Fragment>
  );
};

export default withStyles(styles)(CreatePostBtn);
