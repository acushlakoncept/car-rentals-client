import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <Navbar collapseOnSelect expand="sm">
      <Navbar.Brand href="/">Car Rentals</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto" />
        <Nav>
          <Link className="nav-link white" to="/login">SIGN IN</Link>
          <Link className="nav-link" to="/register">
            <span className="btn-menu">SIGN UP</span>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
