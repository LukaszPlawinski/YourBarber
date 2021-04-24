import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer>
      <Container className="text-center">
        <Row>
          <Col>
            <p class="copyright text-muted">
              Copyright &copy; Lukasz Plawinski 2021
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
