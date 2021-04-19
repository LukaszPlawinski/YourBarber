import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../components/CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_PK_STRIPE); // pk stripe key into brackets

function Summary({ barber, service, appointment, history, user }) {
  return (
    <div>
      <h3>Your appointment details</h3>
      <p>Service: {service.serviceName}</p>
      <p>Barber: {barber.nickname}</p>
      <p>{appointment.toISOString()}</p>
      <p>Total: {service.price} euro</p>

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
