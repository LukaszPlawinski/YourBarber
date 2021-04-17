import React from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setAppointmentIsPaid } from "../actions/appointmentsActions";
import axios from "axios";

function CheckoutForm({ amount, barber, service, appointment, history }) {
  const dispatch = useDispatch();
  const stripe = useStripe();
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

        console.log(barber, service, appointment.toISOString());
        const bodyAppointmentData = new FormData();
        bodyAppointmentData.append("barber", barber._id);
        bodyAppointmentData.append("service", service._id);
        bodyAppointmentData.append("date", appointment.toISOString());
        bodyAppointmentData.append("isPayed", "True");

        await axios({
          method: "post",
          url: "/api/appointments/create",
          data: bodyAppointmentData,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log("Appointment created");
        dispatch(setAppointmentIsPaid(true));
        history.push("/home");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              backgroundColor: "white",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <Button style={{ marginTop: "20px" }} type="submit" disabled={!stripe}>
        Pay
      </Button>
    </form>
  );
}

export default CheckoutForm;
