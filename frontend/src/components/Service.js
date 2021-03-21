import React from "react";
import { ListGroup } from "react-bootstrap";

function Service({ service }) {
  return (
    <ListGroup.Item>
      {service.serviceName} - {service.price}
    </ListGroup.Item>
  );
}

export default Service;
