import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Barbers from "./Barbers";
import Services from "./Services";
import Appointments from "./Appointments";
import Summary from "../components/Summary";
import { Button } from "react-bootstrap";

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
    return <p>You are not logged</p>;
  }
}

export default Booking;
