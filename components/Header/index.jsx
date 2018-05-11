import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const styles = {
  root: {
    flexGrow: 1
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignitems: 'center'
  }
};

class Header extends Component {
  render() {
    const { classes, name, children } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar className={classes.toolbar}>
            <Typography variant="title" color="inherit">
              {name}
            </Typography>
            <div>{children}</div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired
};

export default withStyles(styles)(Header);
