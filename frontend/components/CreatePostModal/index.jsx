import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Query, Mutation } from 'react-apollo';
import Modal from '@material-ui/core/Modal';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { CREATE_POST_MODAL_OPEN, POSTS } from '../../graphql/queries.graphql';
import { TOGGLE_POST_MODAL_OPEN, CREATE_POST } from '../../graphql/mutations.graphql';
import { adopt } from 'react-adopt';

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`
  },
  submit: {
    marginTop: theme.spacing.unit * 2,
    float: 'right'
  }
});
const Composed = adopt({
  isOpen: <Query query={CREATE_POST_MODAL_OPEN}>{() => {}}</Query>,
  createPost: ({ title, text, img, render }) => (
    <Mutation mutation={CREATE_POST} variables={{ title, text, img }} refetchQueries={res => [{ query: POSTS }]}>
      {(mutation, result) => render({ mutation, result })}
    </Mutation>
  ),
  toggle: <Mutation mutation={TOGGLE_POST_MODAL_OPEN}>{() => {}}</Mutation>
});
class CreatePostModal extends Component {
  state = {
    title: '',
    text: '',
    img: ''
  };
  handleOnChange = name => e => {
    e.preventDefault();
    this.setState({ [name]: e.target.value });
  };
  render() {
    const { classes } = this.props;
    const { title, text, img } = this.state;
    return (
      <Composed title={title} text={text} img={img}>
        {({ isOpen, toggle, createPost }) => {
          if (isOpen.loading || toggle.loading) console.log('loading', { isOpen, toggle });
          if (isOpen.error || toggle.error) console.error({ isOpen, toggle });
          return (
            <Modal
              aria-labelledby="Create post"
              aria-describedby="Create and publish a post"
              open={isOpen.data.createPostModalOpen}
              onClose={toggle}
            >
              <div className={classes.paper}>
                <Typography variant="headline" gutterBottom>
                  Create Post
                </Typography>
                <form
                  onSubmit={e => {
                    e.preventDefault();
                    return createPost
                      .mutation()
                      .then(res => {
                        if (res.data) {
                          toggle();
                        }
                      })
                      .catch(err => {
                        console.error(err);
                      });
                  }}
                >
                  <TextField
                    id="new-post-title"
                    label="Title"
                    margin="normal"
                    required
                    fullWidth
                    value={title}
                    onChange={this.handleOnChange('title')}
                  />
                  <TextField
                    id="new-post-text"
                    label="Text"
                    margin="normal"
                    required
                    fullWidth
                    value={text}
                    multiline
                    rowsMax="10"
                    onChange={this.handleOnChange('text')}
                  />
                  <TextField
                    id="new-post-img-url"
                    label="Image Url"
                    margin="normal"
                    fullWidth
                    value={img}
                    onChange={this.handleOnChange('img')}
                  />
                  <Button variant="raised" type="submit" color="primary" className={classes.submit}>
                    Submit
                  </Button>
                </form>
              </div>
            </Modal>
          );
        }}
      </Composed>
    );
  }
}

CreatePostModal.propTypes = {};

export default withStyles(styles)(CreatePostModal);
