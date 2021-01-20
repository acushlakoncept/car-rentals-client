import React from 'react';
import { Card, Button } from 'react-bootstrap';
import ride from '../imgs/ride.jpg';

export default function CarItem() {
  return (
    <Card style={{ width: '18rem' }} className="m-2">
      <Card.Img variant="top" src={ride} />
      <Card.Body>
        <Card.Title className="font-weight-bold">Toyota Corolla 2011 Silver</Card.Title>
        <Card.Text>
          <span className="badge badge-secondary">Automatic</span>
          {' '}
          {' '}
          <span className="badge badge-pill badge-success">AC - Yes </span>
          {' '}
          <span className="badge badge-info">2021-01-18</span>
        </Card.Text>
        <Button className="btn-oval w-100">Hire now</Button>
      </Card.Body>
    </Card>
  );
}
