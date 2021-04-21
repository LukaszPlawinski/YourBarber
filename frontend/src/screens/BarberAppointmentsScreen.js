import React, { useState, useEffect } from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { Form, Button, Row, Col, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { listServices } from "../actions/serviceActions";
import { listMyAppointments } from "../actions/appointmentsActions";
import { listUsers } from "../actions/userActions";

function MyAppointmentsScreen({ history }) {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const serviceList = useSelector((state) => state.serviceList);
  const { services } = serviceList;
  const userList = useSelector((state) => state.userList);
  const { users } = userList;

  const myList = useSelector((state) => state.myList);
  const {
    loading: loadingAppointments,
    error: errorAppointments,
    appointments,
  } = myList;

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else {
      dispatch(listUsers());
      dispatch(listServices());
      dispatch(listMyAppointments());
    }
  }, [dispatch, history, userInfo]);

  return (
    <Row className="justify-content-sm-center">
      <Col md={9}>
        <h4>Barber Appointments</h4>
        {loadingAppointments ? (
          <Loader />
        ) : errorAppointments ? (
          <Message variant="danger">{errorAppointments}</Message>
        ) : (
          <Table striped responsive className="table-sm">
            <thead>
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Client</th>
                <th>Service</th>
                <th>Cost</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment) => (
                <tr>
                  <React.Fragment>
                    <td>{appointment.date.slice(0, 10)}</td>
                    <td>{appointment.date.slice(11, -4)}</td>
                  </React.Fragment>

                  {users.map((user) =>
                    user._id === appointment.user ? <td>{user.name}</td> : null
                  )}
                  {services.map((service) =>
                    service._id === appointment.service ? (
                      <React.Fragment>
                        <td>{service.serviceName}</td>
                        <td>{service.price}</td>
                      </React.Fragment>
                    ) : null
                  )}
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Col>
    </Row>
  );
}

export default MyAppointmentsScreen;
