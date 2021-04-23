import React from "react";
import { Row, Col, Card } from "react-bootstrap";

function ContactDetails() {
  return (
    <div>
      <Row className="justify-content-sm-center">
        <Col xs={12} md={4}>
          <Card className="text-center my-4" style={{ border: "none" }}>
            <Card.Body>
              <Card.Title className="mb-4">Address</Card.Title>
              <Card.Text>
                <p>7 Mullingar Rd.</p>
                <p>Dublin</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card className="text-center my-4" style={{ border: "none" }}>
            <Card.Body>
              <Card.Title className="mb-4">Get in Touch</Card.Title>
              <Card.Text>
                <p>Contact@yourbarber.ie</p>
                <p>0891234567</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card className="text-center my-4" style={{ border: "none" }}>
            <Card.Body>
              <Card.Title className="mb-4">Oppening hours</Card.Title>
              <Card.Text>
                <p>Mon-Fri: 8am-5pm</p>
                <p>Sat-Sun: Closed</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default ContactDetails;
