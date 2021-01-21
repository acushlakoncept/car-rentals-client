import React from 'react';
import { Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function FormElement({ type, handleSubmit }) {
  return (
    <Form className="w-50" onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button className="btn-oval pl-4 pr-4" type="submit">
        { type }
      </Button>
      <Link className="nav-link text-danger" to="/">
        &larr; Back to home
      </Link>
    </Form>
  );
}

FormElement.propTypes = {
  type: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default FormElement;
