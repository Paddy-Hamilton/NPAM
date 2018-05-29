import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Query, Mutation } from 'react-apollo';
import Modal from '@material-ui/core/Modal';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { EDIT_POST_MODAL_OPEN, POSTS, CURRENT_USER, POST } from '../../graphql/queries.graphql';
import { TOGGLE_POST_MODAL_OPEN, EDIT_POST } from '../../graphql/mutations.graphql';
import { adopt } from 'react-adopt';
import uuid from 'uuid/v4';

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
  currentUser: <Query query={CURRENT_USER}>{() => {}}</Query>,
  isOpen: <Query query={EDIT_POST_MODAL_OPEN}>{() => {}}</Query>,
  editPost: ({ title, text, img, postId, render }) => (
    <Mutation
      mutation={EDIT_POST}
      variables={{ title, text, img, postId }}
      refetchQueries={res => [{ query: POSTS }, { query: POST, variables: { id: postId } }]}
    >
      {(mutation, result) => render({ mutation, result })}
    </Mutation>
  ),
  toggle: <Mutation mutation={TOGGLE_POST_MODAL_OPEN}>{() => {}}</Mutation>
});
class EditPostModal extends Component {
  constructor(props) {
    super(props);
    const { title, text, img } = props;
    this.state = {
      title: title || '',
      text: text || '',
      img: img || ''
    };
  }
  handleOnChange = name => e => {
    e.preventDefault();
    this.setState({ [name]: e.target.value });
  };

  render() {
    const { classes, articleId } = this.props;
    const { title, text, img } = this.state;
    return (
      <Composed title={title} text={text} img={img} postId={articleId || ''}>
        {({
          isOpen,
          toggle,
          editPost,
          currentUser: {
            data: { me }
          }
        }) => {
          if (isOpen.loading || toggle.loading) console.log('loading', { isOpen, toggle });
          if (isOpen.error || toggle.error) console.error({ isOpen, toggle });
          return (
            <Modal
              aria-labelledby={`${articleId ? 'Edit' : 'Create'} post`}
              aria-describedby={`${articleId ? 'Edit' : 'Create and publish'} a post`}
              open={isOpen.data.editPostModalOpen}
              onClose={toggle}
            >
              <div className={classes.paper}>
                <Typography variant="headline" gutterBottom>
                  {`${articleId ? 'Edit' : 'Create'} post`}
                </Typography>
                <form
                  onSubmit={e => {
                    e.preventDefault();
                    return editPost
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
                    Save
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

EditPostModal.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  img: PropTypes.string,
  articleId: PropTypes.string
};

export default withStyles(styles)(EditPostModal);