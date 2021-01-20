import React from 'react';
import { Container } from 'react-bootstrap';
import CarItem from '../components/CarItem';

export default function CarContainer() {
  return (
    <Container className="bg-dark">
      <div className="mt-5 d-flex flex-wrap justify-content-center">
        <CarItem />
        <CarItem />
        <CarItem />
        <CarItem />
        <CarItem />
        <CarItem />
        <CarItem />
        <CarItem />
      </div>
    </Container>
  );
}
