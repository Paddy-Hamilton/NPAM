import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import Header from '../Header';
import Link from 'next/link';
import Grid from 'material-ui/Grid';
const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20
  }
});

class PageLayout extends React.Component {
  render() {
    const { classes, children } = this.props;
    return (
      <React.Fragment>
        <Header name="Next/Material/Apollo">
          <Link href="/">
            <Button>
              <a>Home</a>
            </Button>
          </Link>

          <Link href="/about">
            <Button>
              <a>About</a>
            </Button>
          </Link>
        </Header>
        <Grid container spacing={24}>
          {children}
        </Grid>
      </React.Fragment>
    );
  }
}

PageLayout.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PageLayout);
