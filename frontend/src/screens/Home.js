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

function Home() {
  const dispatch = useDispatch();
  const { is_paid } = useSelector((state) => state.appointmentsList);

  const handleClick = () => {
    dispatch(setUserDate(""));
    dispatch(setUserService({}));
    dispatch(setBarber({}));
    dispatch(setAppointmentIsPaid(false));
  };

  if (is_paid == true) {
    return (
      <div>
        <Message variant="success">Succesfully added appointment</Message>
        <Button onClick={handleClick}>Okay</Button>
      </div>
    );
  } else {
    return <div>Home</div>;
  }
}

export default Home;
