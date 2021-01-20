import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';

export default function Register() {
  return (
    <Container className="login-box">
      <h2 className="about-section__primary">
        Sign up
      </h2>
      <p className="mb-3">
        Hello there! Sign up and book your ride
      </p>
      <Form className="w-50">
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button className="btn-oval pl-4 pr-4" type="submit">
          Sign up
        </Button>
      </Form>
    </Container>
  );
}
