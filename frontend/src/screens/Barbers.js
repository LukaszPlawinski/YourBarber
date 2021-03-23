import React, { useEffect } from "react";
import Barber from "../components/Barber";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listBarbers } from "../actions/barberActions";

function Barbers() {
  const dispatch = useDispatch();
  const barberList = useSelector((state) => state.barberList);
  const { error, loading, barbers } = barberList;
  useEffect(() => {
    dispatch(listBarbers());
  }, [dispatch]);
  return (
    <div>
      <h2 className="py-3">Barbers</h2>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {barbers.map((barber) => (
            <Col key={barber._id} sm={12} md={6} lg={4}>
              <Barber barber={barber} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}

export default Barbers;
