import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ride from '../imgs/ride.jpg';

export default function AboutSection() {
  return (
    <section className="about-section">
      <h4 className="about-section__sub">Simple and fast way to rent</h4>
      <h2 className="about-section__primary pb-4">
        Comfortable ride from reliable people
      </h2>
      <Row className="mt-5">
        <Col sm={6}>
          <h4 className="about-section__left-title">
            Ride Availability is 24/7
          </h4>
          <p className="about-section__desc">
            You will have the best support to manage and collect every vehicle
            information about the ride. Full control will save you from any
            unforeseen situations and save you money and public transport
            related issues
          </p>
          <p>
            <a href="#register" className="btn btn-oval">
              Learn more
            </a>
          </p>
        </Col>
        <Col sm={6}>
          <img src={ride} className="img-fluid" alt="ride" />
        </Col>
      </Row>
    </section>
  );
}
