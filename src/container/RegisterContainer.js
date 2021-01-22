import React, { useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import FormElement from '../components/FormElement';
import { registerUser } from '../redux/actions';

function RegisterContainer({ userData, signupUser }) {
  const username = useRef();
  const password = useRef();

  const handleRegistration = e => {
    e.preventDefault();

    const data = {
      user: {
        username: username.current.value,
        password: password.current.value,
      },
    };
    signupUser(data);
  };

  let error = '';
  if (userData.error) {
    error = userData.error;
  }

  return userData.token === undefined || userData.token === 'undefined'
    ? (
      <>
        <h2 className="about-section__primary">Sign up</h2>
        <p className="mb-3">Hello there! Sign up and book your ride</p>
        <p className="text-danger">{ error}</p>
        <FormElement username={username} password={password} type="Sign up" handleSubmit={handleRegistration} />
      </>
    ) : (
      <Redirect to="/cars" />
    );
}

const mapStateToProps = state => ({
  userData: state.user,
});

const mapDispatchToProps = dispatch => ({
  signupUser: info => dispatch(registerUser(info)),
});

RegisterContainer.propTypes = {
  signupUser: PropTypes.func.isRequired,
  userData: PropTypes.instanceOf(Object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);
