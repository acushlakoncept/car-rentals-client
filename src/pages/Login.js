import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';

export default function Login() {
  return (
    <Container className="login-box">
      <h2 className="about-section__primary">
        Sign in
      </h2>
      <p className="mb-3">
        Hello there! Sign in and book your ride
      </p>
      <Form className="w-50">
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button className="btn-oval pl-4 pr-4" type="submit">
          Sign in
        </Button>
      </Form>
    </Container>
  );
}
