import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Header.css';
import logo from '../assets/logo.png';

const Headers = () => {
  return (
    <Navbar className="navbar" bg="dark" variant="dark" expand="lg">
    <Navbar.Brand href="/" className="navbar-brand">
      <img src={logo} alt="Logo" />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="/" className="nav-link">Home</Nav.Link>
        <Nav.Link href="/pricing" className="nav-link">Pricing</Nav.Link>
        <Nav.Link href="/product" className="nav-link">Product</Nav.Link>
        <Nav.Link href="/contact" className="nav-link">Contact</Nav.Link>
        <button className="try-button">Try us for free</button>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  );
};

export default Headers;
