import React, { useEffect } from "react";
import Barber from "../components/Barber";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listBarbers } from "../actions/barberActions";
import { useHistory } from "react-router-dom";

function Barbers({ location }) {
  const dispatch = useDispatch();
  const barberList = useSelector((state) => state.barberList);
  const { error, loading, barbers } = barberList;
  let history = useHistory();
  const handleClick = () => {
    history.push("/booking");
  };
  useEffect(() => {
    dispatch(listBarbers());
  }, [dispatch]);
  return (
    <div>
      <h4 className="py-3">Select barber</h4>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row className="justify-content-sm-center">
          {barbers.map((barber) => (
            <Col key={barber._id} sm={12} md={6} lg={4}>
              <Barber barber={barber} />
            </Col>
          ))}
        </Row>
      )}
      {Object.keys(barberList.user_barber).length !== 0 &&
      location.pathname == "/barbers" ? (
        <Button
          variant="outline-warning"
          onClick={handleClick}
          style={{
            marginTop: "30px",
          }}
        >
          Book appointment
        </Button>
      ) : null}
    </div>
  );
}

export default Barbers;
