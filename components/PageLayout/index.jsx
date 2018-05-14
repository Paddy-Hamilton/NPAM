import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Header from '../Header';
import Link from 'next/link';

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
        {children}
      </React.Fragment>
    );
  }
}

PageLayout.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PageLayout);
