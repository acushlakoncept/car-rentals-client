import React from 'react';
import { Container } from 'react-bootstrap';
import Navigation from '../components/Navigation';
import CarContainer from '../container/CarContainer';

export default function Cars() {
  return (
    <Container className="bg-dark">
      <Navigation />
      <CarContainer />
    </Container>
  );
}
