import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Header from '../Header';
import Link from 'next/link';
import Grid from '@material-ui/core/Grid';
import { Query, Mutation } from 'react-apollo';
import { adopt } from 'react-adopt';
import { SIGNIN, SIGNOUT } from '../../graphql/mutations.graphql';
import { CURRENT_USER } from '../../graphql/queries.graphql';
console.log('PageLayout', { SIGNIN, SIGNOUT, CURRENT_USER });
const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20
  },
  btn: {
    color: theme.palette.primary.dark
  }
});

const Composed = adopt({
  currentUser: <Query query={CURRENT_USER}>{() => {}}</Query>,
  signin: <Mutation mutation={SIGNIN}>{() => {}}</Mutation>,
  signout: <Mutation mutation={SIGNOUT}>{() => {}}</Mutation>
});

class PageLayout extends React.Component {
  render() {
    const { classes, children } = this.props;
    return (
      <React.Fragment>
        <Header name="Next/Material/Apollo">
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
            {({ currentUser, signout, signin }) => {
              console.log({ currentUser });

              return (
                <Button className={classes.btn} onClick={() => (currentUser.data ? signout : signin)}>
                  <a>{!currentUser.data ? 'Sign in' : 'Sign out'}</a>
                </Button>
              );
            }}
          </Composed>
        </Header>
        {children}
      </React.Fragment>
    );
  }
}

PageLayout.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PageLayout);
