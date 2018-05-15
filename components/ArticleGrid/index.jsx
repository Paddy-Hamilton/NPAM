import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
const styles = theme => ({
  root: {
    padding: '0 12px',
    margin: '0 auto'
  },
  grid: {
    marginTop: 0
  },
  post: {
    position: 'relative'
  },
  postTextContainer: {
    textAlign: 'left',
    paddingTop: theme.spacing.unit * 20,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    background: 'rgba(255, 255, 255, 0.2)'
  }
});
class ArticleGrid extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.allPosts.length !== this.props.allPosts.length;
  }

  render() {
    const { allPosts, classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={24} className={classes.grid}>
          {allPosts &&
            allPosts.map(post => (
              <Grid key={post.id || post.title} item xs={12} md={6} lg={4} className={classes.post}>
                <Card>
                  <CardContent>
                    <div>
                      <h3>{post.title}</h3>
                      <p>
                        <small>{post.createdAt}</small>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          {allPosts.length === 0 && (
            <Grid item xs={12}>
              <p>No items do display</p>
            </Grid>
          )}
        </Grid>
      </div>
    );
  }
}

ArticleGrid.propTypes = {
  allPosts: PropTypes.array.isRequired
};

export default withStyles(styles)(ArticleGrid);
