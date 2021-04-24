import React from "react";
import ContactForm from "../components/ContactForm";
import ContactDetails from "../components/ContactDetails";
import FormContainer from "../components/FormContainer";

function Contact() {
  return (
    <div>
      <FormContainer size={8}>
        <ContactForm />
      </FormContainer>
      <FormContainer size={10}>
        <ContactDetails />
      </FormContainer>
    </div>
  );
}

export default Contact;
