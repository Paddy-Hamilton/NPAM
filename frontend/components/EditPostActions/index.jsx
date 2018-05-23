import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import Zoom from '@material-ui/core/Zoom';
class EditPostAction extends Component {
  render() {
    const { theme } = this.props;
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
        <Button aria-label="Edit Post" color="secondary" variant="fab" mini>
          <EditIcon />
        </Button>
      </Zoom>
    );
  }
}

EditPostAction.propTypes = {
  id: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired
};

export default EditPostAction;
