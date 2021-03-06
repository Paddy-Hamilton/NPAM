import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Query, Mutation } from 'react-apollo';
import Modal from '@material-ui/core/Modal';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { POSTS, POST } from '../../graphql/queries.graphql';
import SnackBarNotification from '../SnackBarNotification';
import { EditPostModalContainer } from './Container';
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

class EditPostModal extends Component {
  constructor(props) {
    super(props);
    const { title, text, img } = props;
    this.state = {
      title: title || '',
      text: text || '',
      img: img || '',
      snackbar: {
        message: '',
        type: ''
      }
    };
  }
  handleOnChange = name => e => {
    e.preventDefault();
    this.setState({ [name]: e.target.value });
  };
  handleClearSnackbar = () => {
    this.setState({
      snackbar: {
        message: '',
        type: ''
      }
    });
  };

  render() {
    const {
      classes,
      postId,
      isOpen,
      toggle,
      editPost,
      currentUser: {
        data: { me }
      }
    } = this.props;
    const {
      title,
      text,
      img,
      snackbar: { message, type }
    } = this.state;
    if (isOpen.loading || toggle.loading) console.log('loading', { isOpen, toggle });
    if (isOpen.error || toggle.error) console.error({ isOpen, toggle });
    return (
      <>
        <Modal
          aria-labelledby={`${postId ? 'Edit' : 'Create'} post`}
          aria-describedby={`${postId ? 'Edit' : 'Create and publish'} a post`}
          open={isOpen.data.editPostModalOpen}
          onClose={toggle}
        >
          <div className={classes.paper}>
            <Typography variant="headline" gutterBottom>
              {`${postId ? 'Edit' : 'Create'} post`}
            </Typography>
            <form
              onSubmit={e => {
                e.preventDefault();
                return editPost({
                  variables: {
                    title,
                    postId,
                    text,
                    img
                  },
                  refetchQueries: [{ query: POSTS }, { query: POST, variables: { id: postId } }]
                })
                  .then(res => {
                    if (res.data) {
                      toggle();
                      this.setState({
                        snackbar: {
                          message: 'Post Saved',
                          type: 'success'
                        }
                      });
                    }
                  })
                  .catch(err => {
                    console.error(err);
                    this.setState({
                      snackbar: {
                        message: `Error whilst trying to save post: ${err} `,
                        type: 'warning'
                      }
                    });
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
        {message && <SnackBarNotification message={message} type={type} onClose={this.handleClearSnackbar} />}
      </>
    );
  }
}

EditPostModal.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  img: PropTypes.string,
  postId: PropTypes.string
};

export const EditPostModalStyled = withStyles(styles)(EditPostModal);

export default ({ ...props }) => (
  <EditPostModalContainer>
    {({ ...containerProps }) => <EditPostModalStyled {...containerProps} {...props} />}
  </EditPostModalContainer>
);
