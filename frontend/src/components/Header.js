import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { logout } from "../actions/userActions";

function Header() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };
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
          <LinkContainer to="/booking">
            <Nav.Link>Bookings</Nav.Link>
          </LinkContainer>
          {userInfo ? (
            <NavDropdown title={userInfo.name} id="username">
              <LinkContainer to="/profile">
                <NavDropdown.Item>Profile</NavDropdown.Item>
              </LinkContainer>

              <NavDropdown.Item onClick={logoutHandler}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          ) : (
            <LinkContainer to="/login">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
          )}

          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar>
    </header>
  );
}

export default Header;
