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
  if (serviceList.user_service._id == service._id) {
    return (
      <ListGroup.Item
        style={{ cursor: "pointer" }}
        active
        onClick={handleClick}
      >
        {service.serviceName} - {service.price}
      </ListGroup.Item>
    );
  } else {
    return (
      <ListGroup.Item style={{ cursor: "pointer" }} onClick={handleClick}>
        {service.serviceName} - {service.price}
      </ListGroup.Item>
    );
  }
}

export default Service;
