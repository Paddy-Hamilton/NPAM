import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import Grow from '@material-ui/core/Grow';
import PostCard from '../PostCard';
import PostGridContainer from './Container';
const styles = theme => ({
  root: {
    padding: '0 12px',
    margin: '0 auto'
  },
  grid: {
    marginTop: 0
  }
});

const PostGrid = ({ posts, classes, currentUser }) => {
  return (
    <div className={classes.root}>
      <Grid container spacing={24} className={classes.grid} alignItems="stretch">
        {posts &&
          posts.map((post, i) => (
            <Grow in key={post.id || post.title}>
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
};

PostGrid.propTypes = {
  posts: PropTypes.array.isRequired
};
export const PostGridWithStyles = withStyles(styles)(PostGrid);

export default () => (
  <PostGridContainer>{(posts, me) => <PostGridWithStyles posts={posts} currentUser={me} />}</PostGridContainer>
);
