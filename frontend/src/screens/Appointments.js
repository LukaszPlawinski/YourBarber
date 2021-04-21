import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAppointments } from "../actions/appointmentsActions";
import DatePicker from "react-datepicker";
import { setUserDate } from "../actions/appointmentsActions";
import "react-datepicker/dist/react-datepicker.css";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import parseISO from "date-fns/parseISO";

function Appointments({ barber }) {
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

  const filterPassedTime = (time) => {
    var answer = true;

    const appointmentDates = appointments.map((appointment) => {
      if (barber._id === appointment.barber) {
        return parseISO(appointment.date).getTime();
      }
    });

    const currentDate = new Date();
    const selectedDate = new Date(time);
    return (
      currentDate.getTime() < selectedDate.getTime() &&
      !appointmentDates.includes(selectedDate.getTime())
    );
  };
  const isWeekday = (date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };

  return (
    <div>
      <h4 className="py-3">Select Date</h4>
      <DatePicker
        showTimeSelect
        placeholderText="Select date and time"
        filterDate={isWeekday}
        selected={user_appointment}
        onChange={(date) => handleDataChange(date)}
        minTime={setHours(setMinutes(new Date(), 0), 8)}
        maxTime={setHours(setMinutes(new Date(), 0), 17)}
        filterTime={filterPassedTime}
        dateFormat="MMMM d, yyyy h:mm aa"
      />
    </div>
  );
}

export default Appointments;
