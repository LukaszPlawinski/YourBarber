import React from "react";
import { ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setUserService } from "../actions/serviceActions";

function Service({ service }) {
  const dispatch = useDispatch();
  const serviceList = useSelector((state) => state.serviceList);
  const handleClick = () => {
    dispatch(setUserService(service));
  };
  return (
    <ListGroup.Item>
      {service.serviceName} - {service.price}
    </ListGroup.Item>
  );
}

export default Service;
