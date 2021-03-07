import React from "react";
import { Row, Col } from "react-bootstrap";
import barbers from "../barbers";
import Barber from "../components/Barber";

function Barbers() {
  return (
    <div>
      <h2 className="py-3">Barbers</h2>
      <Row>
        {barbers.map((barber) => (
          <Col key={barber._id} sm={12} md={6} lg={4}>
            <Barber barber={barber} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Barbers;
