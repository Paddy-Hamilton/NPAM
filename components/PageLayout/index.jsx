import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Header from '../Header';
import Link from 'next/link';
import Grid from '@material-ui/core/Grid';
const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20
  },
  btn: {
    color: theme.palette.primary.dark
  }
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
