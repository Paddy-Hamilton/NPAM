import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';
import { SignInContainer } from './Container';
const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
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
    float: 'right',
    marginTop: theme.spacing.unit * 3
  }
});

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  };
  handleChange = name => e => {
    this.setState({
      [name]: e.target.value
    });
  };

  render() {
    const { classes, isOpen, signin, toggle } = this.props;
    const { email, password } = this.state;
    return (
      <Modal
        aria-labelledby="Sign In"
        aria-describedby="Sign user in"
        open={isOpen.data.signinModalOpen}
        onClose={toggle}
      >
        <div className={classes.paper}>
          <form
            className={classes.container}
            autoComplete="off"
            onSubmit={e => {
              e.preventDefault();
              return signin({
                variables: { email, password }
              })
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
              id="email"
              label="Email"
              value={email}
              onChange={this.handleChange('email')}
              margin="normal"
              required
              fullWidth
            />
            <TextField
              required
              label="Password"
              type="password"
              fullWidth
              margin="normal"
              value={password}
              onChange={this.handleChange('password')}
            />
            <Button variant="raised" type="submit" color="primary" className={classes.submit}>
              Login
            </Button>
          </form>
        </div>
      </Modal>
    );
  }
}

SignIn.propTypes = {};

export const SignInStyled = withStyles(styles)(SignIn);
export default () => (
  <SignInContainer>
    {({ isOpen, signin, toggle }) => <SignInStyled isOpen={isOpen} signin={signin} toggle={toggle} />}
  </SignInContainer>
);
