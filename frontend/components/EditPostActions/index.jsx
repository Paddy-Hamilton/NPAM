import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import Zoom from '@material-ui/core/Zoom';
import { TOGGLE_POST_MODAL_OPEN } from '../../graphql/mutations.graphql';
import { Mutation } from 'react-apollo';
class EditPostAction extends Component {
  render() {
    const { theme, postId } = this.props;
    const transitionDuration = {
      enter: theme.transitions.duration.enteringScreen,
      exit: theme.transitions.duration.leavingScreen
    };
    return (
      <Zoom
        in
        timeout={transitionDuration}
        style={{
          transitionDelay: transitionDuration.exit
        }}
        unmountOnExit
      >
        <Mutation mutation={TOGGLE_POST_MODAL_OPEN}>
          {toggleEditPostModal => (
              <Button
                aria-label="Edit Post"
                color="secondary"
                variant="fab"
                mini
                onClick={e => {
                  e.preventDefault();
                  toggleEditPostModal();
                }}
              >
                <EditIcon />
              </Button>
            )
          }
        </Mutation>
      </Zoom>
    );
  }
}

EditPostAction.propTypes = {
  theme: PropTypes.object.isRequired
};

export default EditPostAction;
