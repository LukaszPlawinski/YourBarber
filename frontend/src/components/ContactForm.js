import React from "react";
import emailjs from "emailjs-com";
import { Form, Col, Button } from "react-bootstrap";

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1x8v83k",
        "template_ia48tcq",
        e.target,
        "user_tK28llHY5LPvuWRuk7EIP"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <Form className="contact-form" onSubmit={sendEmail}>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Name</Form.Label>
          <Form.Control placeholder="Name" name="name" />
        </Form.Group>
        <Form.Group className="pl-4" as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" />
        </Form.Group>
      </Form.Row>

      <Form.Group controlId="formGridMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          rows="4"
          placeholder="Message"
          name="message"
        />
      </Form.Group>

      <Button
        className="my-5"
        variant="outline-warning"
        type="submit"
        value="Send"
      >
        Submit
      </Button>
    </Form>
  );
}
