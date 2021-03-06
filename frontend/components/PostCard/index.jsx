import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';
import moment from 'moment';
import truncate from 'truncate';

const styles = theme => ({
  post: {
    position: 'relative',
    cursor: 'pointer',
    height: '100%',
    '&:hover,&:focus': {
      '& $media': {
        mixBlendMode: 'screen',
        filter: 'grayscale(1) contrast(1.5)'
      }
    }
  },
  link: {
    color: theme.palette.primary.dark,
    textDecoration: 'none',
    transition: 'color 0.3s ease-in-out'
  },
  media: {
    height: 0,
    paddingTop: '56.25%'
  },
  mediaContainer: {
    background: `linear-gradient(45deg, ${theme.palette.primary.dark} 30%, ${theme.palette.secondary.light} 90%)`
  },
  date: {
    color: theme.palette.primary,
    transition: 'color 0.3s ease-in-out'
  },
  content: {
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'space-between',
    height: '43.75%'
  },
  contentItem: {
    flexBasis: '100%'
  },
  postTextContainer: {
    textAlign: 'left',
    paddingTop: theme.spacing.unit * 20,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    background: 'rgba(255, 255, 255, 0.2)'
  },
  context: {
    marginTop: theme.spacing.unit * 3
  }
});

const PostCard = ({ post: { img, title, author, text, createdAt, id }, classes, currentUser, theme }) => {
  return (
    <Link as={`/a/${id}`} href={`/post?id=${id}`}>
      <Card className={classes.post}>
        <div className={classes.mediaContainer}>
          <CardMedia className={classes.media} image={img} title="Post image" />
        </div>

        <CardContent className={classes.content}>
          <Typography gutterBottom variant="headline" component="h2" className={classes.contentItem}>
            {title}
          </Typography>
          <Typography component="p" gutterBottom className={classes.contentItem}>
            {truncate(text, 90)}
          </Typography>
          <div className={`${classes.context} ${classes.contentItem}`}>
            <Typography>{author.name}</Typography>
            <Typography variant="caption">
              <small>{moment(createdAt).format('MMMM Do YYYY')}</small>
            </Typography>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

PostCard.propTypes = {
  post: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(PostCard);
