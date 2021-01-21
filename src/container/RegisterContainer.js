import React from 'react';
import FormElement from '../components/FormElement';

function RegisterContainer() {
  const handleRegistration = e => {
    e.preventDefault();
  };

  return (
    <>
      <h2 className="about-section__primary">Sign up</h2>
      <p className="mb-3">Hello there! Sign up and book your ride</p>
      <FormElement type="Sign up" handleSubmit={handleRegistration} />
    </>
  );
}

export default RegisterContainer;
