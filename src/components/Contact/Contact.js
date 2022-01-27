import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  Box,
  Boxes,
  BoxNum,
  BoxCustom,
  Input,
  TextArea,
  FormButton,
} from "./ContactStyles";

const Contact = () => {
  const form = useRef();
  const [sending, setSending] = useState('Send Message')

  const sendEmail = (e) => {
    e.preventDefault();
    const { user_name, user_email, message } = e.target.elements;
    let details = {
      name: user_name.value,
      email: user_email.value,
      message: message.value,
    };
    if (Object.values(details).some((value) => value === "")) {
      toast.warning("You need to fill all fields to send a message!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      setSending('Sending...')
      emailjs
        .sendForm(
          "service_1w1vq9q",
          "template_wjzvmdv",
          form.current,
          "user_4khb3vLRwVTYaM61nsKmL"
        )
        .then(
          (result) => {
            toast.success("Message sent, we will be soon in touch!", {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            form.current.reset();
            setSending('Send Message');
          },
          (err) => {
            console.log(err.text);
            setSending('Send Message')
            toast.error("Ups! Problem sending message, please try again.", {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
        );
    }
  };
  return (
    <Section>
      <SectionDivider />
      <br />
      <SectionTitle>Contact</SectionTitle>
      <Boxes ref={form} onSubmit={sendEmail} autoComplete="nope">
        <Box>
          <BoxNum>Name</BoxNum>
          <Input type="text" name="user_name" autoComplete="off"  />
        </Box>
        <Box>
          <BoxNum>Email</BoxNum>
          <Input type="email" name="user_email" autoComplete="none"  />
        </Box>
        <BoxCustom>
          <BoxNum>Message</BoxNum>
          <TextArea name="message"  />
        </BoxCustom>
        <FormButton type="submit" value={sending} />
        <input type="text" autoComplete="on" style={{ display: "none" }} />
      </Boxes>
    </Section>
  );
};

export default Contact;
