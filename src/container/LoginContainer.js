import React from 'react';
import FormElement from '../components/FormElement';

function LoginContainer() {
  const handleLogin = e => {
    e.preventDefault();
  };

  return (
    <>
      <h2 className="about-section__primary">Sign in</h2>
      <p className="mb-3">Hello there! Sign in and book your ride</p>
      <FormElement type="Sign in" handleSubmit={handleLogin} />
    </>
  );
}

export default LoginContainer;
