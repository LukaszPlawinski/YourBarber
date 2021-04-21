import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { logout } from "../actions/userActions";
import { appointmentUserReset } from "../actions/appointmentsActions";
import { resetUserBarber } from "../actions/barberActions";
import { resetUserService } from "../actions/serviceActions";
import { useHistory } from "react-router-dom";

function Header() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  let history = useHistory();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
    dispatch(appointmentUserReset());
    dispatch(resetUserBarber());
    dispatch(resetUserService());
    history.push("/home");
  };
  return (
    <header>
      <Navbar bg="dark" variant="dark" className="justify-content-center">
        <Nav>
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
            <Nav.Link>Booking</Nav.Link>
          </LinkContainer>
          {userInfo ? (
            <NavDropdown title={userInfo.name} id="username">
              <LinkContainer to="/profile">
                <NavDropdown.Item>Profile</NavDropdown.Item>
              </LinkContainer>
              {userInfo.isBarber ? (
                <LinkContainer to="/barberappointments">
                  <NavDropdown.Item>Barber Appointments</NavDropdown.Item>
                </LinkContainer>
              ) : (
                <LinkContainer to="/myappointments">
                  <NavDropdown.Item>My Appointments</NavDropdown.Item>
                </LinkContainer>
              )}

              <NavDropdown.Item onClick={logoutHandler}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          ) : (
            <LinkContainer to="/login">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
          )}
        </Nav>
      </Navbar>
    </header>
  );
}

export default Header;
