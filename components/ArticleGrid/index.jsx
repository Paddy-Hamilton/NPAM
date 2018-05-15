import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Link from 'next/link';
import Grow from '@material-ui/core/Grow';
import moment from 'moment';
const styles = theme => ({
  root: {
    padding: '0 12px',
    margin: '0 auto'
  },
  grid: {
    marginTop: 0
  },
  post: {
    position: 'relative',
    cursor: 'pointer',
    transition: 'background 0.3s ease-in-out,boxShadow 0.3s ease-in-out',

    '& > div': {
      background: 'rgba(255,255,255,1)',
      transition: 'background 0.3s ease-in-out'
    },
    '&:hover,&:focus': {
      background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
      transition: 'boxShadow 0.3s ease-in-out',
      '& > div': {
        background: 'rgba(255,255,255,0)',
        transition: 'background 0.3s ease-in-out'
      },
      '& $link,& $date': {
        color: 'white',
        transition: 'color 0.3s ease-in-out'
      }
    }
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    transition: 'color 0.3s ease-in-out'
  },
  date: {
    color: theme.palette.secondary.main,
    transition: 'color 0.3s ease-in-out'
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

class ArticleGrid extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.allPosts.length !== this.props.allPosts.length;
  }
  formatDateTime = dt => {
    return moment(dt).format('l');
  };
  render() {
    const { allPosts, classes } = this.props;
    const timeout = 100;

    return (
      <div className={classes.root}>
        <Grid container spacing={24} className={classes.grid}>
          {allPosts &&
            allPosts.map((post, i) => (
              <Grow in timeout={incrimentTimeout()} key={post.id || post.title}>
                <Grid item xs={12} md={6} lg={4} onClick={() => (window.location = post.url)}>
                  <Card className={classes.post}>
                    <CardContent>
                      <div>
                        <h3>
                          <a className={classes.link} href={post.url}>
                            {post.title}
                          </a>
                        </h3>
                        <p className={classes.date}>
                          <small>{moment(post.createdAt).format('MMMM Do YYYY')}</small>
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </Grid>
              </Grow>
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
