import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { setBarber } from "../actions/barberActions";

function Barber({ barber }) {
  const dispatch = useDispatch();
  const barberList = useSelector((state) => state.barberList);
  const handleClick = () => {
    dispatch(setBarber(barber));
  };
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
