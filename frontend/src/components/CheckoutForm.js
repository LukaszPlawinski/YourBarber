import React from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setAppointmentIsPaid } from "../actions/appointmentsActions";
import axios from "axios";
import { useHistory } from "react-router-dom";

// That component handles stripe payment
function CheckoutForm({ amount, barber, service, appointment, user }) {
  const dispatch = useDispatch();
  const stripe = useStripe();
  let history = useHistory();
  const printUser = () => {
    console.log(user);
  };
  const elements = useElements();
  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }
    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod.id);

      const bodyFormData = new FormData();
      bodyFormData.append("amount", parseFloat(amount));
      bodyFormData.append("currency", "eur");
      bodyFormData.append("customer", user.email);

      const response = await axios({
        method: "post",
        url: "/api/appointments/createPaymentIntent",
        data: bodyFormData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const client_secret = response.data;

      try {
        const confirm = await stripe.confirmCardPayment(client_secret, {
          payment_method: paymentMethod.id,
        });

        const bodyAppointmentData = new FormData();
        bodyAppointmentData.append("barber", barber._id);
        bodyAppointmentData.append("service", service._id);
        bodyAppointmentData.append("date", appointment.toISOString());
        bodyAppointmentData.append("isPayed", "True");
        bodyAppointmentData.append("user", user._id);

        await axios({
          method: "post",
          url: "/api/appointments/create",
          data: bodyAppointmentData,
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${user.token}`,
          },
        });
        dispatch(setAppointmentIsPaid(true));
        history.push("/home");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset className="FormGroup">
        <CardElement
          options={{
            style: {
              base: {
                color: "#BFBB50",
                border: "1px solid white",
                fontWeight: 500,
                fontFamily: "Source Code Pro, Consolas, Menlo, monospace",
                fontSize: "16px",
                fontSmoothing: "antialiased",

                "::placeholder": {
                  color: "#CFD7DF",
                },
                ":-webkit-autofill": {
                  color: "#e39f48",
                },
              },
              invalid: {
                color: "#fff",
                ":focus": {
                  color: "#FA755A",
                },
                "::placeholder": {
                  color: "#FFCCA5",
                },
              },
            },
          }}
        />
      </fieldset>
      <Button
        style={{ marginTop: "20px" }}
        variant="outline-warning"
        type="submit"
        disabled={!stripe}
        onClick={printUser}
      >
        Pay
      </Button>
    </form>
  );
}

export default CheckoutForm;
