import React from "react";
import { Card, Button } from "react-bootstrap";

function Barber({ barber }) {
  return (
    <Card className="p-4 my-3 mx-3">
      <a href={`/barber/${barber._id}`}>
        <Card.Img src={barber.image} />
      </a>
      <Card.Body>
        <Card.Title>{barber.nickname}</Card.Title>
        <Button variant="outline-warning">Book</Button>
      </Card.Body>
    </Card>
  );
}

export default Barber;
