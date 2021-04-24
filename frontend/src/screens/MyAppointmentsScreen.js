import React, { useEffect } from "react";
import { Row, Col, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { listBarbers } from "../actions/barberActions";
import { listServices } from "../actions/serviceActions";
import { listMyAppointments } from "../actions/appointmentsActions";

function MyAppointmentsScreen({ history }) {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const barberList = useSelector((state) => state.barberList);
  const { barbers } = barberList;
  const serviceList = useSelector((state) => state.serviceList);
  const { services } = serviceList;

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
      dispatch(listBarbers());
      dispatch(listServices());
      dispatch(listMyAppointments());
    }
  }, [dispatch, history, userInfo]);

  return (
    <Row className="justify-content-sm-center">
      <Col md={9}>
        <h4>My Appointments</h4>
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
                <th>Barber</th>
                <th>Service</th>
                <th>Cost</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment) => (
                <tr>
                  <React.Fragment>
                    <td>{appointment.date.slice(0, 10)}</td>
                    <td>{appointment.date.slice(11, -9)}</td>
                  </React.Fragment>
                  {barbers.map((barber) =>
                    barber._id === appointment.barber ? (
                      <td>{barber.nickname}</td>
                    ) : null
                  )}
                  {services.map((service) =>
                    service._id === appointment.service ? (
                      <React.Fragment>
                        <td>{service.serviceName}</td>
                        <td>{service.price} &euro;</td>
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
