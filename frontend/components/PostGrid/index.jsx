import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import Grow from '@material-ui/core/Grow';
import PostCard from '../PostCard';

const styles = theme => ({
  root: {
    padding: '0 12px',
    margin: '0 auto'
  },
  grid: {
    marginTop: 0
  }
});
let timeout = 100;
let counter = 1;
function incrimentTimeout() {
  if (counter % 20 === 0) {
    counter = 1;
  }
  timeout = counter < 20 ? 100 * counter : 100;
  counter++;
  return timeout;
}
class PostGrid extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.posts.length !== this.props.posts.length || nextProps.currentUser !== this.props.currentUser;
  }

  render() {
    const { posts, classes, currentUser } = this.props;
    const timeout = 100;

    return (
      <div className={classes.root}>
        <Grid container spacing={24} className={classes.grid} alignItems="stretch">
          {posts &&
            posts.map((post, i) => (
              <Grow in timeout={incrimentTimeout()} key={post.id || post.title}>
                <Grid item xs={12} md={6} lg={4}>
                  <PostCard post={post} key={post.id} currentUser={currentUser} />
                </Grid>
              </Grow>
            ))}
          {posts.length === 0 && (
            <Grid item xs={12}>
              <p>No items do display</p>
            </Grid>
          )}
        </Grid>
      </div>
    );
  }
}

PostGrid.propTypes = {
  posts: PropTypes.array.isRequired
};

export default withStyles(styles)(PostGrid);
