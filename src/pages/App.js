import React from 'react';
import {
  Row, Col, Container, Navbar, Nav,
} from 'react-bootstrap';
import '../App.scss';
import ride from '../imgs/ride.jpg';

function App() {
  return (
    <Container fluid="sm" className="mobile-width">
      <Row>

        <header className="header">
          <Navbar collapseOnSelect expand="sm">
            <Navbar.Brand href="#home">Car Rentals</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto" />
              <Nav>
                <Nav.Link href="#deets">Sign in</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  Sign up
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <div className="header-content mt-5">
            <h1 className="header-content__title">Find perfect rides that fits </h1>
            <p className="header-content__desc">
              The best offers for you at any point of your journey.
              Classy rides that meets your taste.
            </p>
            <p>
              <a href="#register" className="btn btn-danger rounded">Hire Now</a>
            </p>
          </div>
        </header>

      </Row>

      <section className="about-section">
        <h4 className="about-section__sub">Simple and fast way to rent</h4>
        <h2 className="about-section__primary pb-4">Comfortable ride from reliable people</h2>
        <Row className="mt-5">
          <Col sm={6}>
            <h4 className="about-section__left-title">Ride Availability is 24/7</h4>
            <p className="about-section__desc">
              You will have the best support to manage and collect every vehicle information
              about the ride. Full control will save you from any unforeseen situations and
              save you money and public transport related issues
            </p>
            <p><a href="#register" className="btn btn-danger rounded">Learn more</a></p>
          </Col>
          <Col sm={6}>
            <img src={ride} className="img-fluid" alt="ride" />
          </Col>
        </Row>
      </section>

    </Container>
  );
}

export default App;
