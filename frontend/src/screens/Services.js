import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col, ListGroup } from "react-bootstrap";
import Service from "../components/Service";

function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    async function fetchServices() {
      const { data } = await axios.get("http://127.0.0.1:8000/api/services/");
      setServices(data);
    }
    fetchServices();
  }, []);

  return (
    <div>
      <h2 className="py-3">Services</h2>
      <Row className="justify-content-md-center">
        <ListGroup variant="flush">
          {services.map((service) => (
            <Col key={service._id} sm={12}>
              <Service service={service} />
            </Col>
          ))}
        </ListGroup>
      </Row>
    </div>
  );
}

export default Services;
