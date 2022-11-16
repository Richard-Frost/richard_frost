import React from 'react'
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

function BootNav() {
    return (
      <Navbar className="color-nav" fixed="top" expand="lg">
          <Navbar.Brand href="#home">Richard Frost</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    );
  }
  
  export default BootNav;