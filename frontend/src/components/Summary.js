import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../components/CheckoutForm";
import { Table } from "react-bootstrap";
import setHours from "date-fns/setHours";

const stripePromise = loadStripe(process.env.REACT_APP_PK_STRIPE); // pk stripe key into brackets

function Summary({ barber, service, appointment, history, user }) {
  const UTCDateToLocal = (date) => {
    const newTime =
      date.toLocaleString().slice(11, -6) + date.toLocaleString().slice(18);
    return newTime;
  };
  return (
    <div>
      <h4 className="mb-4">Appointment Details</h4>

      <Table striped responsive className="table-sm">
        <tbody>
          <tr>
            <td>Service: &nbsp;&nbsp; {service.serviceName}</td>
          </tr>
          <tr>
            <td>Barber: &nbsp;&nbsp;{barber.nickname}</td>
          </tr>
          <tr>
            <td>
              Date: &nbsp;&nbsp;
              {appointment.toISOString().slice(0, 10)}
            </td>
          </tr>
          <tr>
            <td>
              Time: &nbsp;&nbsp;
              {UTCDateToLocal(appointment)}
            </td>
          </tr>
          <tr>
            <td>Cost: &nbsp;&nbsp;{service.price} &euro;</td>
          </tr>
        </tbody>
      </Table>

      <Elements stripe={stripePromise}>
        <CheckoutForm
          amount={service.price}
          barber={barber}
          service={service}
          appointment={appointment}
          history={history}
          user={user}
        />
      </Elements>
    </div>
  );
}

export default Summary;
