import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { POST, CURRENT_USER } from '../../graphql/queries.graphql';
import { adopt } from 'react-adopt';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import moment from 'moment';
import EditPostAction from '../EditPostActions';
import EditPostModal from '../EditPostModal';
const styles = theme => ({
  root: {
    margin: '0 auto'
  },
  gridWrapper: {
    padding: '0 12px',
    maxWidth: '700px',
    margin: '0 auto',
    position: 'relative'
  },

  header: {
    width: '100%',
    minHeight: '350px',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    marginBottom: theme.spacing.unit * 4
  },
  grid: {
    marginTop: 0
  },
  postBody: {
    marginTop: theme.spacing.unit * 4
  },
  toggle: {
    position: 'absolute',
    top: 0,
    right: 0,
    display: 'blocks'
  }
});

const Composed = adopt({
  post: ({ id, render }) => (
    <Query query={POST} variables={{ id }}>
      {post => render(post)}
    </Query>
  ),
  currentUser: <Query query={CURRENT_USER}>{() => {}}</Query>
});

class SinglePost extends Component {
  handleEditClick = e => {
    e.preventDefault();
  };
  render() {
    const { id, classes, theme } = this.props;
    return (
      <Composed id={id}>
        {({
          post: {
            data: {
              post: { img, title, createdAt, text }
            },
            loading,
            errer
          },
          currentUser: {
            data: { me }
          }
        }) => {
          if (loading) return <p>loading</p>;
          return (
            <div className={classes.root}>
              <header style={{ backgroundImage: `url(${img})` }} className={classes.header} />
              <div className={classes.gridWrapper}>
                <Grid container spacing={16}>
                  <Grid item xs={12}>
                    {me && (
                      <span className={classes.toggle}>
                        <EditPostAction theme={theme} />
                      </span>
                    )}
                    <Typography variant="display1" gutterBottom>
                      {title}
                    </Typography>
                    <Typography variant="caption" gutterBottom>
                      {moment(createdAt).format('MMMM Do YYYY')}
                    </Typography>
                    <Typography variant="body1" gutterBottom className={classes.postBody}>
                      {text}
                    </Typography>
                  </Grid>
                </Grid>
                <EditPostModal postId={id} title={title} text={text} img={img} />
              </div>
            </div>
          );
        }}
      </Composed>
    );
  }
}

export default withStyles(styles, { withTheme: true })(SinglePost);
