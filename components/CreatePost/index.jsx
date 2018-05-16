import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import { Mutation } from 'react-apollo';
import TOGGLE_CREATE_POST from '../../src/graphql/ui/toggleCreatePost.graphql';
const styles = theme => ({
  btn: {
    position: 'fixed',
    bottom: theme.spacing.unit * 4,
    right: theme.spacing.unit * 4
  }
});

class CreatePostBtn extends Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Mutation mutation={TOGGLE_CREATE_POST} variables={{ open: true }}>
          {toggleAddPost => (
            <Button variant="fab" color="primary" aria-label="add" className={classes.btn} onClick={toggleAddPost}>
              <AddIcon />
            </Button>
          )}
        </Mutation>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(CreatePostBtn);
