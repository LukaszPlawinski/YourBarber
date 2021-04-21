import React, { useEffect } from "react";
import { Row, Col, ListGroup, Button } from "react-bootstrap";
import Service from "../components/Service";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { useDispatch, useSelector } from "react-redux";
import { listServices } from "../actions/serviceActions";
import { useHistory } from "react-router-dom";

function Services({ location }) {
  const dispatch = useDispatch();
  const serviceList = useSelector((state) => state.serviceList);
  const { error, loading, services } = serviceList;
  let history = useHistory();
  const handleClick = () => {
    history.push("/booking");
  };
  useEffect(() => {
    dispatch(listServices());
  }, [dispatch]);

  return (
    <div>
      <h4 className="py-3">Select Service</h4>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row className="justify-content-center">
          <ListGroup variant="flush">
            {services.map((service) => (
              <Col key={service._id} sm={12}>
                <Service service={service} />
              </Col>
            ))}
          </ListGroup>
        </Row>
      )}
      {Object.keys(serviceList.user_service).length !== 0 &&
      location.pathname == "/services" ? (
        <Button
          variant="outline-warning"
          onClick={handleClick}
          style={{
            marginTop: "30px",
          }}
        >
          Book appointment
        </Button>
      ) : null}
    </div>
  );
}

export default Services;
