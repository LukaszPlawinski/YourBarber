import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import Barber from "../components/Barber";

function Barbers() {
  const [barbers, setBarbers] = useState([]);

  useEffect(() => {
    async function fetchBarbers() {
      const { data } = await axios.get("http://127.0.0.1:8000/api/barbers/");
      setBarbers(data);
    }
    fetchBarbers();
  }, []);
  return (
    <div>
      <h2 className="py-3">Barbers</h2>
      <Row>
        {barbers.map((barber) => (
          <Col key={barber._id} sm={12} md={6} lg={4}>
            <Barber barber={barber} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Barbers;
