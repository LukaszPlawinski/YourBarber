import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function Header() {
  return (
    <header>
      <Navbar bg="dark" variant="dark" className="justify-content-center">
        <Nav>
          <LinkContainer to="/">
            <Nav.Link>About</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/services">
            <Nav.Link>Services</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/barbers">
            <Nav.Link>Barbers</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/">
            <Navbar.Brand className="ml-3">LOGO</Navbar.Brand>
          </LinkContainer>
          <Nav.Link href="#booking">Booking</Nav.Link>
          <Nav.Link href="#login">Login</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar>
    </header>
  );
}

export default Header;
