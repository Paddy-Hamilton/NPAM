import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Query, Mutation } from 'react-apollo';
import Modal from '@material-ui/core/Modal';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { CREATE_POST_MODAL_OPEN, TOGGLE_POST_MODAL_OPEN } from '../../graphql/queries.graphql';
import { adopt } from 'react-adopt';

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`
  }
});
const Composed = adopt({
  isOpen: <Query query={CREATE_POST_MODAL_OPEN}>{() => {}}</Query>,
  toggle: <Mutation mutation={TOGGLE_POST_MODAL_OPEN}>{() => {}}</Mutation>
});
class CreatePostModal extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Composed>
        {({ isOpen, toggle }) => {
          if (isOpen.loading || toggle.loading) console.log('loading', { isOpen, toggle });
          if (isOpen.error || toggle.error) console.error({ isOpen, toggle });
          return (
            <Modal
              aria-labelledby="Create post"
              aria-describedby="Create and publish a post"
              open={isOpen.data.createPostModalOpen}
              onClose={toggle}
            >
              <div className={classes.paper}>
                <Typography variant="title" id="modal-title">
                  Text in a modal
                </Typography>
                <Typography variant="subheading" id="simple-modal-description">
                  Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </Typography>
              </div>
            </Modal>
          );
        }}
      </Composed>
    );
  }
}

CreatePostModal.propTypes = {};

export default withStyles(styles)(CreatePostModal);
