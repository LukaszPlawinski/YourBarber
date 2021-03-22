import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col, ListGroup } from "react-bootstrap";
import Service from "../components/Service";
import { useDispatch, useSelector } from "react-redux";
import { listServices } from "../actions/serviceActions";

function Services() {
  const dispatch = useDispatch();
  const serviceList = useSelector((state) => state.serviceList);
  const { error, loading, services } = serviceList;
  useEffect(() => {
    dispatch(listServices());
  }, [dispatch]);

  return (
    <div>
      <h2 className="py-3">Services</h2>
      {loading ? (
        <h3>Loading...</h3>
      ) : error ? (
        <h4>{error}</h4>
      ) : (
        <Row className="justify-content-md-center">
          <ListGroup variant="flush">
            {services.map((service) => (
              <Col key={service._id} sm={12}>
                <Service service={service} />
              </Col>
            ))}
          </ListGroup>
        </Row>
      )}
    </div>
  );
}

export default Services;
