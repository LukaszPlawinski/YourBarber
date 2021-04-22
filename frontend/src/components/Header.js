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
          <LinkContainer to="/home">
            <Nav.Link className="mt-2 ml-3 ">About</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/services">
            <Nav.Link className="mt-2 ml-3 ">Services</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/barbers">
            <Nav.Link className="mt-2 ml-3 ">Barbers</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/home">
            <Navbar.Brand className="ml-3 ">
              <img
                src="/images/Logo.png"
                width="50"
                height="50"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
          </LinkContainer>
          <LinkContainer to="/booking">
            <Nav.Link className="mt-2 ">Booking</Nav.Link>
          </LinkContainer>
          {userInfo ? (
            <NavDropdown className="mt-2 " title={userInfo.name} id="username">
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
              <Nav.Link className="mt-2 ">Login</Nav.Link>
            </LinkContainer>
          )}
          <LinkContainer to="/contact">
            <Nav.Link className="mt-2 ">Contact</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar>
    </header>
  );
}

export default Header;
