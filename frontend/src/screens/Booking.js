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
  const { barberList, appointmentsList, serviceList } = useSelector(
    (state) => state
  );
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
        />
      </div>
    );
  } else if (state.logged) {
    return (
      <div>
        <Services />
        <Barbers />
        <Appointments />
        {Object.keys(barberList.user_barber).length !== 0 &&
        Object.keys(serviceList.user_service).length !== 0 &&
        appointmentsList.user_appointment !== "" ? (
          <Button
            onClick={handleClick}
            style={{
              marginTop: "30px",
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
