import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, Button, Accordion } from "react-bootstrap";
import { setBarber } from "../actions/barberActions";

function Barber({ barber }) {
  const dispatch = useDispatch();
  const barberList = useSelector((state) => state.barberList);
  const handleClick = () => {
    dispatch(setBarber(barber));
  };
  if (barberList.user_barber._id === barber._id) {
    return (
      <Card
        style={{ border: "2px solid orange" }}
        className="px-4 pt-4 my-3 mx-3"
      >
        <Card.Img onClick={handleClick} src={barber.image} />
        <Card.Body>
          <Card.Title>{barber.nickname}</Card.Title>
          <Button onClick={handleClick} variant="outline-warning">
            Select
          </Button>
          <Accordion className="mt-2">
            <Accordion.Toggle
              as={Button}
              variant="outline-warning"
              eventKey="0"
            >
              More Info
            </Accordion.Toggle>

            <Accordion.Collapse eventKey="0">
              <Card.Body>{barber.description}</Card.Body>
            </Accordion.Collapse>
          </Accordion>
        </Card.Body>
      </Card>
    );
  } else {
    return (
      <Card //bg={'primary'}
        className="px-4 pt-4 my-3 mx-3"
      >
        <Card.Img onClick={handleClick} src={barber.image} />
        <Card.Body>
          <Card.Title>{barber.nickname}</Card.Title>
          <Button onClick={handleClick} variant="outline-warning">
            Select
          </Button>
          <Accordion className="mt-2">
            <Accordion.Toggle
              as={Button}
              variant="outline-warning"
              eventKey="0"
            >
              More Info
            </Accordion.Toggle>

            <Accordion.Collapse eventKey="0">
              <Card.Body>{barber.description}</Card.Body>
            </Accordion.Collapse>
          </Accordion>
        </Card.Body>
      </Card>
    );
  }
}

export default Barber;
