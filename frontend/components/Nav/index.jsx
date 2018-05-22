import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Header from '../Header';
import Link from 'next/link';
import Grid from '@material-ui/core/Grid';
import { Query, Mutation } from 'react-apollo';
import { adopt } from 'react-adopt';
import { TOGGLE_SIGNIN_MODAL, SIGNOUT } from '../../graphql/mutations.graphql';
import { CURRENT_USER } from '../../graphql/queries.graphql';
import SignIn from '../SignIn';

const styles = theme => ({
  btn: {
    color: theme.palette.primary.dark
  }
});

const Composed = adopt({
  currentUser: (
    <Query query={CURRENT_USER} ssr={false}>
      {() => {}}
    </Query>
  ),
  toggleSigninModal: <Mutation mutation={TOGGLE_SIGNIN_MODAL}>{() => {}}</Mutation>,
  signout: (
    <Mutation mutation={SIGNOUT} refetchQueries={res => [{ query: CURRENT_USER }]}>
      {() => {}}
    </Mutation>
  )
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
          <Composed>
            {({ currentUser, signout, toggleSigninModal }) => {
              return (
                <Button
                  className={classes.btn}
                  onClick={() => (!currentUser.data.me ? toggleSigninModal() : signout())}
                >
                  <a>{!currentUser.data.me || currentUser.error ? 'Sign in' : 'Sign out'}</a>
                </Button>
              );
            }}
          </Composed>
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
