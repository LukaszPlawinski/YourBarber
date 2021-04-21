import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Barbers from "./Barbers";
import Services from "./Services";
import Appointments from "./Appointments";
import Summary from "../components/Summary";
import Message from "../components/Message";
import { Button, Row, Col } from "react-bootstrap";

function Booking() {
  const [state, setState] = useState({
    logged: false,
    isConfirmed: false,
  });
  const { barberList, appointmentsList, serviceList, userLogin } = useSelector(
    (state) => state
  );
  const userInfo = userLogin.userInfo;
  useEffect(() => {
    isUserLogged();
  }, []);
  let history = useHistory();
  const handleBtnClick = () => {
    history.push("/login");
  };
  const handleClick = () => {
    setState({
      ...state,
      isConfirmed: true,
    });
  };

  const isUserLogged = () => {
    const data = localStorage.getItem("userInfo");
    if (data) {
      setState({
        ...state,
        logged: true,
      });
    }
  };

  if (state.logged && state.isConfirmed) {
    return (
      <div>
        <Summary
          barber={barberList.user_barber}
          service={serviceList.user_service}
          appointment={appointmentsList.user_appointment}
          user={userInfo}
        />
      </div>
    );
  } else if (state.logged) {
    return (
      <div>
        <Services location />
        {Object.keys(serviceList.user_service).length !== 0 ? (
          <Barbers location />
        ) : null}
        {Object.keys(barberList.user_barber).length !== 0 &&
        Object.keys(serviceList.user_service).length !== 0 ? (
          <Appointments barber={barberList.user_barber} />
        ) : null}

        {Object.keys(barberList.user_barber).length !== 0 &&
        Object.keys(serviceList.user_service).length !== 0 &&
        appointmentsList.user_appointment !== "" ? (
          <Button
            variant="outline-warning"
            onClick={handleClick}
            style={{
              marginTop: "30px",
              background: "#282828",
            }}
          >
            Next
          </Button>
        ) : null}
      </div>
    );
  } else {
    return (
      <React.Fragment>
        <Message variant="light">You are not logged in.</Message>
        <Button
          onClick={handleBtnClick}
          type="submit"
          variant="outline-warning"
        >
          Login
        </Button>
      </React.Fragment>
    );
  }
}

export default Booking;
