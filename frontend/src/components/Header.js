import React from 'react'
import { Container, Row, Navbar,Nav } from 'react-bootstrap'

function Header() {
     return (
          <header>
               <Navbar bg="dark" variant="dark" className="justify-content-center">
               <Nav>
                    <Nav.Link href="#home">About</Nav.Link>
                    <Nav.Link href="#services">Services</Nav.Link>
                    <Nav.Link href="#barbers">Barbers</Nav.Link>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav.Link href="#booking">Booking</Nav.Link>
                    <Nav.Link href="#login">Login</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
               </Nav>
               </Navbar>
          </header>
     )
}

export default Header
