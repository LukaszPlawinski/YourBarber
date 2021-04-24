import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setUserDate,
  setAppointmentIsPaid,
} from "../actions/appointmentsActions";
import { setBarber } from "../actions/barberActions";
import { setUserService } from "../actions/serviceActions";
import { Button } from "react-bootstrap";
import Message from "../components/Message";
import About from "../components/About";
import CookieConsent from "react-cookie-consent";

function Home() {
  const dispatch = useDispatch();
  const { is_paid } = useSelector((state) => state.appointmentsList);

  const handleClick = () => {
    dispatch(setUserDate(""));
    dispatch(setUserService({}));
    dispatch(setBarber({}));
    dispatch(setAppointmentIsPaid(false));
  };

  if (is_paid === true) {
    return (
      <div>
        <Message variant="light">Appointment Is Successfully Created !</Message>
        <Button variant="outline-warning" onClick={handleClick}>
          Okay
        </Button>
      </div>
    );
  } else {
    return (
      <div>
        <About />
        <CookieConsent buttonText="Ok">
          This website uses cookies to enhance the user experience. By clicking
          Ok you are agreeing to that.
        </CookieConsent>
      </div>
    );
  }
}

export default Home;
