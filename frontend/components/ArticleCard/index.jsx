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
import EditPostAction from '../EditPostActions';

const styles = theme => ({
  post: {
    position: 'relative',
    cursor: 'pointer',
    height: '100%',
    transition: 'background 0.3s ease-in-out',
    '&:hover,&:focus': {
      background: theme.palette.secondary.xlight,
      transition: 'background 0.3s ease-in-out',
      '& $link,& $date': {
        // color: 'white',
        // transition: 'color 0.3s ease-in-out'
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
    paddingTop: '56.25%' // 16:9
  },
  date: {
    color: theme.palette.primary.light,
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
  },
  context: {
    marginTop: theme.spacing.unit * 3
  },
  actionsRoot: {
    position: 'absolute',
    top: 0,
    right: 0
  }
});

class ArticleCard extends Component {
  formatDateTime = dt => {
    return moment(dt).format('l');
  };
  render() {
    const {
      post: { img, title, author, text, createdAt, id },
      classes,
      currentUser,
      theme
    } = this.props;

    return (
      <Card className={classes.post}>
        <CardMedia className={classes.media} image={img} title="Post image">
          {currentUser && (
            <CardActions className={classes.actionsRoot}>
              <EditPostAction id={id} theme={theme} />
            </CardActions>
          )}
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {title}
          </Typography>
          <Typography component="p" gutterBottom>
            {text}
          </Typography>
          <div className={classes.context}>
            <Typography>{author.name}</Typography>
            <Typography variant="caption">
              <small>{moment(createdAt).format('MMMM Do YYYY')}</small>
            </Typography>
          </div>
        </CardContent>
      </Card>
    );
  }
}

ArticleCard.propTypes = {
  post: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(ArticleCard);
