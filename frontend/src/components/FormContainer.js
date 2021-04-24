import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function FormContainer({ children, size }) {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={size}>
          {children}
        </Col>
      </Row>
    </Container>
  );
}

export default FormContainer;
