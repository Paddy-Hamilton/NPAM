import React from 'react';
import Button from '@material-ui/core/Button';
import { SignInButtonContainer } from './Container';

export const SignInButton = ({ currentUser, signout, toggleSigninModal, ...rest }) => {
  return (
    <Button {...rest} onClick={() => (!currentUser.data.me ? toggleSigninModal() : signout())}>
      <a>{!currentUser.data.me || currentUser.error ? 'Sign in' : 'Sign out'}</a>
    </Button>
  );
};

export default props => (
  <SignInButtonContainer>
    {({ currentUser, signout, toggleSigninModal }) => (
      <SignInButton {...props} currentUser={currentUser} signout={signout} toggleSigninModal={toggleSigninModal} />
    )}
  </SignInButtonContainer>
);
