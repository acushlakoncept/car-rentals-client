import React from 'react';
import { useSelector } from 'react-redux';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Navigation() {
  // const token = useSelector(state => state);
  // const token = useSelector(state => state.getIn(['user', 'token']));
  const token = useSelector(state => state.user.token);

  return (
    <Navbar collapseOnSelect expand="sm">
      <Navbar.Brand href="/">Car Rentals</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto" />
        <Nav>
          {
            token === undefined || token === 'undefined'
              ? (
                <>
                  <Link className="nav-link white" to="/login">SIGN IN</Link>
                  <Link className="nav-link" to="/register">
                    <span className="btn-menu">SIGN UP</span>
                  </Link>
                </>
              )
              : (<Link className="nav-link white" to="/logout">LOGOUT</Link>)
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
