import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAppointments } from "../actions/appointmentsActions";
import DatePicker from "react-datepicker";
import { setUserDate } from "../actions/appointmentsActions";
import "react-datepicker/dist/react-datepicker.css";

function Appointments() {
  // redux dodanie nowej akcji do reduxa oraz zainicjalizowanie globalnego statea z wybrana data
  const dispatch = useDispatch();
  const { error, loading, appointments, user_appointment } = useSelector(
    (state) => state.appointmentsList
  );
  useEffect(() => {
    dispatch(setAppointments());
  }, [dispatch]);

  const handleDataChange = (date) => {
    dispatch(setUserDate(date));
  };

  return (
    <div>
      <h1>Appointments</h1>
      <DatePicker
        showTimeSelect
        selected={user_appointment}
        onChange={(date) => handleDataChange(date)}
        on
      />
    </div>
  );
}

export default Appointments;
