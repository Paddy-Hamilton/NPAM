import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Header from '../Header';
import Link from 'next/link';
import Grid from '@material-ui/core/Grid';
import SignIn from '../SignIn';
import SignInButton from '../SignInButton';

const styles = theme => ({
  btn: {
    color: theme.palette.primary.dark
  }
});

class Nav extends React.Component {
  render() {
    const { classes, children } = this.props;
    return (
      <React.Fragment>
        <nav>
          <Link href="/">
            <Button className={classes.btn}>
              <a>Home</a>
            </Button>
          </Link>
          <Link href="/about">
            <Button className={classes.btn}>
              <a>About</a>
            </Button>
          </Link>
          <SignInButton className={classes.btn} />
        </nav>
        <SignIn />
      </React.Fragment>
    );
  }
}

Nav.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Nav);
