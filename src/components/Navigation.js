import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export default function Navigation() {
  return (
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
  );
}
