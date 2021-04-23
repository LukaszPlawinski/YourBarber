import React from "react";
import FormContainer from "./FormContainer";
import { Row, Col, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function About() {
  let history = useHistory();
  const handleClick = () => {
    history.push("/booking");
  };
  return (
    <div>
      <FormContainer>
        <Row>
          <Col>
            <h4 className="mb-5">About us</h4>
            <p>
              Your Barber Shop was created for real guys who demand more than a
              10-minute haircut. Our salon is not just a barbershop - it's a
              place where men can feel special.
            </p>
            <p>
              Thanks to qualified employees working in our salon, professional
              beard and moustache styling is possible. We are committed to
              ensuring that our services are at the highest level, and customers
              using them are satisfied. We make sure that hair cutting is a
              pleasure for men, therefore you will not have to wait in line with
              us. We will make an appointment with you for a specific day and
              time, so you won't lose precious time, and we will have enough of
              it to take care of your hair.
            </p>
            <Button
              variant="outline-warning"
              onClick={handleClick}
              style={{
                margin: "30px 0px",
              }}
            >
              {" "}
              Book Now
            </Button>
          </Col>
          <Col>
            <img src="/images/about.jpg" alt="" />
          </Col>
        </Row>
      </FormContainer>
    </div>
  );
}

export default About;
