import React from "react";
import { Row, Col } from "react-bootstrap";
import services from "../services";

function Services() {
  return (
    <div>
      <h2 className="py-3">Services</h2>
      <Row>
        {services.map((service) => (
          <Col key={service._id} sm={12}>
            <p>
              {service.name} price: {service.price}
            </p>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Services;
