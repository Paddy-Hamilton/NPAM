import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';
import { SIGNIN, TOGGLE_SIGNIN_MODAL } from '../../graphql/mutations.graphql';
import { SIGNIN_MODAL_OPEN, CURRENT_USER } from '../../graphql/queries.graphql';
import { Mutation, Query } from 'react-apollo';
import { adopt } from 'react-adopt';

console.log({ CURRENT_USER });
const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
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
  }
});

const Composed = adopt({
  isOpen: <Query query={SIGNIN_MODAL_OPEN}>{() => {}}</Query>,
  signin: ({ password, email, render }) => (
    <Mutation mutation={SIGNIN} variables={{ email, password }} refetchQueries={res => [{ query: CURRENT_USER }]}>
      {(mutation, result) => render({ mutation, result })}
    </Mutation>
  ),
  toggle: <Mutation mutation={TOGGLE_SIGNIN_MODAL}>{() => {}}</Mutation>
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
    const { classes } = this.props;
    const { email, password } = this.state;
    return (
      <Composed email={email} password={password}>
        {({ isOpen, signin, toggle }) => {
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
                    return signin
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
                    id="email"
                    label="Email"
                    className={classes.textField}
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
                    margin="normal"
                    value={password}
                    onChange={this.handleChange('password')}
                  />
                  <Button variant="raised" type="submit" color="primary">
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

SignIn.propTypes = {};

export default withStyles(styles)(SignIn);
